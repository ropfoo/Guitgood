import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '60%',
  },
  buttonText: {
    fontSize: 20,
    color: 'blue',
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
