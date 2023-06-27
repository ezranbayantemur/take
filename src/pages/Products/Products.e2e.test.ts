import {by, device, expect, element, waitFor} from 'detox';

describe('Products e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have products page for top of the page', async () => {
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
    await element(by.text('Giriş Yap')).tap();
    await element(by.text('Cep Telefonu')).tap();
    await expect(element(by.id('products_page_electronic'))).toExist();
  });

  it('should have products page for bottom of the page', async () => {
    await element(by.id('discover_flatlist')).scrollTo('bottom');
    await element(by.text('Takı')).tap();
    await expect(element(by.id('products_page_jewelry'))).toExist();
  });

  it('should show loading', async () => {
    await element(by.text('Cep Telefonu')).tap();
    waitFor(element(by.id('products_placeholder'))).toExist();
  });

  it('should show products', async () => {
    await element(by.text('Cep Telefonu')).tap();

    await expect(element(by.text('iPhone 14 Pro'))).toBeVisible();
    await expect(element(by.text('iPhone 12'))).toBeVisible();
    await expect(element(by.text('ThinkPhone'))).toBeVisible();
    await expect(element(by.text('RedMi Note 12'))).toBeVisible();

    await element(by.id('products_flatlist')).scrollTo('bottom');

    await expect(element(by.text('Xperia 10 IV'))).toBeVisible();
    await expect(element(by.text('Razr 40 Ultra'))).toBeVisible();
    await expect(element(by.text('Magic4 PRO'))).toBeVisible();
  });

  it('should search products', async () => {
    await element(by.text('Cep Telefonu')).tap();

    await element(by.id('products_searchbar_searchbar_input')).typeText(
      'iphone',
    );

    await expect(element(by.text('iPhone 14 Pro'))).toBeVisible();
    await expect(element(by.text('iPhone 12'))).toBeVisible();

    await expect(element(by.text('ThinkPhone'))).not.toBeVisible();
    await expect(element(by.text('RedMi Note 12'))).not.toBeVisible();
    await expect(element(by.text('Galaxy S23 Ultra'))).not.toBeVisible();
    await expect(element(by.text('Pixel 7'))).not.toBeVisible();
    await expect(element(by.text('Xperia 10 IV'))).not.toBeVisible();
    await expect(element(by.text('Razr 40 Ultra'))).not.toBeVisible();
    await expect(element(by.text('Magic4 PRO'))).not.toBeVisible();
  });
});
