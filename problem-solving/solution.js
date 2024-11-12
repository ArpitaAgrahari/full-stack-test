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
