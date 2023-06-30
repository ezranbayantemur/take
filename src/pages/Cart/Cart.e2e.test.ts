import {by, device, expect, element} from 'detox';
import pressBack from '@helpers/pressBack';

describe('Cart e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have cart page', async () => {
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
    await element(by.id('login_sign_button_touchable')).tap();
    await element(by.id('discover_0_categorycard_title_touchable')).tap();
    await element(by.id('product_0_productcard_touchable')).tap();
    await element(by.id('productdetail_add_to_cart_button_touchable')).tap();
    await expect(element(by.id('cart_page'))).toExist();
  });

  it('should show correct discount text if discount not apply for single product', async () => {
    await element(by.text('Cep Telefonu')).tap();
    await element(by.text('400 TL')).tap();
    await element(by.text('Sepete Ekle')).tap();
    await expect(
      element(
        by.text(
          "Elektronik kategorisinde %5 indirim fırsatını yakalamak için bu kategoriden 600 TL'lik daha ürün sepete ekleyin",
        ),
      ),
    ).toBeVisible();
  });

  it('should show correct discount text if discount not apply for multiple product', async () => {
    await element(by.text('Cep Telefonu')).tap();
    await element(by.text('400 TL')).tap();
    await element(by.text('Sepete Ekle')).tap();
    await expect(
      element(
        by.text(
          "Elektronik kategorisinde %5 indirim fırsatını yakalamak için bu kategoriden 600 TL'lik daha ürün sepete ekleyin",
        ),
      ),
    ).toBeVisible();

    await pressBack();
    await pressBack();

    await element(by.text('250 TL')).tap();
    await element(by.text('Sepete Ekle')).tap();
    await expect(
      element(
        by.text(
          "Elektronik kategorisinde %5 indirim fırsatını yakalamak için bu kategoriden 350 TL'lik daha ürün sepete ekleyin",
        ),
      ),
    ).toBeVisible();
  });

  it('should show correct discount text if there is a discount to apply', async () => {
    await element(by.text('Cep Telefonu')).tap();
    await element(by.text('400 TL')).tap();
    await element(by.text('Sepete Ekle')).tap();
    await expect(
      element(
        by.text(
          "Elektronik kategorisinde %5 indirim fırsatını yakalamak için bu kategoriden 600 TL'lik daha ürün sepete ekleyin",
        ),
      ),
    ).toBeVisible();

    await pressBack();

    await element(by.text('Sepete Ekle')).tap();
    await expect(
      element(
        by.text(
          "Elektronik kategorisinde %5 indirim fırsatını yakalamak için bu kategoriden 200 TL'lik daha ürün sepete ekleyin",
        ),
      ),
    ).toBeVisible();

    await pressBack();

    await element(by.text('Sepete Ekle')).tap();

    await expect(
      element(
        by.text(
          'Elektronik kategorisindeki ürünlere %5 indirim uygulandı. Yeni toplu fiyat 1200 TL yerine 1140 TL',
        ),
      ),
    ).toBeVisible();
  });

  it('should not show discount text if there is no discount for the product', async () => {
    await element(by.text('Kadın Giyim')).tap();
    await element(by.text('3.750 TL')).tap();
    await element(by.text('Sepete Ekle')).tap();
    await expect(
      element(by.id('discount_0_women_clothing_discount_discountcard')),
    ).not.toExist();
  });
});
