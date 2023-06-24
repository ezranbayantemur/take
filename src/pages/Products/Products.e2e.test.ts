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

  it('should have products', async () => {
    await expect(element(by.id('discover_0_productcard'))).toBeVisible();
    await expect(element(by.id('discover_1_productcard'))).toBeVisible();
    await expect(element(by.id('discover_2_productcard'))).toBeVisible();
    await expect(element(by.id('discover_3_productcard'))).toBeVisible();
    await expect(element(by.id('discover_4_productcard'))).toBeVisible();
    await expect(element(by.id('discover_5_productcard'))).toBeVisible();
    await expect(element(by.id('discover_6_productcard'))).toBeVisible();
    await expect(element(by.id('discover_8_productcard'))).toBeVisible();
    await expect(element(by.id('discover_9_productcard'))).toBeVisible();
  });
  it('should navigate to product detail', async () => {
    await element(by.id('discover_0_productcard_touchable')).tap();
  });
});
