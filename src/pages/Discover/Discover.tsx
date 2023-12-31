import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@route';
import {CategoryCard, DiscoverPlaceholder, ErrorPage} from '@components';
import styles from './Discover.style';
import {useGetDiscoverFeedQuery} from '../../redux/api';
import type {ListRenderItem} from 'react-native';
import type {DiscoverScreenProps} from '@route';
import type {DiscoverCategory, ShowCaseProduct} from '@types';
import type {RootState} from '../../redux/store';

const DiscoverPage = () => {
  const navigation = useNavigation<DiscoverScreenProps['navigation']>();
  const {
    data: discoverData,
    isLoading,
    isError,
    refetch,
  } = useGetDiscoverFeedQuery();
  const userFirstName = useSelector<RootState, string | undefined>(
    state => state.auth.userSession?.first_name,
  );
  const handleOnProductSelect = React.useCallback(
    (product: ShowCaseProduct) => {
      navigation.navigate(routes.PRODUCT_DETAIL, {
        product_id: product.id,
      });
    },
    [navigation],
  );

  const handleOnCategorySelect = React.useCallback(
    (selectedCategory: string) => {
      navigation.navigate(routes.PRODUCTS, {
        category_name: selectedCategory,
      });
    },
    [navigation],
  );

  const renderCategory: ListRenderItem<DiscoverCategory> = ({item, index}) => (
    <CategoryCard
      testID={`discover_${index}`}
      data={item}
      onProductSelect={handleOnProductSelect}
      onCategorySelect={handleOnCategorySelect}
    />
  );

  if (isError) {
    return (
      <ErrorPage
        message="Keşfet ürünleri getirilirken bir hata oluştu"
        onRetry={refetch}
      />
    );
  }

  return (
    <SafeAreaView testID="discover_page">
      {isLoading ? (
        <DiscoverPlaceholder />
      ) : (
        <FlatList
          testID="discover_flatlist"
          data={discoverData}
          renderItem={renderCategory}
          ListHeaderComponent={() => (
            <Text style={styles.welcome_user_text}>
              Selam, {!!userFirstName && `${userFirstName}! `}
              Bugün ne almak istersin?
            </Text>
          )}
          ListHeaderComponentStyle={styles.header}
        />
      )}
    </SafeAreaView>
  );
};

export default DiscoverPage;
