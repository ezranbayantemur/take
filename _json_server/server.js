const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const data = require('./data.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(bodyParser.json());

// Custom login route
server.post('/login', (req, res) => {
  const {username, password} = req.body;

  const user = data.users.find(
    user => user.username === username && user.password === password,
  );

  return res.json(!!user);
});

server.post('/products', (req, res) => {
  const {username, password} = req.body;

  const user = data.users.find(
    user => user.username === username && user.password === password,
  );

  return res.json(!!user);
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
