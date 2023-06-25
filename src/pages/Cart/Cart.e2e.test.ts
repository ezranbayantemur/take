import {by, device, expect, element, waitFor} from 'detox';

describe('Cart e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
    await element(by.id('login_sign_button_touchable')).tap();
  });

  it('should show loading', async () => {
    waitFor(element(by.id('discover_placeholder'))).toExist();
  });

  it('should have cart page', async () => {
    await expect(element(by.id('cart_page'))).toExist();
  });
});
