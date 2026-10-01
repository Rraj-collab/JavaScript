// should return the discount amount
function calculateDiscount(price, discountPercent){
    const discount = (discountPercent/100) * price;
    return discount;
}

// should return the tax amount.
function calculateTax(priceAfterDiscount, taxPercent){
    const tax = (taxPercent/100) * priceAfterDiscount;
    return tax;
}

// should subtract the discount, add tax, and return the final price.
function calculateFinalPrice(price, discountPercent, taxPercent){
    const discount = calculateDiscount(price, discountPercent);
    const tax = calculateTax(price-discount, taxPercent);
    const finalPrice =  (price-discount+tax);
    return finalPrice;
}

//  should return an object with price, discount, tax, and finalPrice.

function createPriceSummary(price, discountPercent, taxPercent){
    const discount = calculateDiscount(price, discountPercent);
    const tax = calculateTax(price-discount, taxPercent);
    const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
    return `price: ${price}, discount: ${discount}, tax: ${tax}, finalPrice: ${finalPrice}`;
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));