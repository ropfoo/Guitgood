import React, {useEffect, useRef} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {scale, scaleFlat, scaleSharp} from './scaleInput.data';
import {ScaleInputAction, ScaleInputReducer} from './ScaleInputReducer';
import RBSheet from 'react-native-raw-bottom-sheet';

const style = StyleSheet.create({
  inputContainer: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
  },
  inputKeyText: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  inputKey: {
    backgroundColor: 'gray',
    borderRadius: 20,
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

  const displayContent = () => (
    <View style={style.inputContainer}>
      <View style={style.inputRow}>
        {scale.map(note => (
          <Pressable
            key={note}
            onPress={() =>
              setNoteValue({
                type: ScaleInputAction.UPDATE_VALUE,
                payload: {active: false, inputValue: note, target},
              })
            }>
            <View style={style.inputKey}>
              <Text style={style.inputKeyText}>{note}</Text>
            </View>
          </Pressable>
        ))}
      </View>
      <View style={style.inputRow}>
        {scaleSharp.map(note => (
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
      <View style={style.inputRow}>
        {scaleFlat.map(note => (
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
    </View>
  );

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
