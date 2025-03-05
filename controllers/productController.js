exports.getAllProducts = (req, res) => {
  res.json({ message: 'Get all products' });
};

exports.getProductById = (req, res) => {
  res.json({ message: `Get product with ID ${req.params.id}` });
};

exports.createProduct = (req, res) => {
  res.json({ message: 'Product created', data: req.body });
};

exports.updateProduct = (req, res) => {
  res.json({ message: `Product ${req.params.id} updated`, data: req.body });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: `Product ${req.params.id} deleted` });
};
