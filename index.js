import { Platform, PixelRatio } from 'react-native';

/* # ---------------------------------------------
# ---------------------------------------------
# Author: abadilla.ml
# Date:   Friday February 1st 2019
# Last Modified by: abadilla.ml - <abadilla.ml@achealth.com.ph>
# Last Modified time: February 1st 2019, 3:41:12 pm
# ---------------------------------------------
# --------------------------------------------- */

export const typography = {
  heading: {
    fontFamily: Platform.select({
      ios: 'Open Sans',
      android: 'OpenSans-Regular',
    }),
    fontSize: PixelRatio.getFontScale() * 30,
  },
  regular: {
    fontFamily: Platform.select({
      ios: 'Open Sans',
      android: 'OpenSans-Regular',
    }),
    fontSize: PixelRatio.getFontScale() * 18,
  },
  caption: {
    fontFamily: Platform.select({ ios: 'Roboto', android: 'Roboto-Regular' }),
    fontSize: PixelRatio.getFontScale() * 14,
  },
  sub: {
    fontFamily: 'System',
    fontSize: PixelRatio.getFontScale() * 12,
  },
};
