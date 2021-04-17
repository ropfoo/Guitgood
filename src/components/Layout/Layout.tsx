import React from 'react';
import {View, ViewStyle} from 'react-native';

const style: ViewStyle = {
  padding: 20,
};

const Layout: React.FC = ({children}) => {
  return <View style={style}>{children}</View>;
};

export default Layout;
