exports.getAllUsers = (req, res) => {
  res.json({ message: 'Get all users' });
};

exports.getUserById = (req, res) => {
  res.json({ message: `Get user with ID ${req.params.id}` });
};

exports.createUser = (req, res) => {
  res.json({ message: 'User created', data: req.body });
};

exports.updateUser = (req, res) => {
  res.json({ message: `User ${req.params.id} updated`, data: req.body });
};

exports.deleteUser = (req, res) => {
  res.json({ message: `User ${req.params.id} deleted` });
};
