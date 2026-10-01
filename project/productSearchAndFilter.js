//  should return products in the matching category.

function filterByCategory(products, category) {
  return products.filter((element) => element.category === category);
}

// should return products at or below the max price.

function filterByMaxPrice(products, maxPrice) {
  return products.filter((element) => element.price <= maxPrice)
}

//  should return products where inStock is true.

function getInStockProducts(products) {
  return products.filter((element) => element.inStock === true);
}

//  should return one matching product or undefined.

function findProductById(products, productId) {
  return products.find((element) => element.id === productId);
}

// should return products whose name includes the search text, ignoring casing.

function searchProducts(products, searchText) {
  return products.filter((element) => element.name.toLowerCase().includes(searchText.toLowerCase()));
}

const products = [
  { id: 1, name: "Notebook", category: "stationery", price: 10, inStock: true },
  { id: 2, name: "Desk Lamp", category: "home", price: 35, inStock: false },
  { id: 3, name: "Pen Set", category: "stationery", price: 6, inStock: true },
  {
    id: 4,
    name: "Water Bottle",
    category: "fitness",
    price: 18,
    inStock: true,
  },
];

console.log(
  filterByCategory(products, "stationery").map((product) => product.name),
);
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, "pen").map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));
