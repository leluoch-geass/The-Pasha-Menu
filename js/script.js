/*
Menu data is now stored in js/menu-data.js.
Use BRANCH_CODE = 'AW' for Al Wakuir or 'AH' for Abu Hamour.
Only items and sizes available for the chosen branch are rendered.
*/

function normalizeSize(size) {
    if (Array.isArray(size)) {
        return {
            label: size[0] || '',
            price: size[1] || '',
            persons: size[2] || '',
            branches: size[3]
        };
    }
    return size;
}

function isAvailableForBranch(entity) {
    return !entity.branches || entity.branches.includes(BRANCH_CODE);
}

function getAvailableSizes(item) {
    return (item.sizes || []).map(normalizeSize).filter(size => isAvailableForBranch(size));
}

function getAvailableItems(category) {
    return (category.items || [])
        .map(item => ({ ...item, sizes: getAvailableSizes(item) }))
        .filter(item => isAvailableForBranch(item) && item.sizes.length > 0);
}

function getAvailableMenuData() {
    return menuData
        .map(category => ({ ...category, items: getAvailableItems(category) }))
        .filter(category => category.link || (category.items && category.items.length > 0));
}

function createCard(item, folder) {

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');

    img.src = item.img
        ? `img/${folder}/${item.img}`
        : 'img/logoTrans.png';

    img.alt = item.title;

    img.onerror = () => {
        img.onerror = null;
        img.src = 'img/logoTrans.png';
    };

    card.appendChild(img);


    const content = document.createElement('div');
    content.className = 'content';

    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    content.appendChild(h3);


    const details = document.createElement('div');
    details.className = 'details';

    item.sizes.forEach(s => {
        const size = normalizeSize(s);
        const row = document.createElement('div');
        row.className = 'row';
        const a = document.createElement('span'); a.textContent = size.label;
        const b = document.createElement('span'); b.textContent = size.price;
        const c = document.createElement('span'); c.textContent = size.persons;
        row.appendChild(a); row.appendChild(b); row.appendChild(c);
        details.appendChild(row);
    });

    content.appendChild(details);
    card.appendChild(content);

    card.addEventListener('click', () => {
        // collapse other cards
        document.querySelectorAll('.card').forEach(other => {
            if (other !== card) other.classList.remove('active');
        });
        card.classList.toggle('active');
    });

    return card;
}

function renderMenu(containerId = 'menu', data = getAvailableMenuData()) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // render as a grid of category tiles (app-home style)
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'categories-grid';

    data.forEach((group, idx) => {
        const tile = document.createElement('button');
        tile.className = 'category-tile';
        tile.type = 'button';

        const img = document.createElement('img');
        img.className = 'tile-img';
        // determine tile image from category folder
        let tileSrc = 'img/logoTrans.png';

        // ⭐ If category has custom icon → use it FIRST
        if (group.img) {
            tileSrc = group.img.startsWith('img/')
                ? group.img
                : `img/${group.img}`;
        }
        // Otherwise use first product image
        else if (group.items?.length && group.items[0].img) {
            const slug = group.category.toLowerCase().replace(/\s+/g, '-');
            tileSrc = `img/${slug}/${group.items[0].img}`;
        }

        img.src = tileSrc;
        img.alt = group.category;
        img.onerror = () => { img.onerror = null; img.src = 'img/logoTrans.png'; };

        const title = document.createElement('div');
        title.className = 'tile-title';
        title.textContent = group.category;

        tile.appendChild(img);
        tile.appendChild(title);
        tile.dataset.index = idx;
        grid.appendChild(tile);
    });

    container.appendChild(grid);
}

document.addEventListener('DOMContentLoaded', () => {
    const visibleMenu = getAvailableMenuData();
    renderMenu('menu', visibleMenu);

    // Open a category in a full-screen animated panel (app style)
    function openCategoryPanel(index, tileEl) {
        const rect = tileEl.getBoundingClientRect();
        const panel = document.createElement('div');
        panel.className = 'category-panel';
        Object.assign(panel.style, {
            position: 'fixed',
            left: rect.left + 'px',
            top: rect.top + 'px',
            width: rect.width + 'px',
            height: rect.height + 'px',
            transition: 'all 400ms cubic-bezier(.2,.8,.2,1)',
            zIndex: 2500,
            borderRadius: '16px',
        });

        const header = document.createElement('div'); header.className = 'panel-header';
        const back = document.createElement('button'); back.className = 'close-btn'; back.innerText = '←';
        back.addEventListener('click', () => closePanel(panel, rect));
        header.appendChild(back);
        const h = document.createElement('h2'); h.textContent = visibleMenu[index].category; header.appendChild(h);
        panel.appendChild(header);

        const inner = document.createElement('div'); inner.className = 'panel-inner';

        // helper to animate removing a card
        function animateRemove(el) {
            if (!el) return;
            el.style.transition = 'transform 180ms ease, opacity 180ms ease';
            el.style.opacity = '0';
            el.style.transform = 'translateY(6px)';
            setTimeout(() => { if (el && el.parentNode) el.remove(); }, 200);
        }

        // animate replacing a card with its list-item (title only)
        function animateReplaceWithList(el, catIdx, itemIdx) {
            if (!el) return;
            el.style.transition = 'transform 180ms ease, opacity 180ms ease';
            el.style.opacity = '0';
            el.style.transform = 'translateY(6px)';
            setTimeout(() => {
                const newLi = makeListItem(catIdx, itemIdx);
                if (el.parentNode) el.replaceWith(newLi);
            }, 200);
        }

        // create a simple list of item titles for this category
        const list = document.createElement('div'); list.className = 'category-list';

        function makeListItem(catIdx, itemIdx) {
            const item = visibleMenu[catIdx].items[itemIdx];
            const li = document.createElement('div');
            li.className = 'list-item';
            li.dataset.catIndex = String(catIdx);
            li.dataset.itemIndex = String(itemIdx);
            const t = document.createElement('div'); t.className = 'title'; t.textContent = item.title;
            const c = document.createElement('div'); c.className = 'chev'; c.textContent = '›';
            li.appendChild(t); li.appendChild(c);

            li.addEventListener('click', () => {
                // if this li is already replaced by a card, ignore
                // collapse any existing expanded card first
                const openCard = list.querySelector('.expanded-card');
                if (openCard) {
                    // if openCard corresponds to this item, just collapse it
                    if (openCard.dataset.catIndex === String(catIdx) && openCard.dataset.itemIndex === String(itemIdx)) {
                        animateRemove(openCard);
                        // replace with a fresh list item
                        const newLi = makeListItem(catIdx, itemIdx);
                        openCard.replaceWith(newLi);
                        return;
                    }
                    // replace other open card with its list item
                    const oldCat = Number(openCard.dataset.catIndex);
                    const oldItem = Number(openCard.dataset.itemIndex);
                    const newLiOld = makeListItem(oldCat, oldItem);
                    openCard.replaceWith(newLiOld);
                }

                // replace THIS list-item with full card (no duplicate)
                const folder = visibleMenu[catIdx].category
                .toLowerCase()
                .replace(/\s+/g, '-');
                const card = createCard(item, folder);
                card.classList.add('expanded-card');
                card.dataset.catIndex = String(catIdx);
                card.dataset.itemIndex = String(itemIdx);
                card.style.opacity = '0';
                card.style.transform = 'translateY(6px)';
                // clicking the expanded card collapses it back to the title-only
                card.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    // replace with list item
                    animateReplaceWithList(card, catIdx, itemIdx);
                }, { capture: true });
                li.replaceWith(card);
                // immediately expand details so sizes & prices are visible
                card.classList.add('active');
                // animate card in
                requestAnimationFrame(() => {
                    card.style.transition = 'transform 220ms ease, opacity 220ms ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            });

            return li;
        }

        visibleMenu[index].items.forEach((item, iItem) => {
            const li = makeListItem(index, iItem);
            list.appendChild(li);
        });

        inner.appendChild(list);
        panel.appendChild(inner);

        // backdrop
        const backdrop = document.createElement('div'); backdrop.className = 'panel-backdrop';
        // allow clicking backdrop to close
        backdrop.addEventListener('click', () => closePanel(panel, rect));
        document.body.appendChild(backdrop);
        document.body.appendChild(panel);

        // animate to full screen
        requestAnimationFrame(() => {
            backdrop.classList.add('visible');
            Object.assign(panel.style, { left: '0px', top: '0px', width: '100vw', height: '100vh', borderRadius: '0px' });
        });

        // after panel transition finishes, reveal inner cards with JS stagger
        setTimeout(() => {
            panel.classList.add('open');
            const cards = panel.querySelectorAll('.card');
            const tTrans = 'transform 320ms cubic-bezier(.2,.8,.2,1), opacity 320ms ease';
            cards.forEach((c, i) => {
                c.style.opacity = '0';
                c.style.transform = 'translateY(12px)';
                c.style.transition = tTrans;
                setTimeout(() => {
                    c.style.opacity = '1';
                    c.style.transform = 'translateY(0)';
                }, 60 + i * 45);
            });
        }, 420);
    }

    function closePanel(panel, fromRect) {
        // hide inner content then animate back to tile position
        panel.classList.remove('open');
        const cards = panel.querySelectorAll('.card');
        cards.forEach(c => { c.style.transitionDelay = '0ms'; });
        const backdrop = document.querySelector('.panel-backdrop');
        if (backdrop) backdrop.classList.remove('visible');

        // animate back to tile position
        requestAnimationFrame(() => {
            Object.assign(panel.style, { left: fromRect.left + 'px', top: fromRect.top + 'px', width: fromRect.width + 'px', height: fromRect.height + 'px', borderRadius: '16px' });
        });

        panel.addEventListener('transitionend', function onEnd(e) {
            if (!['width','height','left','top'].includes(e.propertyName)) return;
            panel.removeEventListener('transitionend', onEnd);
            if (backdrop) backdrop.remove();
            panel.remove();
        });
    }

    // attach click and hover handlers to tiles now that openCategoryPanel is defined
    document.querySelectorAll('.category-tile').forEach(tile => {
        const idx = Number(tile.dataset.index);
        tile.addEventListener('click', () => {
    const group = visibleMenu[idx];

    // If category has a link → open it
    if (group.link) {
        window.location.href = group.link; 
        return;
    }

    // otherwise open menu panel
    openCategoryPanel(idx, tile);
});

    tile.addEventListener('mouseenter', () => {
        if (window.matchMedia('(hover: hover)').matches) tile.style.transform = 'scale(1.03)';
    });
        tile.addEventListener('mouseleave', () => { tile.style.transform = ''; });
    });
});
