import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    width: width - metrics.basePadding * 4,
    textAlign: 'center',
  },

  goBackButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.regular,
    position: 'absolute',
    left: 0,
    top: getStatusBarHeight() + metrics.baseMargin / 2,
    height: 44,
    width: 44,
  },
});

export default styles;
