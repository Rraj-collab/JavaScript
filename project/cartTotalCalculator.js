//  should add price * quantity for every item.

function calculateSubtotal(items) {
  // yaha hum subTotal ko as const isliye se declare nahi kar sakte hai q ki hum subTotal ki value baar baar change kar rhe hai or const mein hum value ko change nahi kar sakte hai. Aur let mein hum value ko change/reassign kar sakte hai

  // for (const item of items)
  // Yahan const use karna perfectly fine hai.

  // Har iteration mein item ek alag object ko refer karta hai:

  // Iteration 1 → item = Notebook
  // Iteration 2 → item = Pen
  // Iteration 3 → item = Bag
  let subTotal = 0;
  for (const item of items) {
    subTotal += item.price * item.quantity;
  }

  // const subTotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return subTotal;
}

// should return the discount amount.

function calculateDiscount(subtotal, discountPercent) {
  const discount = (subtotal * discountPercent) / 100;
  return discount;
}

//  should return the tax amount after the discount.

function calculateTax(amountAfterDiscount, taxPercent) {
  const taxAmount = (taxPercent * amountAfterDiscount) / 100;
  return taxAmount;
}

// should return an object with subtotal, discount, tax, and total.

function createCartSummary(items, discountPercent, taxPercent) {
  const subTotal = calculateSubtotal(items);
  const discount = calculateDiscount(subTotal, discountPercent);
  const tax = calculateTax(subTotal - discount, taxPercent);
  const total = subTotal - discount + tax;
  return `subtotal: ${subTotal}, discount: ${discount}, tax: ${tax}, total: ${total}`;
}

// sample checks:

const cartItems = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Bag", price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: "Mouse", price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
