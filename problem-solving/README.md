# Problem-Solving - Product Budget Maximization


## Problem Statement
Given a list of products with prices and a budget, find the combination of products that maximizes the number of items purchased without exceeding the budget.


## Solution
1. **Sort the array of products by price**: 
   - Sorting helps us buy cheaper products first, allowing us to maximize the number of items bought within the given budget.


2. **Iterate through the sorted array and accumulate prices**:
   - Start with the cheapest product, adding its price to a running total. If the running total exceeds the budget, stop.


3. **Return the count of products bought**:
   - The number of products bought is the count of items added to the total before exceeding the budget.


### Approach:


- **Step 1**: Sort the array of product prices in ascending order.
- **Step 2**: Initialize variables to track the total cost and the number of items purchased.
- **Step 3**: Loop through the sorted array, adding prices to the total and increasing the item count until the total cost exceeds the budget.



## Code Example


```cpp
// solution.cpp


#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxProductsWithinBudget(vector<int>& products, int budget) {
    // Sort the products array in ascending order
    sort(products.begin(), products.end());
    
    int totalCost = 0;  // Tracks total cost of products bought
    int itemCount = 0;  // Tracks the number of products bought
    
    // Loop through sorted products
    for (int price : products) {
        // Check if we can afford this product with the remaining budget
        if (totalCost + price <= budget) {
            totalCost += price;
            itemCount++;
        } else {
            break;  // Stop if we exceed the budget
        }
    }
    
    return itemCount;  // Return the maximum number of products bought
}

int main() {
    vector<int> products = {5, 3, 2, 8, 7, 1};  // Product prices
    int budget = 15;  // Budget
    
    int result = maxProductsWithinBudget(products, budget);
    
    cout << "Maximum number of products that can be bought: " << result << endl;
    
    return 0;
}

}
```
