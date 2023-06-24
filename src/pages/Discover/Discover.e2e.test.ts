import {by, device, expect, element, waitFor} from 'detox';

describe('Discover e2e tests', () => {
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
    waitFor(element(by.id('discover_placeholder'))).toBeVisible();
  });

  it('should have discover page', async () => {
    await expect(element(by.id('discover_page'))).toBeVisible();
  });

  it('should have categories', async () => {
    await expect(element(by.id('discover_0_categorycard'))).toBeVisible();
    await expect(element(by.id('discover_1_categorycard'))).toBeVisible();
    await expect(element(by.id('discover_2_categorycard'))).toBeVisible();
  });
});
