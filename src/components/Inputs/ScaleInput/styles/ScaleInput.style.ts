import {StyleSheet} from 'react-native';
import {Colors} from '../../../../global/colors';

const paddingRegular = 10;

export const style = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.lightgrey,
    paddingHorizontal: paddingRegular,
    paddingTop: paddingRegular + 7,
    paddingBottom: 45,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    width: '100%',
    marginBottom: 13,
  },
});
