import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ErrorPage,
  ProductCard,
  ProductSearchEmptyPlaceholder,
  ProductsPlaceholder,
  SearchBar,
} from '@components';
import {routes} from '@route';
import styles from './Products.style';
import {usePostProductsForCategoryMutation} from '../../redux/api';
import type {ProductsScreenProps} from '@route';
import type {ListRenderItem} from 'react-native';
import type {Product} from '@types';

const ProductsPage = (): React.ReactElement => {
  const route = useRoute<ProductsScreenProps['route']>();
  const navigation = useNavigation<ProductsScreenProps['navigation']>();
  const [productList, setProductList] = React.useState<Product[]>([]);
  const [getProducts, {data: productData = [], isLoading, isError}] =
    usePostProductsForCategoryMutation();

  const fetchProducts = React.useCallback(() => {
    getProducts({category_name: route.params.category_name});
  }, [getProducts, route.params.category_name]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleOnProductSelect = (product: Product) => {
    navigation.navigate(routes.PRODUCT_DETAIL, {product_id: product.id});
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

  if (isError) {
    return (
      <ErrorPage
        message="Ürünler getirilirken bir hata oluştu"
        onRetry={fetchProducts}
      />
    );
  }

  return (
    <SafeAreaView testID={`products_page_${route.params.category_name}`}>
      <FlatList
        testID="products_flatlist"
        data={productList}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={styles.list_column_wrapper}
        ListEmptyComponent={ProductSearchEmptyPlaceholder}
        ListHeaderComponent={
          <SearchBar
            testID="products_searchbar"
            placeholder="Ürün ara..."
            data={productData}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: TODO: Fix this
            onSearch={handleOnSearch}
          />
        }
      />
    </SafeAreaView>
  );
};

export default ProductsPage;
