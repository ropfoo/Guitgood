import React, {useEffect, useRef} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {scale, scaleFlat, scaleSharp} from './scaleInput.data';
import {
  //   AnswerState,
  ScaleInputAction,
  ScaleInputReducer,
} from './ScaleInputReducer';
import RBSheet from 'react-native-raw-bottom-sheet';
import ScaleInputKey from './ScaleInputKey';

const style = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'lightgrey',
    padding: 15,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
  },
});

interface ScaleInputProps {
  setNoteValue: React.Dispatch<ScaleInputReducer>;
  target: number;
  isActive: boolean;
  isBottomSheet?: boolean;
}

const ScaleInput: React.FC<ScaleInputProps> = ({
  setNoteValue,
  target,
  isActive,
  isBottomSheet = false,
}) => {
  const refRBSheet = useRef<any>(null);

  const closeSheet = () => setNoteValue({type: ScaleInputAction.HIDE_INPUT});

  const displayContent = () => {
    const setNote = (note: string) =>
      setNoteValue({
        type: ScaleInputAction.UPDATE_VALUE,
        payload: {active: false, inputValue: note, target},
      });

    return (
      <View style={style.inputContainer}>
        <View style={style.inputRow}>
          {scale.map(note => (
            <ScaleInputKey
              key={note}
              note={note}
              setNoteCallback={() => setNote(note)}
            />
          ))}
        </View>
        <View style={style.inputRow}>
          {scaleSharp.map(note => (
            <ScaleInputKey
              key={note}
              note={note}
              setNoteCallback={() => setNote(note)}
            />
          ))}
        </View>
        <View style={style.inputRow}>
          {scaleFlat.map(note => (
            <ScaleInputKey
              key={note}
              note={note}
              setNoteCallback={() => setNote(note)}
            />
          ))}
        </View>
      </View>
    );
  };

  useEffect(() => {
    if (isBottomSheet) {
      if (isActive && refRBSheet) {
        refRBSheet.current.open();
      } else {
        refRBSheet.current.close();
      }
      console.log(isActive);
    }
  }, [isActive, refRBSheet, isBottomSheet]);

  return (
    <>
      {isBottomSheet ? (
        <RBSheet
          ref={refRBSheet}
          onClose={closeSheet}
          customStyles={{wrapper: {backgroundColor: 'transparent'}}}>
          <View>
            <Button title="close" onPress={closeSheet} />
            {displayContent()}
          </View>
        </RBSheet>
      ) : (
        <View>{displayContent()}</View>
      )}
    </>
  );
};

export default ScaleInput;
