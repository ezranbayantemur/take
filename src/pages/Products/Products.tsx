import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {usePostProductsForCategoryMutation} from '../../redux/api';
import {Product} from '@types';
import {ProductCard, ProductsPlaceholder} from '@components';
import styles from './Products.style';

const ProductsPage = () => {
  const route = useRoute<any>();
  const [getProducts, {data: productData, isLoading}] =
    usePostProductsForCategoryMutation();

  useEffect(() => {
    getProducts({category_name: route.params.category_name});
  }, [getProducts, route.params.category_name]);

  const handleOnProductSelect = (product: Product) => {
    console.log(product);
  };

  const renderProduct: ListRenderItem<Product> = ({item, index}) => (
    <ProductCard
      testID={`product_${index}`}
      data={item}
      onSelect={handleOnProductSelect}
    />
  );

  if (isLoading) {
    return <ProductsPlaceholder />;
  }

  return (
    <SafeAreaView testID="products_page">
      <FlatList
        testID="products_flatlist"
        data={productData}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={styles.list_column_wrapper}
      />
    </SafeAreaView>
  );
};

export default ProductsPage;
