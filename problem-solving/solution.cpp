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
