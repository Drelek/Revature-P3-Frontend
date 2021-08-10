import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import SplashScreen from '../component/screens/splash';
import SplashScreen2 from '../component/screens/test';
import React from 'react';
import ViewBatch from '../src/screens/ViewBatch';
import Navigation from '.';
import RootTabNavigator from './RootTabNavigator';
import AddEditBatch from '../src/screens/AddEditBatch';
import Curricula from '../src/screens/Curricula/Curricula';
import AddEditCurriculum from '../src/screens/AddEditCurriculum/AddEditCurriculum';


//please import your screen and put in your screen in components-kai
const Stack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name='Main' component={Navigation} />
      <Stack.Screen name='ViewBatch' component={ViewBatch} />
      <Stack.Screen name='AddEditBatch' component={AddEditBatch} />
      {/** add your view/addedit screens here */}
      <Stack.Screen name='Curricula' component={Curricula} />
      <Stack.Screen name='AddEditCurriculum' component={AddEditCurriculum} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
