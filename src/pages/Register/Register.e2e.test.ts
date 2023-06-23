import {by, device, expect, element} from 'detox';

describe('Register e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('login_register_navigate_button_touchable')).tap();
  });

  it('should have register page', async () => {
    await expect(element(by.id('register_page'))).toExist();
  });

  it('should can type register texts', async () => {
    await element(by.id('register_email_input')).typeText('test@mail.com');
    await element(by.id('register_password_input')).typeText('123456');
    await element(by.id('register_repassword_input')).typeText('123456');
  });

  it('should can trigger register action', async () => {
    await element(by.id('register_email_input')).typeText('test@mail.com');
    await element(by.id('register_password_input')).typeText('123456');
    await element(by.id('register_repassword_input')).typeText('123456');
    await element(by.id('register_sign_button_touchable')).tap();
  });
  /**
   * On this test it cannot find the text matcher
   */
  it.skip('should show error for sign action with empty input ', async () => {
    await element(by.id('login_sign_button_touchable')).tap();
    await expect(element(by.text('Bu alan zorunludur'))).toBeVisible();
  });

  it('should show error for invalid email input ', async () => {
    await element(by.id('register_email_input')).typeText('asdg');
    await expect(element(by.text('Geçersiz e-posta'))).toBeVisible();
  });

  //TODO: Check this test
  it.skip('should show error for passwords does not match ', async () => {
    await element(by.id('register_email_input')).typeText('asdg');
    await element(by.id('register_password_input')).typeText('123456');
    await element(by.id('register_repassword_input')).typeText('123455');

    await expect(element(by.text('Parolalar uyuşmuyor'))).toBeVisible();
  });

  it('should can navigate login screen back', async () => {
    await element(by.id('register_login_navigate_button_touchable')).tap();
    await expect(element(by.id('login_page'))).toExist();
  });
});
