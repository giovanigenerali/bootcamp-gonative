import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    borderBottomWidth: 2,
    borderBottomColor: colors.light,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 80) / 2,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.dark,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
