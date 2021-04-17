import React from 'react';
import {Button, View, ViewStyle} from 'react-native';
import {scale} from './scaleInput.data';
import {ScaleInputAction, ScaleInputReducer} from './ScaleInputReducer';

const style: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

interface ScaleInputProps {
  setNoteValue: React.Dispatch<ScaleInputReducer>;
  target: number;
}

const ScaleInput: React.FC<ScaleInputProps> = ({setNoteValue, target}) => {
  return (
    <View style={style}>
      {scale.map(note => (
        <Button
          key={note}
          title={note}
          onPress={() =>
            setNoteValue({
              type: ScaleInputAction.UPDATE_VALUE,
              payload: {active: false, inputValue: note, target},
            })
          }
        />
      ))}
    </View>
  );
};

export default ScaleInput;
