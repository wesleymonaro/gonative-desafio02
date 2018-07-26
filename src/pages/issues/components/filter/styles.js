import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    backgroundColor: colors.light,
  },
  buttonText: {
    color: colors.dark,
  },
});

export default styles;
