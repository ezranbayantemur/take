import {Status, StorageKeys} from '@enums';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Platform} from 'react-native';

const URL = Platform.select({
  ios: 'http://localhost:3000/token',
  android: 'http://10.0.2.2:3000/token',
});

export default createAsyncThunk('session/controlSession', async _ => {
  if (!URL) {
    throw new Error('URL is not defined');
  }

  const storedSessionValue = await AsyncStorage.getItem(StorageKeys.SESSION);

  if (storedSessionValue) {
    const user = JSON.parse(storedSessionValue);

    const userTokenControlResponse = await (
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: storedSessionValue,
      })
    ).json();

    if (!!user && userTokenControlResponse.message === Status.SUCCESS) {
      return userTokenControlResponse.user;
    }

    return null;
  }
});
