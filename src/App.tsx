import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import ModelScreen, { Category } from './screens/ModelsScreen';
import DetailStack from './screens/DetailStack';
import CategoryScreen from './screens/CategoryScreen';
import * as theme from './theme';

export type RootStackParamList = {
    ModelIndex: undefined;
    ModelDetail: { modelId: null | number; name: string };
    CategoryDetail: { category: Category };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <SafeAreaView style={[theme.flex.expand, theme.bg.white]}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ModelIndex">
                    <Stack.Screen name="ModelIndex" component={ModelScreen} options={{ title: 'Models' }} />
                    <Stack.Screen
                        name="ModelDetail"
                        component={DetailStack}
                        options={({ route }) => ({ title: route.params.name })}
                    />
                    <Stack.Screen
                        name="CategoryDetail"
                        component={CategoryScreen}
                        options={({ route }) => ({ title: route.params.category?.name })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
