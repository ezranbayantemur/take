import {by, device, element} from 'detox';

const pressBack = async () => {
  const platform = device.getPlatform();

  if (platform === 'ios') {
    await element(by.traits(['button']))
      .atIndex(0)
      .tap();
  }

  if (platform === 'android') {
    await device.pressBack();
  }
};

export default pressBack;
