const validateNameExists = (req, res, next) => {
  if (!req.body.name) res.status(400).json({ message: '"name" is required' });

  next();
};

const validateNameLength = (req, res, next) => {
  const { name } = req.body;

  if (name.length < 5) {
    res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

module.exports = {
  validateNameExists,
  validateNameLength,
};