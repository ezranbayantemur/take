import {by, device, expect, element, waitFor} from 'detox';

describe('Products e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
    await element(by.id('login_sign_button_touchable')).tap();
    await element(by.id('discover_0_categorycard_title_touchable')).tap();
  });

  it('should show loading', async () => {
    waitFor(element(by.id('products_placeholder'))).toBeVisible();
  });

  it('should have products page', async () => {
    await expect(element(by.id('products_page'))).toBeVisible();
  });

  it('should show products', async () => {
    await expect(element(by.text('iPhone 14 Pro'))).toBeVisible();
    await expect(element(by.text('iPhone 12'))).toBeVisible();
    await expect(element(by.text('ThinkPhone'))).toBeVisible();
    await expect(element(by.text('RedMi Note 12'))).toBeVisible();

    await element(by.id('products_flatlist')).scrollTo('bottom');
    await expect(element(by.text('Xperia 10 IV'))).toBeVisible();
    await expect(element(by.text('Razr 40 Ultra'))).toBeVisible();
    await expect(element(by.text('Magic4 PRO'))).toBeVisible();
  });
});
