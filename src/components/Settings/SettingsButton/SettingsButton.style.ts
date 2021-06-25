import {StyleSheet} from 'react-native';
import {Colors} from '../../../global/colors';

const scale = 50;

export const style = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 50,
    width: scale,
    height: scale,
    justifyContent: 'center',
  },
  inner: {
    color: Colors.white,
    fontSize: 20,
    flex: 1,
  },
});
