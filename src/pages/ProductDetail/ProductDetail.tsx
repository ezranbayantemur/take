import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {usePostProductDetailMutation} from '../../redux/api';
import {addToCart} from '../../redux/features/cart/slice';
import styles from './ProductDetail.style';
import {Button} from '@components';
import {useDispatch} from 'react-redux';

const ProductDetailPage = () => {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const [getProductDetail, {data: productDetailData, isLoading}] =
    usePostProductDetailMutation();

  React.useEffect(() => {
    getProductDetail({product_id: route.params.product_id});
  }, [getProductDetail, route.params.product_id]);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetailData!));
  };

  if (isLoading || !productDetailData) {
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
          {productDetailData.product_price} TL
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
