import {by, device, expect, element, waitFor} from 'detox';

describe('Discover e2e tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have discover page', async () => {
    await element(by.id('login_email_input')).typeText('test@mail.com');
    await element(by.id('login_password_input')).typeText('123456');
    await element(by.text('Giriş Yap')).tap();
    await expect(element(by.id('discover_page'))).toExist();
  });

  it('should show loading', async () => {
    waitFor(element(by.id('discover_placeholder'))).toExist();
  });

  it('should show greeting text', async () => {
    waitFor(
      element(by.text('Selam, Test! Bugün ne almak istersin?')),
    ).toBeVisible();
  });

  it('should have categories', async () => {
    await expect(element(by.text('Cep Telefonu'))).toBeVisible();
    await expect(element(by.text('Kadın Giyim'))).toBeVisible();
    await expect(element(by.text('Erkek Giyim'))).toBeVisible();
    await element(by.id('discover_flatlist')).scrollTo('bottom');
    await expect(element(by.text('Takı'))).toBeVisible();
  });

  it('should navigate to category', async () => {
    await element(by.text('Cep Telefonu')).tap();

    await expect(element(by.text('iPhone 14 Pro'))).toBeVisible();
    await expect(element(by.text('iPhone 12'))).toBeVisible();
    await expect(element(by.text('ThinkPhone'))).toBeVisible();
    await expect(element(by.text('RedMi Note 12'))).toBeVisible();
  });

  it('should navigate to product detail', async () => {
    await element(by.text('iPhone 14 Pro')).tap();

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
});
