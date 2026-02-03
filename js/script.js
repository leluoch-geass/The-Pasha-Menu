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
            { title: 'Pasha Kunafe', img: 'kunafe.jpg', sizes: [['Small','20 QAR','1 person'],['Medium','65 QAR','2 persons'],['Large','110 QAR','4 persons']] },
            { title: 'Pistacio Kunafe', img: 'kunafe.jpg', sizes: [['Small','25 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','120 QAR','4 persons']] },
            { title: 'Pistacio Cheese Kunafe', img: 'kunafe.jpg', sizes: [['Small','25 QAR','1 person'],['Medium','70 QAR','2 persons'],['Large','120 QAR','4 persons']] },
            { title: 'Try Kunafe', img: 'kunafe-try.jpg', sizes: [['Small','9 QAR','1 person'],['Medium','99 QAR','2 persons'],['Large','999 QAR','4 persons']] },
        ]
    },
    {
        category: 'Baklava',
        items: [
            { title: ' Durom Baklava', img: 'baklava.jpg', sizes: [['500g','65 QAR','20 - 24 pieces'],['1kg','135 QAR','40 - 44 pieces']] },
            { title: ' Mix Baklava', img: 'baklava.jpg', sizes: [['500g','70 QAR','12 - 14 pieces'],['1kg','145 QAR','20 - 28 pieces']] },
        ]
    },
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

document.addEventListener('DOMContentLoaded', () => renderMenu());
