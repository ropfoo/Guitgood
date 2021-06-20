import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  questionWrapper: {
    justifyContent: 'space-between',
    height: '100%',
  },
  questionGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 370,
  },
  answerOptions: {
    marginLeft: 30,
  },
  questionContent: {
    width: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    height: 200,
  },
  rootNote: {
    fontSize: 180,
    fontWeight: 'bold',
  },
  scaleType: {
    fontSize: 40,
  },
  messsage: {
    color: 'lightgreen',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
});
