import { Platform, Dimensions } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
