//  should return the total amount spent.
function calculateTotal(expenses){
    const totalExpense = expenses.reduce((acc , curr) => acc + curr.amount, 0);
    return totalExpense; 
}

//  should return the total for one category.
function calculateCategoryTotal(expenses, category){
    let total = 0;
    expenses.forEach(element => {
        if(element.category === category){
            return total += element.amount;
        }
    });
    return total;
}

//  should return the full expense object with the largest amount.
function findLargestExpense(expenses) {
    return expenses.reduce((largest, element) =>
        element.amount > largest.amount ? element : largest
    );
}

// should return total, foodTotal, transportTotal, and largestExpense.
function createExpenseSummary(expenses) {
    const total = calculateTotal(expenses);
    const foodTotal = calculateCategoryTotal(expenses, 'food');
    const transportTotal = calculateCategoryTotal(expenses, 'transport');
    const largestExpenses = findLargestExpense(expenses);
    return{
        total,
        foodTotal,
        transportTotal,
        largestExpenses
    }
}

// sample checks:

const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));