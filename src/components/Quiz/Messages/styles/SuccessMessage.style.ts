import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  messsageWrapper: {
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 100,
  },
  messsageText: {
    color: 'lightgreen',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 0,
  },
});
