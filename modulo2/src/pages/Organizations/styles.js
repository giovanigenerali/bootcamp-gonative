import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  contentInsetFlatList: {
    bottom: metrics.basePadding,
  },

  flatList: {
    paddingTop: metrics.basePadding / 2,
  },

  columWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
