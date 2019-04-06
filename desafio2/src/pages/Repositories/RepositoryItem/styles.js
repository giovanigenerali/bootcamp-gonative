import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  repository: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginRight: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: colors.light,
    padding: metrics.basePadding / 1.5,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: parseInt(45 / 2, 10),
  },

  repositoryInfo: {
    width: '75%',
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
  },

  repositoryName: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },

  repositoryOwner: {
    color: colors.regular,
    fontSize: 14,
  },

  angleRight: {
    color: colors.dark,
  },
});

export default styles;
