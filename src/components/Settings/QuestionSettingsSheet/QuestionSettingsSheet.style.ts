import {StyleSheet} from 'react-native';
import {Spacing} from '../../../global/spacing';

export const style = StyleSheet.create({
  inner: {
    padding: Spacing.quizMargin,
  },
});

const borderRadius = 30;

export const sheetStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  container: {
    borderTopEndRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
});
