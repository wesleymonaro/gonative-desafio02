import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
  },
  separator: {
    marginTop: metrics.baseMargin * 1.5,
    marginBottom: metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },

});

export default styles;
