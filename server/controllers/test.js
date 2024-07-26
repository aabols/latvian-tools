const getTest = async (req, res) => {
  const response = { message: "GET test successful" };
  res.json(response);
};

module.exports = { getTest }