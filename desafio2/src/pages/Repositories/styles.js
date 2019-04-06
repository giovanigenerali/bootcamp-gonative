import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  newRepository: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: metrics.baseMargin * 2,
    paddingBottom: metrics.basePadding,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    height: metrics.basePadding * 2,
    paddingHorizontal: metrics.basePadding / 2,
  },

  button: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: colors.darker,
    fontWeight: 'normal',
  },

  error: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    marginRight: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
    borderWidth: 1,
    borderColor: colors.danger,
    padding: metrics.basePadding / 1.5,
    backgroundColor: colors.danger,
  },

  errorMessage: {
    color: colors.white,
  },
});

export default styles;
