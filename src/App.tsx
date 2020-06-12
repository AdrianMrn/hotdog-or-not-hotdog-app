import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ModelScreen from './screens/ModelsScreen';
import DetailScreen from './screens/TrainerScreen';
import TrainerScreen from './screens/TrainerScreen';
import ClassifierScreen from './screens/ClassifierScreen';
import DetailStack from './screens/DetailStack';

export type RootStackParamList = {
    Models: undefined;
    Detail: { modelId: null | number; name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Models">
                <Stack.Screen name="Models" component={ModelScreen} options={{ title: 'Models' }} />
                <Stack.Screen
                    name="Detail"
                    component={DetailStack}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
