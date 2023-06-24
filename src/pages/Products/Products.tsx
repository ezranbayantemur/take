import {SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {usePostProductsForCategoryMutation} from '../../redux/api';

const ProductsPage = () => {
  const route = useRoute();
  const [getProducts, {data: productData, isLoading}] =
    usePostProductsForCategoryMutation();

  useEffect(() => {
    getProducts({category_name: route.params.category_name});
  }, [getProducts, route.params.category_name]);

  console.log(productData);

  return (
    <SafeAreaView testID="discover_page">
      <Text>product</Text>
    </SafeAreaView>
  );
};

export default ProductsPage;
