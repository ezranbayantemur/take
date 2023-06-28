import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {usePostProductsForCategoryMutation} from '../../redux/api';
import {Product} from '@types';
import {
  ProductCard,
  ProductSearchEmptyPlaceholder,
  ProductsPlaceholder,
  SearchBar,
} from '@components';
import styles from './Products.style';
import routes from '@route';

const ProductsPage = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [getProducts, {data: productData = [], isLoading}] =
    usePostProductsForCategoryMutation();
  const [productList, setProductList] = React.useState<Product[]>([]);

  useEffect(() => {
    getProducts({category_name: route.params.category_name});
  }, [getProducts, route.params.category_name]);

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
            // @ts-ignore: TODO: Fix this
            onSearch={handleOnSearch}
          />
        }
      />
    </SafeAreaView>
  );
};

export default ProductsPage;
