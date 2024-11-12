const products = [];

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const product = products.find(p => p.id === parseInt(id));
    Object.assign(product, updatedData);
    res.json(product);
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id === parseInt(id));
    products.splice(index, 1);
    res.status(204).end();
};
