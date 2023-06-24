import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {CategoryCard, DiscoverPlaceholder} from '@components';
import {useGetDiscoverFeedQuery} from '../../redux/api';
import type {DiscoverResponseType, ShowCaseProduct} from '@types';

const DiscoverPage = () => {
  const {data: discoverData, isLoading} = useGetDiscoverFeedQuery();

  const handleOnProductSelect = (product: ShowCaseProduct) => {
    console.log(product);
  };

  const renderCategory: ListRenderItem<DiscoverResponseType> = ({
    item,
    index,
  }) => (
    <CategoryCard
      testID={`discover_${index}`}
      title={item.category_title}
      showcaseData={item.showcase_products}
      onSelect={handleOnProductSelect}
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
