const express = require('express');
const productRoutes = require('./routes/products');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());

app.use('/products', auth, productRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));