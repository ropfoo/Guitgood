import {StyleSheet} from 'react-native';
import {Colors} from '../../../global/colors';

export const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  optionContainer: {
    backgroundColor: Colors.lightgrey,
    borderRadius: 50,
    width: 100,
  },
  optionText: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },
});

export const styleActive = StyleSheet.create({
  ...style,
  optionContainer: {
    ...style.optionContainer,
    backgroundColor: Colors.darkBlue,
  },
  optionText: {
    ...style.optionText,
    color: Colors.white,
  },
});
