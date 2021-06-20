import {StyleSheet} from 'react-native';
import {Colors} from '../../../../global/colors';

export const style = StyleSheet.create({
  questionWrapper: {
    backgroundColor: Colors.white,
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  questionGrid: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 370,
    justifyContent: 'space-between',
    paddingHorizontal: '15%',
    width: '100%',
  },
  questionContent: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 200,
    justifyContent: 'center',
  },
  rootNote: {
    fontSize: 200,
    fontWeight: 'bold',
  },
  scaleType: {
    fontSize: 40,
    marginTop: 15,
  },
});
