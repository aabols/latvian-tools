const getTest = async (req, res) => {
  const response = { message: "Test successful" };
  res.json(response);
};

module.exports = { getTest }