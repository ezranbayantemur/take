import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {CategoryCard, DiscoverPlaceholder} from '@components';
import {useGetDiscoverFeedQuery} from '../../redux/api';
import type {DiscoverResponseType, ShowCaseProduct} from '@types';
import {useNavigation} from '@react-navigation/native';
import routes from '@route';

const DiscoverPage = () => {
  const navigation = useNavigation<any>();
  const {data: discoverData, isLoading} = useGetDiscoverFeedQuery();

  const handleOnProductSelect = (product: ShowCaseProduct) => {
    console.log(product);
  };

  const handleOnCategorySelect = React.useCallback(
    (selectedCategory: string) => {
      navigation.navigate(routes.PRODUCTS, {
        category_name: selectedCategory,
      });
    },
    [navigation],
  );

  const renderCategory: ListRenderItem<DiscoverResponseType> = ({
    item,
    index,
  }) => (
    <CategoryCard
      testID={`discover_${index}`}
      data={item}
      onProductSelect={handleOnProductSelect}
      onCategorySelect={handleOnCategorySelect}
    />
  );

  return (
    <SafeAreaView testID="discover_page">
      {isLoading ? (
        <DiscoverPlaceholder />
      ) : (
        <FlatList data={discoverData} renderItem={renderCategory} />
      )}
    </SafeAreaView>
  );
};

export default DiscoverPage;
