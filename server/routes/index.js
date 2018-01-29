const routes = (req, res) => {
  console.log('BODY', req.body);
  res.send('Whoo')
};

module.exports = routes;