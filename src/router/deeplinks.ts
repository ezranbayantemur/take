import routes from './routes';

const deeplinks = {
  prefixes: ['takeapp://'],
  config: {
    screens: {
      [routes.DISCOVER]: {
        path: 'discover',
      },
      [routes.PRODUCTS]: {
        path: 'products/:category_name',
      },
      [routes.PRODUCT_DETAIL]: {
        path: 'product/:product_id',
      },
    },
  },
};

export default deeplinks;
