import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {style} from './styles/ScaleInputKey.style';

interface ScaleInputKeyProps {
  note: string;
  setNoteCallback: () => void;
}

const ScaleInputKey: React.FC<ScaleInputKeyProps> = ({
  note,
  setNoteCallback,
}) => {
  return (
    <Pressable key={note} onPress={setNoteCallback} style={style.inputKey}>
      <View style={style.inputKey}>
        <Text style={style.inputKeyText}>{note}</Text>
      </View>
    </Pressable>
  );
};

export default ScaleInputKey;
