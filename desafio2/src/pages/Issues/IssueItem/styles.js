import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  issue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    marginRight: metrics.baseMargin * 2,
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

  issueInfo: {
    width: '73%',
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
  },

  issueTitle: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },

  issueUser: {
    color: colors.regular,
    fontSize: 13,
  },

  externalLink: {
    color: colors.dark,
  },
});

export default styles;
