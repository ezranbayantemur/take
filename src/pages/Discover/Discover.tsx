import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';

type Props = {};

const Discover = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>Discover</Text>
      <View
        style={{
          backgroundColor: 'red',
        }}>
        <Image
          resizeMode="contain"
          style={{
            height: 100,
            width: 100,
          }}
          source={{
            uri: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-14-Pro/Deep-Purple/Apple-iPhone-14-Pro-Deep-Purple-thumbnail.png',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Discover;
