import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  inputKeyText: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  inputKey: {
    backgroundColor: 'gray',
    borderRadius: 20,
    margin: 4,
  },
});

interface ScaleInputKeyProps {
  note: string;
  setNoteCallback: () => void;
}

const ScaleInputKey: React.FC<ScaleInputKeyProps> = ({
  note,
  setNoteCallback,
}) => {
  return (
    <Pressable key={note} onPress={setNoteCallback}>
      <View style={style.inputKey}>
        <Text style={style.inputKeyText}>{note}</Text>
      </View>
    </Pressable>
  );
};

export default ScaleInputKey;
