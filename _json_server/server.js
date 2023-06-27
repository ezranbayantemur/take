const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const data = require('./data.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const PORT = 3000;
const DELAY = 1200;

let authDB = data.users;
const cartDB = [];

const delay = () =>
  new Promise(resolve => {
    setTimeout(resolve, DELAY);
  });

server.use(bodyParser.json());

server.use(async (req, res, next) => {
  try {
    await next();

    console.log('Request completed successfully:', req.method, req.url);
  } catch (error) {
    console.error('Request failed:', req.method, req.url);
    console.error('Error:', error);

    res.status(500).json({error: 'Internal Server Error'});
  }
});

server.use((req, res, next) => {
  console.log('\nReceived request:', req.method, req.url);
  console.log('Request body:', req.body);

  const originalJson = res.json;
  res.json = function (data) {
    console.log('Response body:', data);
    originalJson.call(this, data);
  };

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
        ...{password, ...user},
      },
    });
  } else {
    return res.status(401).jsonp({message: 'UNAUTHORIZED'});
  }
});

server.post('/register', async (req, res) => {
  const {email, password} = req.body;

  const registeredUser = {
    id: authDB[authDB.length - 1].id + 1,
    email,
    password,
    first_name: null,
    last_name: null,
  };

  authDB.push(registeredUser);
  await delay();

  return res.status(200).jsonp({
    message: 'SUCCESS',
  });
});

server.post('/token', async (req, res) => {
  const {email} = req.body;

  const user = authDB.find(_user => _user.email === email);

  await delay();
  return res.status(200).jsonp({
    message: 'SUCCESS',
    user,
  });
});

server.get('/discover', async (req, res) => {
  return res.status(200).jsonp({
    message: 'SUCCESS',
    data: data.discover,
  });
});

server.post('/category', async (req, res) => {
  const {category_name} = req.body;

  const products = data.products.filter(
    product => product.category === category_name,
  );

  await delay();

  return res.status(200).jsonp({
    message: 'SUCCESS',
    data: products,
  });
});

server.post('/product', async (req, res) => {
  const {product_id} = req.body;

  const product = data.products.find(
    _product => _product.id === Number(product_id),
  );

  await delay();

  return res.status(200).jsonp({
    message: 'SUCCESS',
    data: product,
  });
});

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`takeApp fake server is running on port: ${PORT}`);
});
