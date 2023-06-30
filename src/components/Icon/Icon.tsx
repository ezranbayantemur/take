import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
import type IconProps from './types';

const IcoMoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

export default function Icon({...props}: IconProps) {
  return <IcoMoonIcon suppressHighlighting {...props} />;
}
