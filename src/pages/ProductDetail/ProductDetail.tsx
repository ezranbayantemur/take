import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {usePostProductDetailMutation} from '../../redux/api';
import {addToCart} from '@features';
import styles from './ProductDetail.style';
import {Button, ProductDetailPlaceholder} from '@components';
import {useDispatch} from 'react-redux';
import routes from '@route';
import {AppDispatch} from 'src/redux/store';

const ProductDetailPage = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch<AppDispatch>();
  const [getProductDetail, {data: productDetailData, isLoading}] =
    usePostProductDetailMutation();

  React.useEffect(() => {
    getProductDetail({product_id: route.params.product_id});
  }, [getProductDetail, route.params.product_id]);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetailData!));
    navigation.navigate(routes.CART);
  };

  if (isLoading) {
    return <ProductDetailPlaceholder />;
  }

  if (!productDetailData) {
    return null;
  }

  return (
    <SafeAreaView testID="productdetail_page">
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: productDetailData.product_image,
        }}
      />
      <View style={styles.info_container}>
        <View>
          <Text style={styles.product_name}>
            {productDetailData.product_name}
          </Text>
          <Text style={styles.seller}>{productDetailData.seller_name}</Text>
        </View>
        <Text style={styles.product_price}>
          {productDetailData.product_price.toLocaleString('tr-TR')} TL
        </Text>
      </View>
      <View style={styles.product_description_container}>
        <Text style={styles.product_description}>
          {productDetailData.description}
        </Text>
      </View>
      <Button
        testID="productdetail_add_to_cart"
        text="Sepete Ekle"
        onPress={handleAddToCart}
      />
    </SafeAreaView>
  );
};

export default ProductDetailPage;
