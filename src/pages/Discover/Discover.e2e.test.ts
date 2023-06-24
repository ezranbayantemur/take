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
    waitFor(element(by.id('discover_placeholder'))).toExist();
  });

  it('should have discover page', async () => {
    await expect(element(by.id('discover_page'))).toExist();
  });

  it('should have categories', async () => {
    await expect(element(by.text('Cep Telefonu'))).toBeVisible();
    await expect(element(by.text('Kadın Giyim'))).toBeVisible();
    await expect(element(by.text('Erkek Giyim'))).toBeVisible();
  });
});
