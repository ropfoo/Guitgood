import styled from '@emotion/native';
import {Colors} from '../../../global/colors';

const scale = '50px';

export const SettingsButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: ${scale};
  height: ${scale};
  padding: 10px;
  background-color: ${Colors.black};
`;
