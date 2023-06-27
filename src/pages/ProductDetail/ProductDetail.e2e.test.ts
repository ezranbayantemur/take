import {by, device, expect, element, waitFor} from 'detox';

describe('Product detail e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
    await element(by.id('login_sign_button_touchable')).tap();
    await element(by.id('discover_0_categorycard_title_touchable')).tap();
    await element(by.id('product_0_productcard_touchable')).tap();
  });

  it('should have products page', async () => {
    await expect(element(by.id('productdetail_page'))).toExist();
  });

  it('should show loading', async () => {
    waitFor(element(by.id('productdetail_placeholder'))).toExist();
  });

  it('should show product detail', async () => {
    await expect(element(by.text('iPhone 14 Pro'))).toBeVisible();
    await expect(element(by.text('Apple'))).toBeVisible();
    await expect(element(by.text('400 TL'))).toBeVisible();
    await expect(
      element(
        by.text(
          'Mollit nostrud pariatur elit sunt esse aliqua occaecat dolore consectetur amet nulla sit ipsum. Occaecat qui veniam anim duis anim proident est. Est laboris consequat laborum fugiat proident enim deserunt consectetur ipsum ullamco ipsum. Nostrud consequat irure excepteur ea do consequat enim non esse. Nulla ex veniam fugiat laboris tempor duis anim aliqua.',
        ),
      ),
    ).toBeVisible();
  });

  it('should add product to cart', async () => {
    await element(by.id('productdetail_add_to_cart_button_touchable')).tap();
    await expect(element(by.id('cart_page'))).toExist();
    await expect(element(by.text('iPhone 14 Pro'))).toBeVisible();
    await expect(element(by.text('Adet: 1'))).toBeVisible();
    await expect(element(by.text('400 TL'))).toBeVisible();
    await expect(element(by.text('Toplam Tutar: 400 TL'))).toBeVisible();
    await expect(element(by.text('Siparişi Onayla'))).toBeVisible();
  });
});
