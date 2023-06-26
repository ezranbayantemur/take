import React from 'react';
import type {Meta, StoryObj} from '@storybook/react-native';
import {DiscountCard} from '@components';
import {DiscountCardProps} from './DiscountCard.types';

const DiscountCardMeta: Meta<DiscountCardProps> = {
  title: 'DiscountCard',
  component: DiscountCard,
};

export default DiscountCardMeta;

export const Basic: StoryObj<DiscountCardProps> = {
  decorators: [
    () => {
      return (
        <>
          <DiscountCard
            testID=""
            data={{
              categoryTitle: 'electronics',
              totalPrice: 1000,
              discountPercentage: 5,
              discountedPrice: 950,
              hasDiscount: true,
              hasProduct: true,
              remainingPricetoApplyDiscount: 0,
            }}
          />
          <DiscountCard
            testID=""
            data={{
              categoryTitle: 'jewelry',
              totalPrice: 1000,
              discountPercentage: 17,
              discountedPrice: 0,
              hasDiscount: false,
              hasProduct: true,
              remainingPricetoApplyDiscount: 1500,
            }}
          />
        </>
      );
    },
  ],
};
