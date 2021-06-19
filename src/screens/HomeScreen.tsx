import React from 'react';
import {Button, Text, View} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello, this is home</Text>
      <Button title="Go to Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};

export default HomeScreen;
