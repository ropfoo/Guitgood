import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginBottom: 15,
    padding: 12.5,
    width: '60%',
  },
  buttonText: {
    color: 'blue',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

interface ProgressButtonProps {
  onSubmit: () => void;
}

const ProgressButton: React.FC<ProgressButtonProps> = ({onSubmit}) => {
  return (
    <View style={style.wrapper}>
      <Pressable style={style.buttonContainer} onPress={onSubmit}>
        <Text style={style.buttonText}>next</Text>
      </Pressable>
    </View>
  );
};

export default ProgressButton;
