const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const data = require('./data.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const DELAY = 1200;

const authDB = data.users;
const cartDB = [];

const delay = () =>
  new Promise(resolve => {
    setTimeout(resolve, DELAY);
  });

server.use(bodyParser.json());

server.use((req, res, next) => {
  console.log('Received request:', req.method, req.url);
  console.log('Request body:', req.body);
  next();
});

server.post('/login', async (req, res) => {
  const {email, password} = req.body;

  const user = authDB.find(
    _user => _user.email === email && _user.password === password,
  );

  await delay();

  if (user) {
    return res.status(200).jsonp({
      message: 'SUCCESS',
      data: {
        id: user.id,
        email: user.email,
      },
    });
  } else {
    return res.status(401).jsonp({message: 'UNAUTHORIZED'});
  }
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

  const product = data.products.find(
    _product => _product.id === Number(product_id),
  );

  await delay();

  return res.json(product);
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
