import {by, device, expect, element, waitFor} from 'detox';

describe('Login e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login page', async () => {
    await expect(element(by.id('login_page'))).toExist();
  });

  it('should can input login texts', async () => {
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
  });

  it('should show error for sign action with empty input ', async () => {
    await element(by.id('login_sign_button_touchable')).tap();
    await expect(
      element(by.text('Bu alan zorunludur')).atIndex(0),
    ).toBeVisible();
    await expect(
      element(by.text('Bu alan zorunludur')).atIndex(1),
    ).toBeVisible();
  });

  it('should show error for invalid email input ', async () => {
    await element(by.id('login_email_input')).typeText('asdg');
    await expect(element(by.text('Geçersiz e-posta'))).toBeVisible();
  });

  it('should can trigger login action', async () => {
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
    await element(by.id('login_sign_button_touchable')).tap();
    await waitFor(element(by.id('discover_page')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
