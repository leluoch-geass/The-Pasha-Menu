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
- `img` (string): relative path to the image (e.g., 'img/kunafe.jpg' or 'kunafe.jpg'). Place image files in the `img/` folder or update the path accordingly.
- `sizes` (array): array of rows. Each row is an array: [ sizeLabel, price, persons ]
    Example: ['Small', '18 QAR', '1 person']

Add an item to an existing category
1. Find the category object inside `menuData`.
2. Append a new item object to its `items` array. Example:

     {
         title: 'New Kunafe',
         img: 'new-kunafe.jpg',
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
            { title: 'Cheese Kunafe', img: 'kunafe.jpg', sizes: [['Small','18 QAR','1 person'],['Medium','35 QAR','2 persons'],['Large','60 QAR','4 persons']] },
            { title: 'Nutella Kunafe', img: 'kunafe.jpg', sizes: [['Small','20 QAR','1 person'],['Medium','40 QAR','2 persons'],['Large','65 QAR','4 persons']] },
            { title: 'Qhasta Kunafe', img: 'kunafe.jpg', sizes: [['Small','15 QAR','1 person'],['Medium','25 QAR','2 persons'],['Large','50 QAR','4 persons']] },
            { title: 'Pasha Kunafe', img: 'kunafe.jpg', sizes: [['Small','35 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','130 QAR','4 persons']] },
            { title: 'Pistacio Kunafe', img: 'kunafe.jpg', sizes: [['Small','25 QAR','1 person'],['Medium','50 QAR','2 persons'],['Large','100 QAR','4 persons']] },
            { title: 'Pistacio Cheese Kunafe', img: 'kunafe.jpg', sizes: [['Small','25 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','120 QAR','4 persons']] },
            { title: 'Billuriye Kunafe', img: 'kunafe.jpg', sizes: [['Small','35 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','130 QAR','4 persons']] },
        ]
    },
    {
        category: 'Pistachio Baklawa',
        items: [
            { title: 'Durum Baklawa', img: 'baklawa.jpg', sizes: [['500g','67.50 QAR','20 - 24 pieces'],['1kg','135 QAR','40 - 44 pieces']] },
            { title: 'Sweet Mix Baklawa', img: 'baklawa.jpg', sizes: [['500g','70 QAR','12 - 14 pieces'],['1kg','145 QAR','20 - 28 pieces']] },
            { title: 'Pistacio Baklawa', img: 'baklawa.jpg', sizes: [['500g','67.50 QAR','10 - 12 pieces'],['1kg','135 QAR','15 - 18 pieces']] },
            { title: 'Walnut Padish Baklawa', img: 'baklawa.jpg', sizes: [['500g','67.50 QAR','10 - 12 pieces'],['1kg','135 QAR','20 - 23 pieces']] },
            { title: 'Mussel Baklawa', img: 'baklawa.jpg', sizes: [['500g','75 QAR','12 - 15 pieces'],['1kg','150 QAR','20 - 23 pieces']] },
            { title: 'Sobiyet Baklawa', img: 'baklawa.jpg', sizes: [['500g','70 QAR','8 - 10 pieces'],['1kg','140 QAR','16 - 19 pieces']] },
            { title: 'Roll', img: 'baklawa.jpg', sizes: [['500g','80 QAR','10 - 13 pieces'],['1kg','160 QAR','16 - 20 pieces']] },
            { title: 'Cold Baklawa', img: 'baklawa.jpg', sizes: [['500g','65 QAR','9 - 12 pieces'],['1kg','130 QAR','20 - 22 pieces']] },
            { title: 'Carrot Slice Baklawa', img: 'baklawa.jpg', sizes: [['120g','15 QAR','1 piece'],['1kg','125 QAR','7 - 8 pieces']] },
        ]
    },
        {
        category: 'Cakes',
        items: [
            { title: 'Lotus', img: 'Cake.jpg', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons'],] },
            { title: 'White Chocolate', img: 'Cake.jpg', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons'],['Family','120 QAR','10 - 14 persons']] },
            { title: 'Dark Chocolate', img: 'Cake.jpg', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons']] },
            { title: 'Caramel', img: 'Cake.jpg', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons']] },
            { title: 'Chocolate with Nut Sauce', img: 'Cake.jpg', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons'],['Large','100 QAR','8 - 10 persons'],['Family','120 QAR','10 - 14 persons']] },
            { title: 'Strawberry Princess', img: 'Cake.jpg', sizes: [['Mini','25 QAR','1 person'],['Small','65 QAR','4 persons'],['Medium','85 QAR','6 persons']] },
            { title: 'Crunchy Pistachio', img: 'Cake.jpg', sizes: [['Mini','20 QAR','1 person'],['Small','60 QAR','4 persons'],['Medium','80 QAR','6 persons']] },
            { title: 'Lady Bug', img: 'Cake.jpg', sizes: [['Mini','20 QAR','1 person']] },
        ]
    },
    {
        category: 'Slice Cakes',
            items: [
            { title: 'Mosaic Cake', img: 'slice-cake.jpg', sizes: [['1 Slice','15 QAR','1 person']] },
            { title: 'Tiramisu Cake', img: 'slice-cake.jpg', sizes: [['1 Slice','18 QAR','1 person']] },
            { title: 'Carrot Cake', img: 'slice-cake.jpg', sizes: [['1 Slice','17 QAR','1 person']] },
            { title: 'Honey Cake', img: 'slice-cake.jpg', sizes: [['1 Slice','18 QAR','1 person']] },
            ]
    },
    {
        category: 'Slice Cheese Cakes',
        items: [
            { title: 'San Sebastian', img: 'slice-cheese-cake.jpg', sizes: [['1 Slice','20 QAR','1 person']] },
            { title: 'Mango', img: 'slice-cheese-cake.jpg', sizes: [['1 Slice','20 QAR','1 person']] },
            { title: 'Blueberry', img: 'slice-cheese-cake.jpg', sizes: [['1 Slice','20 QAR','1 person']] },
            { title: 'Lemon', img: 'slice-cheese-cake.jpg', sizes: [['1 Slice','20 QAR','1 person']] },
        ]
    },
    {
        category: 'Milk Deserts',
        items: [
            { title: 'Trilece', img: 'milk-desert.jpg', sizes: [['1 Slice','20 QAR','1 person']] },
            { title: 'Sutlac', img: 'milk-desert.jpg', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Strawberry Magnolia', img: 'milk-desert.jpg', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Lotus Dream', img: 'milk-desert.jpg', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Kazandibi', img: 'milk-desert.jpg', sizes: [['1 Piece','20 QAR','1 person']] },
            { title: 'Profiteroles', img: 'milk-desert.jpg', sizes: [['1 Piece','20 QAR','1 person']] },
        ]
    },
    {  
        category: 'Cookies',
        items: [
            { title: 'Mix Sweet Cookies', img: 'cookies.jpg', sizes: [['250g','21.25 QAR','10 - 14 pieces'],['500g','42.50 QAR','20 - 24 pieces'],['1kg','85 QAR','40 - 48 pieces']] },
            { title: 'Mix Salty Cookies', img: 'cookies.jpg', sizes: [['250g','17.50 QAR','10 - 14 pieces'],['500g','35 QAR','20 - 24 pieces'],['1kg','70 QAR','40 - 48 pieces']] },
            { title: 'Mix Special Sweet Cookies', img: 'cookies.jpg', sizes: [['250g','25 QAR','10 - 14 pieces'],['500g','50 QAR','20 - 24 pieces'],['1kg','100 QAR','40 - 48 pieces']] },
            { title: 'Macaron', img: 'cookies.jpg', sizes: [['1 Box','25 QAR','6 pieces']] },
        ]
    },
    {
        category: 'Turkish Delight',
        items: [
            { title: 'Mix Turkish Delight', img: 'turkish-delight.jpg', sizes: [['250g','25 QAR','-'],['500g','50 QAR','-'],['1kg','100 QAR','-']] },
        ]
    },
    {
        category: 'Breads',
        items: [
            { title: 'Turkish Simit', img: 'bread.jpg', sizes: [['1 Piece','5 QAR','1 person']] },
            { title: 'Kashkaval Cheese', img: 'bread.jpg', sizes: [['1 Piece','7 QAR','1 persons']] },
            { title: 'Potato Pocaga', img: 'bread.jpg', sizes: [['1 Piece','10 QAR','1 person']] },
            { title: 'Olive Pocaga', img: 'bread.jpg', sizes: [['1 Piece','12 QAR','1 person']] },
            { title: 'Borek', img: 'bread.jpg', sizes: [['1 Slice','13 QAR','1 person']] },

        ]
    },
    {
        category: 'Cold Drinks',
        items: [
            { title: 'Iced Lattee', img: 'cold-drink.jpg', sizes: [['1 Cap','15 QAR','1 person']] },
            { title: 'Iced Spanish Lattee', img: 'cold-drink.jpg', sizes: [['1 Cap','17 QAR','1 person']] },
            { title: 'Iced Americano', img: 'cold-drink.jpg', sizes: [['1 Cap','14 QAR','1 person']] },
            { title: 'Coca Cola', img: 'cold-drink.jpg', sizes: [['1 Can','5 QAR','1 person']] },
            { title: 'Fanta', img: 'cold-drink.jpg', sizes: [['1 Can','5 QAR','1 person']] },
            { title: 'Sprite', img: 'cold-drink.jpg', sizes: [['1 Can','5 QAR','1 person']] },
            { title: 'Mineral Water', img: 'cold-drink.jpg', sizes: [['1 Bottle','3 QAR','1 person']] },
            { title: 'Ayran', img: 'cold-drink.jpg', sizes: [['1 Bottle','5 QAR','1 person']] },

        ]
    },
    {
        category: 'Hot Drinks',
        items: [
            { title: 'Turkish Tea', img: 'hot-drink.jpg', sizes: [['1 Cup','3 QAR','1 person']] },
            { title: 'Double Turkish Tea', img: 'hot-drink.jpg', sizes: [['1 Cup','5 QAR','1 person']] },
            { title: 'Turkish Coffee', img: 'hot-drink.jpg', sizes: [['1 Cup','10 QAR','1 person']] },
            { title: 'Double Turkish Coffee', img: 'hot-drink.jpg', sizes: [['1 Cup','20 QAR','1 person']] },
            { title: 'Espresso', img: 'hot-drink.jpg', sizes: [['1 Cup','10 QAR','1 person']] },
            { title: 'Double Espresso', img: 'hot-drink.jpg', sizes: [['1 Cup','12 QAR','1 person']] },
            { title: 'Americano', img: 'hot-drink.jpg', sizes: [['1 Cup','12 QAR','1 person']] },
            { title: 'Cappuccino', img: 'hot-drink.jpg', sizes: [['1 Cup','15 QAR','1 person']] },
            { title: 'Lattee', img: 'hot-drink.jpg', sizes: [['1 Cup','15 QAR','1 person']] },
            { title: 'Spanish Lattee', img: 'hot-drink.jpg', sizes: [['1 Cup','17 QAR','1 person']] },
            { title: 'Cortado', img: 'hot-drink.jpg', sizes: [['1 Cup','15 QAR','1 person']] },
            { title: 'Flat White', img: 'hot-drink.jpg', sizes: [['1 Cup','15 QAR','1 person']] },
        ]   
    },
    {
        category: 'Ice Cream',
        items: [
            { title: 'Vanilla Ice Cream', img: 'ice-cream.jpg', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Chocolate Ice Cream', img: 'ice-cream.jpg', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Strawberry Ice Cream', img: 'ice-cream.jpg', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Mango Ice Cream', img: 'ice-cream.jpg', sizes: [['1 Scoop','5 QAR','1 person']] },
            { title: 'Pistachio Ice Cream', img: 'ice-cream.jpg', sizes: [['1 Scoop','5 QAR','1 person']] },
        ]
    }
];

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    card.appendChild(img);

    const content = document.createElement('div');
    content.className = 'content';

    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    content.appendChild(h3);

    const tap = document.createElement('p');
    tap.className = 'tap';
    tap.textContent = 'Tap to view sizes & prices';
    content.appendChild(tap);

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

    menuData.forEach(group => {
        const h2 = document.createElement('h2');
        h2.className = 'category';
        h2.textContent = group.category;
        container.appendChild(h2);

        group.items.forEach(item => container.appendChild(createCard(item)));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();

    // add small logo to each category header so every category shows a logo
    const mainLogo = document.querySelector('.logo img');
    const logoSrc = mainLogo ? mainLogo.src : 'img/logoTrans.png';
    document.querySelectorAll('.category').forEach(cat => {
        const img = document.createElement('img');
        img.src = logoSrc;
        img.className = 'header-logo';
        cat.prepend(img);
    });
    if (!mainLogo) return;

    let currentCategory = null;
    let isAnimating = false;
    const duration = 500; // ms (user requested 0.5s)

    function createFly(src, rect) {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'logo-fly';
        img.style.left = rect.left + 'px';
        img.style.top = rect.top + 'px';
        img.style.width = rect.width + 'px';
        img.style.height = rect.height + 'px';
        img.style.transform = 'translate(0,0)';
        img.style.opacity = '1';
        document.body.appendChild(img);
        return img;
    }

    function animateToCategory(targetCat) {
        if (!targetCat || isAnimating) return;
        const sourceRect = mainLogo.getBoundingClientRect();
        const targetRect = targetCat.getBoundingClientRect();

        const fly = createFly(mainLogo.src, sourceRect);
        isAnimating = true;

        const targetLeft = targetRect.left + 6;
        const targetTop = targetRect.top + (targetRect.height - sourceRect.height) / 2;
        const dx = targetLeft - sourceRect.left;
        const dy = targetTop - sourceRect.top;

        fly.getBoundingClientRect();
        fly.style.transition = `transform ${duration}ms ease, opacity ${duration/2}ms ease`;
        fly.style.transform = `translate(${dx}px, ${dy}px) scale(0.35)`;

        const onEnd = (e) => {
            if (e.propertyName !== 'transform') return;
            fly.removeEventListener('transitionend', onEnd);
            // mark target header logo active (do not remove logos since each category has one)
            document.querySelectorAll('.header-logo').forEach(el => el.classList.remove('header-logo--active'));
            const targetSmall = targetCat.querySelector('.header-logo');
            if (targetSmall) targetSmall.classList.add('header-logo--active');
            fly.remove();
            isAnimating = false;
            currentCategory = targetCat;
            // remove active class after a short delay so it can be reapplied on future animations
            setTimeout(() => { if (targetSmall) targetSmall.classList.remove('header-logo--active'); }, 700);
        };

        fly.addEventListener('transitionend', onEnd);
        setTimeout(() => { if (isAnimating) { fly.remove(); isAnimating=false; } }, duration + 400);
    }

    function animateBackToLogo() {
        const headerLogo = document.querySelector('.header-logo');
        if (!headerLogo || isAnimating) return;
        const sourceRect = headerLogo.getBoundingClientRect();
        const targetRect = mainLogo.getBoundingClientRect();
        const fly = createFly(mainLogo.src, sourceRect);
        isAnimating = true;

        const dx = targetRect.left - sourceRect.left;
        const dy = targetRect.top - sourceRect.top;

        fly.getBoundingClientRect();
        fly.style.transition = `transform ${duration}ms ease, opacity ${duration/2}ms ease`;
        fly.style.transform = `translate(${dx}px, ${dy}px) scale(${targetRect.width / sourceRect.width})`;

        const onEnd = (e) => {
            if (e.propertyName !== 'transform') return;
            fly.removeEventListener('transitionend', onEnd);
            // remove active state from header logos (keep logos present)
            document.querySelectorAll('.header-logo').forEach(el => el.classList.remove('header-logo--active'));
            fly.remove();
            isAnimating = false;
            currentCategory = null;
        };

        fly.addEventListener('transitionend', onEnd);
        setTimeout(() => { if (isAnimating) { fly.remove(); isAnimating=false; } }, duration + 400);
    }

    // Use IntersectionObserver to reliably detect when a category hits the top
    const categories = document.querySelectorAll('.category');
    const ioOptions = {
        root: null,
        threshold: [0],
        rootMargin: '0px 0px -99% 0px' // triggers when the header reaches top
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.boundingClientRect.top <= 0 && entry.isIntersecting) {
                // category reached top
                const cat = entry.target;
                if (cat !== currentCategory) animateToCategory(cat);
            }
        });

        // detect if none are intersecting at top -> we're above menu
        const anyAtTop = Array.from(categories).some(c => {
            const r = c.getBoundingClientRect();
            return r.top <= 0 && r.bottom > 0;
        });
        if (!anyAtTop && currentCategory) {
            animateBackToLogo();
        }
    }, ioOptions);

    categories.forEach(c => observer.observe(c));
});
