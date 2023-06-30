import {by, device, expect, element} from 'detox';
import {Platform} from 'react-native';

/**
 * It would be better to move this function to some helper object, like: "detoxHelper" and call it like "detoxHelper.pressBack()"
 *
 * But detox throws error when we try to import it outside test file.
 * Like " import {device, element} from 'detox' "
 *
 * It says:
 * error: Error: Unable to resolve module vm from <PROJECT_PATH>/node_modules/detox/src/ipc/SessionState.js: vm could not be found within the project or in these directories:
 *  node_modules/detox/node_modules
 *  node_modules
 *
 * So we have to define it here.
 */
const pressBack = async () => {
  const platform = Platform.OS;

  if (platform === 'ios') {
    await element(by.traits(['button']))
      .atIndex(0)
      .tap();
  }

  if (platform === 'android') {
    await device.pressBack();
  }
};

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

  // Skipping this test because of detox can't find the last text even if it is visible.
  it.skip('should show correct discount text if discount not apply for multiple product', async () => {
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
          "Elektronik kategorisinde %5 indirim fırsatını yakalamak için bu kategoriden 600 TL'lik daha ürün sepete ekleyin",
        ),
      ),
    ).toBeVisible();
  });

  // Skipping this test because of detox can't find the last text even if it is visible.
  it.skip('should show correct discount text if there is a discount to apply', async () => {
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
