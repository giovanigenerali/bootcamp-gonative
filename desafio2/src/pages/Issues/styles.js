import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  filterWrapper: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
    marginRight: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.light,
  },

  filterButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: metrics.basePadding / 3,
    paddingRight: metrics.basePadding,
    paddingBottom: metrics.basePadding / 3,
    paddingLeft: metrics.basePadding,
  },

  filterButtonText: {
    color: colors.dark,
  },

  filterButtonTextActive: {
    color: colors.darker,
    fontWeight: 'bold',
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    marginRight: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
    borderWidth: 1,
    borderColor: colors.light,
    padding: metrics.basePadding / 1.5,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
  },

  infoMessage: {
    color: colors.black,
  },
});

export default styles;
