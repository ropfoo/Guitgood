import {StyleSheet} from 'react-native';

const paddingRegular = 10;

export const style = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: paddingRegular,
    paddingTop: paddingRegular,
    paddingBottom: 40,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    width: '100%',
    marginBottom: 13,
  },
});
