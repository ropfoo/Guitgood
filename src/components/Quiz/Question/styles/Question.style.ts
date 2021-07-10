import styled from '@emotion/native';
import {Colors} from '../../../../global/colors';
import {Spacing} from '../../../../global/spacing';

export const QuestionWrapper = styled.View`
  background-color: ${Colors.white};
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

export const QuestionGrid = styled.View`
  align-items: center;
  flex-direction: row;
  height: 50%;
  justify-content: space-between;
  padding: 0 ${Spacing.quizMargin};
`;

export const QuestionContent = styled.View`
  align-items: center;
  height: 180px;
  justify-content: center;
`;

export const RootNote = styled.Text`
  font-size: 180px;
  font-weight: bold;
`;

export const ScaleType = styled.Text`
  font-size: 40px;
`;

export const MenuSection = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 ${Spacing.quizMargin};
  width: 100%;
`;
