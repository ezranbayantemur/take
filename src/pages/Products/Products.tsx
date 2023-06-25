import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {usePostProductsForCategoryMutation} from '../../redux/api';
import {Product} from '@types';
import {ProductCard, ProductsPlaceholder, SearchBar} from '@components';
import styles from './Products.style';

const ProductsPage = () => {
  const route = useRoute<any>();
  const [getProducts, {data: productData = [], isLoading}] =
    usePostProductsForCategoryMutation();
  const [productList, setProductList] = React.useState<Product[]>([]);

  useEffect(() => {
    getProducts({category_name: route.params.category_name});
  }, [getProducts, route.params.category_name]);

  const handleOnProductSelect = (product: Product) => {
    console.log(product);
  };

  const handleOnSearch = (searchResult: Product[]) => {
    setProductList(searchResult);
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
        data={productList}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={styles.list_column_wrapper}
        ListHeaderComponent={
          <SearchBar
            testID="products_searchbar"
            placeholder="Ürün ara..."
            data={productData}
            // @ts-ignore: TODO: Fix this
            onSearch={handleOnSearch}
          />
        }
      />
    </SafeAreaView>
  );
};

export default ProductsPage;
