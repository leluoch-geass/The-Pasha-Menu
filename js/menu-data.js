const BRANCHES = {
    AW: 'Al Wakuir',
    AH: 'Abu Hamour'
};

// Change this value to 'AH' for Abu Hamour or 'AW' for Al Wakuir.
const BRANCH_CODE = 'AW';

const menuData = [
    {
        category: 'Kunafe',
        items: [
            {
                title: 'Cheese Kunafe',
                img: 'Ckunafe.png',
                sizes: [
                    { label: 'Small', price: '18 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '35 QAR', persons: '2 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '60 QAR', persons: '4 persons', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Nutella Kunafe',
                img: 'Nkunafe.png',
                sizes: [
                    { label: 'Small', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '40 QAR', persons: '2 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '65 QAR', persons: '4 persons', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Qhasta Kunafe',
                img: 'Qkunafe.png',
                sizes: [
                    { label: 'Small', price: '15 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '25 QAR', persons: '2 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '50 QAR', persons: '4 persons', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Pasha Kunafe',
                img: 'Pakunafe.png',
                sizes: [
                    { label: 'Small', price: '35 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '70 QAR', persons: '2 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '130 QAR', persons: '4 persons', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Pistacio Kunafe',
                img: 'Pkunafe.png',
                sizes: [
                    { label: 'Small', price: '25 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '50 QAR', persons: '2 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '100 QAR', persons: '4 persons', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Pistacio Cheese Kunafe',
                img: 'PCkunafe.png',
                sizes: [
                    { label: 'Small', price: '25 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '70 QAR', persons: '2 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '120 QAR', persons: '4 persons', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Billuriye Kunafe',
                img: 'Bkunafe.png',
                sizes: [
                    { label: 'Small', price: '35 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '70 QAR', persons: '2 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '130 QAR', persons: '4 persons', branches: ['AW', 'AH'] }
                ]
            }
        ]
    },
    {
        category: 'Pistachio Baklawa',
        items: [
            {
                title: 'Durum Baklawa',
                img: 'Dbak.png',
                sizes: [
                    { label: '500g', price: '67.50 QAR', persons: '20 - 24 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '135 QAR', persons: '40 - 44 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Sweet Mix Baklawa',
                img: 'Mbak.png',
                sizes: [
                    { label: '500g', price: '70 QAR', persons: '12 - 14 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '145 QAR', persons: '20 - 28 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Pistacio Baklawa',
                img: 'Pbak.png',
                sizes: [
                    { label: '500g', price: '67.50 QAR', persons: '10 - 12 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '135 QAR', persons: '15 - 18 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Walnut Padish Baklawa',
                img: 'NBak.png',
                sizes: [
                    { label: '500g', price: '67.50 QAR', persons: '10 - 12 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '135 QAR', persons: '20 - 23 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Mussel Baklawa',
                img: 'Mbak.png',
                sizes: [
                    { label: '500g', price: '75 QAR', persons: '12 - 15 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '150 QAR', persons: '20 - 23 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Sobiyet Baklawa',
                img: 'Sbak.png',
                sizes: [
                    { label: '500g', price: '70 QAR', persons: '8 - 10 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '140 QAR', persons: '16 - 19 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Roll',
                img: 'Rbak.png',
                sizes: [
                    { label: '500g', price: '80 QAR', persons: '10 - 13 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '160 QAR', persons: '16 - 20 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Cold Baklawa',
                img: 'Coldbak.png',
                sizes: [
                    { label: '500g', price: '65 QAR', persons: '9 - 12 pieces', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '130 QAR', persons: '20 - 22 pieces', branches: ['AW', 'AH'] }
                ]
            },
            {
                title: 'Carrot Slice Baklawa',
                img: 'Cbak.png',
                sizes: [
                    { label: '120g', price: '15 QAR', persons: '1 piece', branches: ['AW', 'AH'] },
                    { label: '1kg', price: '125 QAR', persons: '7 - 8 pieces', branches: ['AW', 'AH'] }
                ]
            }
        ]
    },
    {
        category: 'Cakes',
        items: [
            {
                title: 'Caramel',
                img: 'CCcake.png',
                sizes: [
                    { label: 'Mini', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Small', price: '60 QAR', persons: '4 persons', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '80 QAR', persons: '6 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '100 QAR', persons: '8 - 10 persons', branches: ['AW'] },
                    { label: 'Family', price: '120 QAR', persons: '10 - 14 persons', branches: ['AW'] }
                ]
            },
            {
                title: 'Lotus',
                img: 'logoTrans.png',
                sizes: [
                    { label: 'Mini', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Small', price: '60 QAR', persons: '4 persons', branches: ['AW'] },
                    { label: 'Medium', price: '80 QAR', persons: '6 persons', branches: ['AW'] },
                    { label: 'Large', price: '100 QAR', persons: '8 - 10 persons', branches: ['AW'] }
                ]
            },
            {
                title: 'White Chocolate',
                img: 'WCCake.png',
                sizes: [
                    { label: 'Mini', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Small', price: '60 QAR', persons: '4 persons', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '80 QAR', persons: '6 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '100 QAR', persons: '8 - 10 persons', branches: ['AW'] },
                    { label: 'Family', price: '120 QAR', persons: '10 - 14 persons', branches: ['AW'] }
                ]
            },
            {
                title: 'Dark Chocolate',
                img: 'DCcake.png',
                sizes: [
                    { label: 'Mini', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Small', price: '60 QAR', persons: '4 persons', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '80 QAR', persons: '6 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '100 QAR', persons: '8 - 10 persons', branches: ['AW'] }
                ]
            },
            {
                title: 'Chocolate with Nut Sauce',
                img: 'Ncake.png',
                sizes: [
                    { label: 'Mini', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Small', price: '60 QAR', persons: '4 persons', branches: ['AW', 'AH'] },
                    { label: 'Medium', price: '80 QAR', persons: '6 persons', branches: ['AW', 'AH'] },
                    { label: 'Large', price: '100 QAR', persons: '8 - 10 persons', branches: ['AW'] },
                    { label: 'Family', price: '120 QAR', persons: '10 - 14 persons', branches: ['AW'] }
                ]
            },
            {
                title: 'Strawberry Princess',
                img: 'SPcake.png',
                sizes: [
                    { label: 'Mini', price: '25 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Small', price: '65 QAR', persons: '4 persons', branches: ['AW'] },
                    { label: 'Medium', price: '85 QAR', persons: '6 persons', branches: ['AW'] }
                ]
            },
            {
                title: 'Crunchy Pistachio',
                img: 'Pcake.png',
                sizes: [
                    { label: 'Mini', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] },
                    { label: 'Small', price: '60 QAR', persons: '4 persons', branches: ['AW'] },
                    { label: 'Medium', price: '80 QAR', persons: '6 persons', branches: ['AW'] }
                ]
            },
            {
                title: 'Lady Bug',
                img: 'LBcake.png',
                sizes: [
                    { label: 'Mini', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] }
                ]
            }
        ]
    },
    {
        category: 'Slice Cakes',
        items: [
            { title: 'Mosaic Cake', img: 'mosaic.png', sizes: [ { label: '1 Slice', price: '15 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Tiramisu Cake', img: 'tiramisu.png', sizes: [ { label: '1 Slice', price: '18 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Carrot Cake', img: 'Ccake.png', sizes: [ { label: '1 Slice', price: '17 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Honey Cake', img: 'Hcake.png', sizes: [ { label: '1 Slice', price: '18 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Chocolate Brownie', img: 'Brownies.png', sizes: [ { label: '1 Slice', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Cheese Cakes',
        items: [
            { title: 'San Sebastian', img: 'san.png', sizes: [ { label: '1 Slice', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Mango', img: 'mango.png', sizes: [ { label: '1 Slice', price: '15 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Blueberry', img: 'blueberry.png', sizes: [ { label: '1 Slice', price: '15 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Lemon', img: 'lemon.png', sizes: [ { label: '1 Slice', price: '15 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Milk Desserts',
        items: [
            { title: 'Trilece', img: 'trilece.png', sizes: [ { label: '1 Slice', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Sutlac', img: 'sutlac.png', sizes: [ { label: '1 Piece', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Strawberry Magnolia', img: 'magnolia.png', sizes: [ { label: '1 Piece', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Lotus Dream', img: 'lotus-dream.png', sizes: [ { label: '1 Piece', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Kazandibi', img: 'kazandibi.png', sizes: [ { label: '1 Piece', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Profiteroles', img: 'profiteroles.png', sizes: [ { label: '1 Piece', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Cookies',
        items: [
            { title: 'Mix Sweet Cookies', img: 'SWcookies.png', sizes: [ { label: '250g', price: '21.25 QAR', persons: '10 - 14 pieces', branches: ['AW', 'AH'] }, { label: '500g', price: '42.50 QAR', persons: '20 - 24 pieces', branches: ['AW', 'AH'] }, { label: '1kg', price: '85 QAR', persons: '40 - 48 pieces', branches: ['AW', 'AH'] } ] },
            { title: 'Mix Salty Cookies', img: 'SAcookies.png', sizes: [ { label: '250g', price: '17.50 QAR', persons: '10 - 14 pieces', branches: ['AW', 'AH'] }, { label: '500g', price: '35 QAR', persons: '20 - 24 pieces', branches: ['AW', 'AH'] }, { label: '1kg', price: '70 QAR', persons: '40 - 48 pieces', branches: ['AW', 'AH'] } ] },
            { title: 'Mix Special Sweet Cookies', img: 'SScookies.png', sizes: [ { label: '250g', price: '25 QAR', persons: '10 - 14 pieces', branches: ['AW', 'AH'] }, { label: '500g', price: '50 QAR', persons: '20 - 24 pieces', branches: ['AW', 'AH'] }, { label: '1kg', price: '100 QAR', persons: '40 - 48 pieces', branches: ['AW', 'AH'] } ] },
            { title: 'Macaron', img: 'macaron.png', sizes: [ { label: '1 Box', price: '25 QAR', persons: '6 pieces', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Turkish Delight',
        items: [
            { title: 'Mix Turkish Delight', img: 'delight.png', sizes: [ { label: '250g', price: '25 QAR', persons: '-', branches: ['AW', 'AH'] }, { label: '500g', price: '50 QAR', persons: '-', branches: ['AW', 'AH'] }, { label: '1kg', price: '100 QAR', persons: '-', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Breads',
        items: [
            { title: 'Turkish Simit', img: 'simit.png', sizes: [ { label: '1 Piece', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Kashkaval Cheese Pocaga', img: 'kashkaval.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 persons', branches: ['AW', 'AH'] } ] },
            { title: 'Feta Cheese Pocaga', img: 'feta.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Plain Pocaga', img: 'plain-pocaga.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Olive Pocaga', img: 'olive-pocaga.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Potato Pocaga', img: 'potato-pocaga.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Bagel with Potatoes', img: 'bagel-potatoes.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Bagel with Olive', img: 'bagel-olive.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Plain Bagel', img: 'plain-bagel.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Bagel with Kashkaval Cheese', img: 'bagel-kashkaval.png', sizes: [ { label: '1 Piece', price: '7 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Borek', img: 'borek.png', sizes: [ { label: '1 Slice', price: '13 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Ice Coffee',
        items: [
            { title: 'Iced Lattee', img: 'iced-latte.png', sizes: [ { label: '1 Cap', price: '15 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Iced Spanish Lattee', img: 'iced-spanish-latte.png', sizes: [ { label: '1 Cap', price: '17 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Iced Americano', img: 'iced-americano.png', sizes: [ { label: '1 Cap', price: '14 QAR', persons: '1 person', branches: ['AW'] } ] }
        ]
    },
    {
        category: 'Cold Drinks',
        items: [
            { title: 'Hand Made Lemonade', img: 'lemonade.png', sizes: [ { label: 'Small', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] }, { label: 'Large', price: '10 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Coca Cola', img: 'coca-cola.png', sizes: [ { label: '1 Can', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Fanta', img: 'fanta.png', sizes: [ { label: '1 Can', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Sprite', img: 'sprite.png', sizes: [ { label: '1 Can', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Rayyan Natural Water', img: 'water.png', sizes: [ { label: '1 Bottle', price: '3 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Beypazari', img: 'beypazari.png', sizes: [ { label: '1 Bottle', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Tea',
        items: [
            { title: 'Turkish Tea', img: 'turkish-tea.png', sizes: [ { label: '1 Cup', price: '3 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Double Turkish Tea', img: 'dturkish-tea.png', sizes: [ { label: '1 Cup', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Keeta',
        img: 'keeta/keeta.png',
        link: 'https://www.keeta.com'
    },
    {
        category: 'Hot Coffee',
        items: [
            { title: 'Turkish Coffee', img: 'turkish-coffee.png', sizes: [ { label: '1 Cup', price: '10 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Double Turkish Coffee', img: 'dturkish-coffee.png', sizes: [ { label: '1 Cup', price: '20 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Espresso', img: 'espresso.png', sizes: [ { label: '1 Cup', price: '10 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Double Espresso', img: 'despresso.png', sizes: [ { label: '1 Cup', price: '20 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Long Espresso', img: 'long.png', sizes: [ { label: '1 Cup', price: '12 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Americano', img: 'americano.png', sizes: [ { label: '1 Cup', price: '12 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Cappuccino', img: 'cappuccino.png', sizes: [ { label: '1 Cup', price: '13 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Lattee', img: 'lattee.png', sizes: [ { label: '1 Cup', price: '13 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Spanish Lattee', img: 'spanish.png', sizes: [ { label: '1 Cup', price: '15 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Cortado', img: 'cortado.png', sizes: [ { label: '1 Cup', price: '12 QAR', persons: '1 person', branches: ['AW'] } ] },
            { title: 'Flat White', img: 'white.png', sizes: [ { label: '1 Cup', price: '12 QAR', persons: '1 person', branches: ['AW'] } ] }
        ]
    },
    {
        category: 'Ice Cream',
        items: [
            { title: 'Vanilla Ice Cream', img: 'vanilla.png', sizes: [ { label: '1 Scoop', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Chocolate Ice Cream', img: 'chocolate.png', sizes: [ { label: '1 Scoop', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Strawberry Ice Cream', img: 'strawberry.png', sizes: [ { label: '1 Scoop', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Mango Ice Cream', img: 'mango.png', sizes: [ { label: '1 Scoop', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] },
            { title: 'Pistachio Ice Cream', img: 'pistachio.png', sizes: [ { label: '1 Scoop', price: '5 QAR', persons: '1 person', branches: ['AW', 'AH'] } ] }
        ]
    },
    {
        category: 'Talabat',
        img: 'talabat/talabat.png',
        link: 'https://www.talabat.com'
    }
];
