const photoModules = import.meta.glob('../assets/images/menu/*.jpg', { eager: true, import: 'default' });
const photos = Object.fromEntries(
  Object.entries(photoModules).map(([path, url]) => [path.match(/([^/]+)\.jpg$/)[1], url])
);

export const featuredIds = [
  'crispy-chicken-burger',
  'single-smashburger',
  'beyond-meat-burger',
  'double-smashburger',
  'chili-smash-burger',
  'crunchy-cheese-fries',
];

const rawMenuCategories = [
  {
    id: 'menus',
    labelDe: 'Menüs',
    labelEn: 'Combos',
    items: [
      { id: 'single-smashburger-menu', name: 'Single Smashburger Menü', price: '12,90', originalPrice: '13,90', descDe: 'Single Smashburger mit Pommes und Getränk deiner Wahl.', descEn: 'Single Smashburger with fries and a drink of your choice.' },
      { id: 'chilli-cheese-smashburger-menu', name: 'Chilli Cheese Smashburger Menü', price: '13,50', originalPrice: '15,50', descDe: 'Chili Smash Burger mit Pommes und Getränk deiner Wahl.', descEn: 'Chili Smash Burger with fries and a drink of your choice.' },
      { id: 'double-smashburger-menu', name: 'Double Smashburger Menü', price: '14,90', originalPrice: '16,90', descDe: 'Double Smashburger mit Pommes und Getränk deiner Wahl.', descEn: 'Double Smashburger with fries and a drink of your choice.' },
      { id: 'double-chilli-cheese-smashburger-menu', name: 'Double Chilli Cheese Smashburger Menü', price: '14,90', descDe: 'Double Chili Smash Burger mit Pommes und Getränk deiner Wahl.', descEn: 'Double Chili Smash Burger with fries and a drink of your choice.' },
      { id: 'crispy-chicken-burger-menu', name: 'Crispy Chicken Burger Menü', price: '13,50', originalPrice: '15,50', descDe: 'Crispy Chicken Burger mit Pommes und Getränk deiner Wahl.', descEn: 'Crispy Chicken Burger with fries and a drink of your choice.' },
      { id: 'beyond-meat-burger-menu', name: 'Beyond Meat Burger Menü', price: '13,90', originalPrice: '14,50', descDe: 'Vegan/Vegetarisch — Beyond Meat Burger mit Pommes und Getränk deiner Wahl.', descEn: 'Vegan/Vegetarian — Beyond Meat Burger with fries and a drink of your choice.', tag: 'vegan' },
    ],
  },
  {
    id: 'burger',
    labelDe: 'Burger',
    labelEn: 'Burgers',
    items: [
      { id: 'crispy-chicken-burger', name: 'Crispy Chicken Burger', price: '7,50', originalPrice: '7,90', descDe: 'Hausgemacht mit Hähnchenfleisch.', descEn: 'House-made with chicken.', rank: 1 },
      { id: 'single-smashburger', name: 'Single Smashburger', price: '6,90', originalPrice: '7,50', descDe: 'Mit Rindfleisch, Käse, Gewürzgurken und frischen Zwiebeln in weichem Brötchen.', descEn: 'Beef, cheese, pickles and fresh onions in a soft bun.', rank: 2 },
      { id: 'beyond-meat-burger', name: 'Beyond Meat Burger', price: '7,90', originalPrice: '8,50', descDe: 'Mit vegetarischem Patty, Käse, Tomate und Salat in weichem Brötchen.', descEn: 'Vegetarian patty, cheese, tomato and lettuce in a soft bun.', rank: 3, tag: 'vegan' },
      { id: 'double-smashburger', name: 'Double Smashburger', price: '8,90', originalPrice: '9,50', descDe: 'Mit Rindfleisch, Käse, Gewürzgurken und frischen Zwiebeln in weichem Brötchen.', descEn: 'Beef, cheese, pickles and fresh onions in a soft bun.', rank: 4 },
      { id: 'chili-smash-burger', name: 'Chili Smash Burger', price: '7,50', descDe: 'Mit Rindfleisch, Käse, Jalapeños und frischen Zwiebeln in weichem Brötchen.', descEn: 'Beef, cheese, jalapeños and fresh onions in a soft bun.', rank: 5, tag: 'spicy' },
      { id: 'double-chili-smash-burger', name: 'Double Chili Smash Burger', price: '9,50', descDe: 'Mit 2x Rindfleisch, 2x Käse, Spicy Jalapeños und frischen Zwiebeln.', descEn: 'Double beef, double cheese, spicy jalapeños and fresh onions.', tag: 'spicy' },
    ],
  },
  {
    id: 'sides',
    labelDe: 'Beilagen',
    labelEn: 'Sides',
    items: [
      { id: 'crunchy-fries', name: 'Crunchy Fries', price: '4,90', descDe: 'Mit einem Dip deiner Wahl.', descEn: 'With a dip of your choice.', rank: 6 },
      { id: 'crunchy-cheese-fries', name: 'Crunchy Cheese Fries', price: '5,40', descDe: 'Knusprige Pommes mit Käsesoße.', descEn: 'Crunchy fries with cheese sauce.', rank: 7 },
      { id: 'sweet-potatos', name: 'Sweet Potatoes', price: '5,90', descDe: '200 g frittierte Süßkartoffeln.', descEn: '200 g fried sweet potatoes.' },
      { id: 'pommes-aioli-parmesan', name: 'Pommes Aioli Parmesan', price: '6,90', descDe: 'Mit Aioli und Parmesan.', descEn: 'With aioli and parmesan.' },
      { id: 'chicken-cheese-pommes', name: 'Chicken Cheese Pommes', price: '8,90', descDe: 'Crunchy Pommes mit Crispy Chicken und Käse.', descEn: 'Crunchy fries with crispy chicken and cheese.' },
      { id: 'chicken-stripes', name: '3x Crispy Chicken Stripes', price: '3,90', descDe: 'Mit Garlic Spicy Sauce.', descEn: 'With garlic spicy sauce.' },
      { id: 'pommes-spezial', name: 'Pommes Spezial', price: '5,90', descDe: 'Mit Currysoße, Mayonnaise und frischen Zwiebeln.', descEn: 'With curry sauce, mayonnaise and fresh onions.' },
      { id: 'pommes-chili-cheese', name: 'Pommes Chili Cheese', price: '5,90', descDe: 'Mit Käsesoße und Jalapeños.', descEn: 'With cheese sauce and jalapeños.', tag: 'spicy' },
    ],
  },
  {
    id: 'extras',
    labelDe: 'Extras & Dips',
    labelEn: 'Extras & Dips',
    items: [
      { id: 'beef-patty', name: 'Beef Patty', price: '2,00', descDe: 'Extra Rindfleisch-Patty.', descEn: 'Extra beef patty.' },
      { id: 'crispy-chicken-extra', name: 'Crispy Chicken', price: '2,50', descDe: 'Extra Hähnchenfleisch.', descEn: 'Extra chicken.' },
      { id: 'beyond-meat-patty', name: 'Beyond Meat Patty', price: '2,50', descDe: 'Extra veganes Patty.', descEn: 'Extra vegan patty.', tag: 'vegan' },
      { id: 'kaese', name: 'Käse', price: '1,00', descDe: 'Extra Käsescheibe.', descEn: 'Extra cheese slice.' },
      { id: 'dip-garlic-spicy', name: 'Garlic Spicy Dip', price: '1,00 / 3,00', descDe: 'Klein oder Groß.', descEn: 'Small or large.' },
      { id: 'dip-cheese', name: 'Cheese Dip', price: '1,00 / 3,00', descDe: 'Klein oder Groß.', descEn: 'Small or large.' },
      { id: 'dip-samurai', name: 'Samurai Scharf Dip', price: '1,00 / 3,00', descDe: 'Klein oder Groß.', descEn: 'Small or large.', tag: 'spicy' },
      { id: 'dip-joppie', name: 'Joppie Dip', price: '1,00 / 3,00', descDe: 'Klein oder Groß.', descEn: 'Small or large.' },
    ],
  },
  {
    id: 'drinks',
    labelDe: 'Getränke',
    labelEn: 'Drinks',
    items: [
      { id: 'fritz-limo-zitrone', name: 'Fritz-Limo Zitrone', price: '2,90', descDe: '0,33 l — Erfrischungsgetränk mit Zitronengeschmack.', descEn: '0.33 l — Lemon-flavored soft drink.' },
      { id: 'elephant-bay-blueberry', name: 'Elephant Bay Blueberry', price: '3,20', descDe: '0,33 l — Erfrischungsgetränk mit Blaubeergeschmack.', descEn: '0.33 l — Blueberry-flavored soft drink.' },
      { id: 'elephant-bay-peach', name: 'Elephant Bay Peach', price: '3,20', descDe: '0,33 l — Erfrischungsgetränk mit Pfirsichgeschmack.', descEn: '0.33 l — Peach-flavored soft drink.' },
      { id: 'elephant-bay-lemon', name: 'Elephant Bay Lemon', price: '3,20', descDe: '0,33 l — Erfrischungsgetränk mit Zitronengeschmack.', descEn: '0.33 l — Lemon-flavored soft drink.' },
      { id: 'elephant-bay-mango', name: 'Elephant Bay Mango Pineapple', price: '3,20', descDe: '0,33 l — Enthält Koffein.', descEn: '0.33 l — Contains caffeine.' },
      { id: 'fritz-kola', name: 'Fritz-Kola', price: '2,90', descDe: '0,33 l — Enthält Koffein.', descEn: '0.33 l — Contains caffeine.' },
      { id: 'fritz-kola-superzero', name: 'Fritz-Kola Superzero', price: '2,90', descDe: '0,33 l — Zuckerfrei, koffeinhaltig.', descEn: '0.33 l — Sugar-free, contains caffeine.' },
      { id: 'fritz-limo-honigmelone', name: 'Fritz-Limo Honigmelone', price: '2,90', descDe: '0,33 l — Erfrischungsgetränk mit Honigmelonen-Geschmack.', descEn: '0.33 l — Honeydew melon-flavored soft drink.' },
      { id: 'fritz-kola-mischmasch', name: 'Fritz-Kola MischMasch', price: '2,90', descDe: '0,33 l — Cola- und Orangenaroma.', descEn: '0.33 l — Cola and orange flavor.' },
      { id: 'spreequell-naturell', name: 'Spreequell Naturell', price: '2,80', descDe: '0,25 l — Ohne Kohlensäure.', descEn: '0.25 l — Still water.' },
      { id: 'spreequell-classic', name: 'Spreequell Classic', price: '2,80', descDe: '0,25 l — Mit Kohlensäure.', descEn: '0.25 l — Sparkling water.' },
      { id: 'fritz-limo-orange', name: 'Fritz-Limo Orange', price: '2,90', descDe: '0,33 l — Erfrischungsgetränk mit Orangengeschmack.', descEn: '0.33 l — Orange-flavored soft drink.' },
    ],
  },
];

export const menuCategories = rawMenuCategories.map((c) => ({
  ...c,
  items: c.items.map((i) => ({ ...i, photo: photos[i.id] })),
}));

export const allItems = menuCategories.flatMap((c) => c.items.map((i) => ({ ...i, categoryId: c.id })));
export const featuredItems = featuredIds
  .map((id) => allItems.find((i) => i.id === id))
  .filter(Boolean);
