const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const data = require('./data.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const DELAY = 1200;

let authDB = data.users;
let cartDB = [];

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

server.post('/category', async (req, res) => {
  const {category_name} = req.body;

  const products = data.products.filter(
    product => product.category === category_name,
  );

  await delay();

  return res.json(products);
});

server.post('/cart', async (req, res) => {
  const {product} = req.body;

  cartDB.push(product);

  await delay();

  return res.json(true);
});

server.get('/cart', async (_, res) => {
  await delay();

  return res.json(cartDB);
});

server.post('/product', async (req, res) => {
  const {product_id} = req.body;

  const product = data.products.find(_product => _product.id === product_id);

  await delay();

  return res.json(product);
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
