/*
Guide — How to add categories and items to `menuData`

Overview
- `menuData` is an array of category objects.
- Each category object looks like: { category: 'Name', items: [ ... ] }

Category object fields
- `category` (string): displayed as the section title.
- `items` (array): list of item objects (see below).

Item object fields
- `title` (string): item name shown on the card.
- `img` (string): relative path to the image (e.g., 'img/kunafe.png' or 'kunafe.png'). Place image files in the `img/` folder or update the path accordingly.
- `sizes` (array): array of rows. Each row is an array: [ sizeLabel, price, persons ]
    Example: ['Small', '18 QAR', '1 person']

Add an item to an existing category
1. Find the category object inside `menuData`.
2. Append a new item object to its `items` array. Example:

     {
         title: 'New Kunafe',
         img: 'new-kunafe.png',
         sizes: [
             ['Small', '10 QAR', '1 person'],
             ['Medium', '20 QAR', '2 persons']
         ]
     }

3. Save the referenced image file to the `img/` folder (or update the `img` path).

Add a new category
1. Append a new category object to `menuData`. Example:

     {
         category: 'Crepes',
         items: [ <item objects as shown above> ]
     }

Notes
- The script renders all categories and items into the element with id `menu` on DOMContentLoaded.
- After editing `js/script.js` (and adding images) reload the page to see changes.
- Use URL-safe filenames (no spaces). If using subfolders, include them in the `img` path.
- To add additional fields (for example, `description`), update `createCard()` to read and display the new data.

End of guide
*/

const menuData = [
    {
        category: 'Kunafe',
        items: [
            { title: 'Cheese Kunafe', img: 'Ckunafe.png', sizes: [['Small','18 QAR','1 person'],['Medium','35 QAR','2 persons'],['Large','60 QAR','4 persons']] },
            { title: 'Nutella Kunafe', img: 'Nkunafe.png', sizes: [['Small','20 QAR','1 person'],['Medium','40 QAR','2 persons'],['Large','65 QAR','4 persons']] },
            { title: 'Qhasta Kunafe', img: 'Qkunafe.png', sizes: [['Small','15 QAR','1 person'],['Medium','25 QAR','2 persons'],['Large','50 QAR','4 persons']] },
            { title: 'Pasha Kunafe', img: 'Pakunafe.png', sizes: [['Small','35 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','130 QAR','4 persons']] },
            { title: 'Pistacio Kunafe', img: 'Pkunafe.png', sizes: [['Small','25 QAR','1 person'],['Medium','50 QAR','2 persons'],['Large','100 QAR','4 persons']] },
            { title: 'Pistacio Cheese Kunafe', img: 'PCkunafe.png', sizes: [['Small','25 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','120 QAR','4 persons']] },
            { title: 'Billuriye Kunafe', img: 'Bkunafe.png', sizes: [['Small','35 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','130 QAR','4 persons']] },
        ]
    },
    {
        category: 'Pistachio Baklawa',
        items: [
            { title: 'Durum Baklawa', img: 'Dbak.png', sizes: [['500g','67.50 QAR','20 - 24 pieces'],['1kg','135 QAR','40 - 44 pieces']] },
            { title: 'Sweet Mix Baklawa', img: 'Mbak.png', sizes: [['500g','70 QAR','12 - 14 pieces'],['1kg','145 QAR','20 - 28 pieces']] },
            { title: 'Pistacio Baklawa', img: 'Pbak.png', sizes: [['500g','67.50 QAR','10 - 12 pieces'],['1kg','135 QAR','15 - 18 pieces']] },
            { title: 'Walnut Padish Baklawa', img: 'NBak.png', sizes: [['500g','67.50 QAR','10 - 12 pieces'],['1kg','135 QAR','20 - 23 pieces']] },
            { title: 'Mussel Baklawa', img: 'Mbak.png', sizes: [['500g','75 QAR','12 - 15 pieces'],['1kg','150 QAR','20 - 23 pieces']] },
            { title: 'Sobiyet Baklawa', img: 'Sbak.png', sizes: [['500g','70 QAR','8 - 10 pieces'],['1kg','140 QAR','16 - 19 pieces']] },
            { title: 'Roll', img: 'Rbak.png', sizes: [['500g','80 QAR','10 - 13 pieces'],['1kg','160 QAR','16 - 20 pieces']] },
            { title: 'Cold Baklawa', img: 'Coldbak.png', sizes: [['500g','65 QAR','9 - 12 pieces'],['1kg','130 QAR','20 - 22 pieces']] },
            { title: 'Carrot Slice Baklawa', img: 'Cbak.png', sizes: [['120g','15 QAR','1 piece'],['1kg','125 QAR','7 - 8 pieces']] },
        ]
    },
        {
        category: 'Cakes',
        items: [
            { title: 'Caramel', img: 'CCcake.png', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons']] },
            { title: 'Lotus', img: 'Lcake.png', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons'],] },
            { title: 'White Chocolate', img: 'WCCake.png', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons'],['Family','120 QAR','10 - 14 persons']] },
            { title: 'Dark Chocolate', img: 'DCcake.png', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons']] },
            { title: 'Chocolate with Nut Sauce', img: 'Ncake.png', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons'],['Family','120 QAR','10 - 14 persons']] },
            { title: 'Strawberry Princess', img: 'SPcake.png', sizes: [['Mini','25 QAR','1 person'],['Small','65 QAR','4 persons'],['Medium','85 QAR','6 persons']] },
            { title: 'Crunchy Pistachio', img: 'Pcake.png', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons']] },
            { title: 'Lady Bug', img: 'LBcake.png', sizes: [['Mini','20 QAR','1 person']] },
        ]
    },
    {
        category: 'Slice Cakes',
            items: [
            { title: 'Mosaic Cake', img: 'mosaic.png', sizes: [['1 Slice','15 QAR','1 person']] },
            { title: 'Tiramisu Cake', img: 'tiramisu.png', sizes: [['1 Slice','18 QAR','1 person']] },
            { title: 'Carrot Cake', img: 'Ccake.png', sizes: [['1 Slice','17 QAR','1 person']] },
            { title: 'Honey Cake', img: 'Hcake.png', sizes: [['1 Slice','18 QAR','1 person']] },
            { title: 'Chocolate Brownie', img: 'Brownies.png', sizes: [['1 Slice','20 QAR','1 person']] },
            ]
    },
    {
        category: 'Cheese Cakes',
        items: [
            { title: 'San Sebastian', img: 'san.png', sizes: [['1 Slice','20 QAR','1 person']] },
            { title: 'Mango', img: 'mango.png', sizes: [['1 Slice','15 QAR','1 person']] },
            { title: 'Blueberry', img: 'blueberry.png', sizes: [['1 Slice','15 QAR','1 person']] },
            { title: 'Lemon', img: 'lemon.png', sizes: [['1 Slice','15 QAR','1 person']] },
        ]
    },
    {
        category: 'Milk Desserts',
        items: [
            { title: 'Trilece', img: 'trilece.png', sizes: [['1 Slice','20 QAR','1 person']] },
            { title: 'Sutlac', img: 'sutlac.png', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Strawberry Magnolia', img: 'magnolia.png', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Lotus Dream', img: 'dream.png', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Kazandibi', img: 'kazandibi.png', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Profiteroles', img: 'profiteroles.png', sizes: [['1 Piece','20 QAR','1 person']] },
        ]
    },
    {  
        category: 'Cookies',
        items: [
            { title: 'Mix Sweet Cookies', img: 'SWcookies.png', sizes: [['250g','21.25 QAR','10 - 14 pieces'],['500g','42.50 QAR','20 - 24 pieces'],['1kg','85 QAR','40 - 48 pieces']] },
            { title: 'Mix Salty Cookies', img: 'SAcookies.png', sizes: [['250g','17.50 QAR','10 - 14 pieces'],['500g','35 QAR','20 - 24 pieces'],['1kg','70 QAR','40 - 48 pieces']] },
            { title: 'Mix Special Sweet Cookies', img: 'SScookies.png', sizes: [['250g','25 QAR','10 - 14 pieces'],['500g','50 QAR','20 - 24 pieces'],['1kg','100 QAR','40 - 48 pieces']] },
            { title: 'Macaron', img: 'macaron.png', sizes: [['1 Box','25 QAR','6 pieces']] },
        ]
    },
    {
        category: 'Turkish Delight',
        items: [
            { title: 'Mix Turkish Delight', img: 'delight.png', sizes: [['250g','25 QAR','-'],['500g','50 QAR','-'],['1kg','100 QAR','-']] },
        ]
    },
    {
        category: 'Breads',
        items: [
            { title: 'Turkish Simit', img: 'simit.png', sizes: [['1 Piece','5 QAR','1 person']] },
            { title: 'Kashkaval Cheese Pocaga', img: 'kashkaval.png', sizes: [['1 Piece','7 QAR','1 persons']] },
            { title: 'Feta Cheese Pocaga', img: 'feta.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Plain Pocaga', img: 'plain-pocaga.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Olive Pocaga', img: 'olive-pocaga.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Potato Pocaga', img: 'potato-pocaga.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Bagel with Potatoes', img: 'bagel-potatoes.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Bagel with Olive', img: 'bagel-olive.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Plain Bagel', img: 'plain-bagel.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Bagel with Kashkaval Cheese', img: 'bagel-kashkaval.png', sizes: [['1 Piece','7 QAR','1 person']] },
            { title: 'Borek', img: 'borek.png', sizes: [['1 Slice','13 QAR','1 person']] },
        ]
    },
    {
        category: 'Ice Coffee',
        items: [
            { title: 'Iced Lattee', img: 'iced-latte.png', sizes: [['1 Cap','15 QAR','1 person']] },
            { title: 'Iced Spanish Lattee', img: 'iced-spanish-latte.png', sizes: [['1 Cap','17 QAR','1 person']] },
            { title: 'Iced Americano', img: 'iced-americano.png', sizes: [['1 Cap','14 QAR','1 person']] },
        ]
    },
    {
        category: 'Cold Drinks',
        items: [
            { title: 'Hand Made Lemonade', img: 'lemonade.png', sizes: [['Small','5 QAR','1 person'],['Large','10 QAR','1 person']] },
            { title: 'Coca Cola', img: 'coca-cola.png', sizes: [['1 Can','5 QAR','1 person']] },
            { title: 'Fanta', img: 'fanta.png', sizes: [['1 Can','5 QAR','1 person']] },
            { title: 'Sprite', img: 'sprite.png', sizes: [['1 Can','5 QAR','1 person']] },
            { title: 'Rayyan Natural Water', img: 'rayyan.png', sizes: [['1 Bottle','3 QAR','1 person']] },
            { title: 'Beypazari', img: 'beypazari.png', sizes: [['1 Bottle','5 QAR','1 person']] },

        ]
    },
    {
        category: 'Tea',
        items: [
            { title: 'Turkish Tea', img: 'turkish-tea.png', sizes: [['1 Cup','3 QAR','1 person']] },
            { title: 'Double Turkish Tea', img: 'dturkish-tea.png', sizes: [['1 Cup','5 QAR','1 person']] },
        ]
    },
    {
        category: 'Keeta',
        img: 'keeta/keeta.png',
        link: 'https://url-eu.mykeeta.com/jVyiVEjz'
    },
         
    {
        category: 'Hot Coffee',
        items: [
            { title: 'Turkish Coffee', img: 'turkish-coffee.png', sizes: [['1 Cup','10 QAR','1 person']] },
            { title: 'Double Turkish Coffee', img: 'dturkish-coffee.png', sizes: [['1 Cup','20 QAR','1 person']] },
            { title: 'Espresso', img: 'espresso.png', sizes: [['1 Cup','10 QAR','1 person']] },
            { title: 'Double Espresso', img: 'despresso.png', sizes: [['1 Cup','20 QAR','1 person']] },
            { title: 'Long Espresso', img: 'long.png', sizes: [['1 Cup','12 QAR','1 person']] },
            { title: 'Americano', img: 'americano.png', sizes: [['1 Cup','12 QAR','1 person']] },
            { title: 'Cappuccino', img: 'cappuccino.png', sizes: [['1 Cup','13 QAR','1 person']] },
            { title: 'Lattee', img: 'lattee.png', sizes: [['1 Cup','13 QAR','1 person']] },
            { title: 'Spanish Lattee', img: 'spanish.png', sizes: [['1 Cup','15 QAR','1 person']] },
            { title: 'Cortado', img: 'cortado.png', sizes: [['1 Cup','12 QAR','1 person']] },
            { title: 'Flat White', img: 'white.png', sizes: [['1 Cup','12 QAR','1 person']] },
        ]   
    },
    {
        category: 'Ice Cream',
        items: [
            { title: 'Vanilla Ice Cream', img: 'vanilla.png', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Chocolate Ice Cream', img: 'chocolate.png', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Strawberry Ice Cream', img: 'strawberry.png', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Mango Ice Cream', img: 'mango.png', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Pistachio Ice Cream', img: 'pistachio.png', sizes: [['1 Scoop','5 QAR','1 person']] },
        ]
    },
    {
        category: 'Talabat',
        img: 'talabat/talabat.png',
        link: 'https://www.talabat.com'
    },
    
];



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
        const row = document.createElement('div');
        row.className = 'row';
        const a = document.createElement('span'); a.textContent = s[0];
        const b = document.createElement('span'); b.textContent = s[1];
        const c = document.createElement('span'); c.textContent = s[2];
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

function renderMenu(containerId = 'menu') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // render as a grid of category tiles (app-home style)
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'categories-grid';

    menuData.forEach((group, idx) => {
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
    renderMenu();

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
        const h = document.createElement('h2'); h.textContent = menuData[index].category; header.appendChild(h);
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
            const item = menuData[catIdx].items[itemIdx];
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
                const folder = menuData[catIdx].category
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

        menuData[index].items.forEach((item, iItem) => {
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
    const group = menuData[idx];

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
