const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const data = require('./data.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const DELAY = 1200;
let authDB = data.users;

const delay = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, DELAY);
  });

server.use(bodyParser.json());

server.post('/login', async (req, res) => {
  const {email, password} = req.body;

  const user = authDB.find(
    user => user.email === email && user.password === password,
  );

  await delay();
  return res.json(!!user);
});

server.post('/register', async (req, res) => {
  const {email, password} = req.body;

  authDB.push({
    id: authDB[authDB.length - 1].id + 1,
    email,
    password,
  });

  await delay();

  return res.json(true);
});

server.get('/discover', async (req, res) => {
  await delay();
  return res.json(data.discover);
});

server.post('/products', async (req, res) => {
  const {category_name} = req.body;

  const products = data.products[category_name];

  await delay();

  return res.json(products);
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
