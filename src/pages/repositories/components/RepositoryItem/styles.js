import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    // marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
  },
  avatarBox: {
    flex: 1,
  },
  infoBox: {
    flex: 4,
    paddingLeft: metrics.baseMargin,
    justifyContent: 'center',
  },
  iconBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  repoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },

  infoText: {
    color: colors.regular,
    fontSize: 12,
  },

  avatar: {
    ...general.image,
  },
});

export default styles;
