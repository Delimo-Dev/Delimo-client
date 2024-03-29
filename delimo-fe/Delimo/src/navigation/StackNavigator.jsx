import React from 'react';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/Login/LoginScreen';
import LoginFormScreen from '../screen/Login/LoginFormScreen';
import SignInScreen from '../screen/Login/SignInScreen';
import BottomTabs from './BottomTabs';
import ResolutionScreen from '../screen/Login/ResolutionScreen';
import NotiMain from '../screen/noti/NotiMain';
import Diary from '../screen/Diary/diary';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="LoginForm"
        component={LoginFormScreen}
      />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Resolution" component={ResolutionScreen} />

      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Noti" component={NotiMain} />
      <Stack.Screen name="Diary" component={Diary} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
