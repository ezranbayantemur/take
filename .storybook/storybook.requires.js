/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/Button/Button.stories.tsx": require("../src/components/Button/Button.stories.tsx"),
    "./src/components/card/CartCard/CartCard.stories.tsx": require("../src/components/card/CartCard/CartCard.stories.tsx"),
    "./src/components/card/CategoryCard/CategoryCard.stories.tsx": require("../src/components/card/CategoryCard/CategoryCard.stories.tsx"),
    "./src/components/card/DiscountCard/DiscountCard.stories.tsx": require("../src/components/card/DiscountCard/DiscountCard.stories.tsx"),
    "./src/components/card/ProductCard/ProductCard.stories.tsx": require("../src/components/card/ProductCard/ProductCard.stories.tsx"),
    "./src/components/card/ShowCaseProductCard/ShowCaseProductCard.stories.tsx": require("../src/components/card/ShowCaseProductCard/ShowCaseProductCard.stories.tsx"),
    "./src/components/Icon/Icon.stories.js": require("../src/components/Icon/Icon.stories.js"),
    "./src/components/Input/Input.stories.tsx": require("../src/components/Input/Input.stories.tsx"),
    "./src/components/InputCounter/InputCounter.stories.tsx": require("../src/components/InputCounter/InputCounter.stories.tsx"),
    "./src/components/SearchBar/SearchBar.stories.tsx": require("../src/components/SearchBar/SearchBar.stories.tsx"),
  };
};

configure(getStories, module, false);
