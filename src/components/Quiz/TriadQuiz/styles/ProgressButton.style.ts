import {StyleSheet} from 'react-native';
import {Colors} from '../../../../global/colors';

export const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 50,
    padding: 12.5,
    width: '60%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
