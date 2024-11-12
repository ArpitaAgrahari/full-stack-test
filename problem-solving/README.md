# Problem-Solving - Product Budget Maximization


## Problem Statement
Given a list of products with prices and a budget, find the combination of products that maximizes the number of items purchased without exceeding the budget.


## Solution
Implemented using a greedy algorithm that sorts products by price and selects the maximum items within the budget.


## Code Example


```javascript
// solution.js


function maxItemsWithinBudget(products, budget) {
    products.sort((a, b) => a.price - b.price);
    let count = 0, total = 0;


    for (let product of products) {
        if (total + product.price <= budget) {
            total += product.price;
            count++;
        } else break;
    }
    return count;
}
```
