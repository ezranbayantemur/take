import React from 'react';
import IconProps from './types';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

const IcoMoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

export default function Icon({...props}: IconProps) {
  return <IcoMoonIcon suppressHighlighting {...props} />;
}
