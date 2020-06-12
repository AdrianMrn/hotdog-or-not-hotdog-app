import React, { useState, useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrainerScreen from './TrainerScreen';
import ClassifierScreen from './ClassifierScreen';
import { RouteProp, useRoute } from '@react-navigation/native';
import Axios from 'axios';
import { Model } from './ModelsScreen';
import { RootStackParamList } from '../App';
import { Alert, ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as theme from '../theme';

const Tab = createBottomTabNavigator();

export default function DetailStack() {
    const { modelId } = useRoute<RouteProp<RootStackParamList, 'Detail'>>().params;

    const [isLoading, setIsLoading] = useState(true);
    const [model, setModel] = useState<Model | null>(null);

    const axiosSource = useRef(Axios.CancelToken.source());

    useEffect(() => {
        getModel();

        return () => axiosSource.current.cancel();
    }, [modelId]);

    async function getModel() {
        setIsLoading(true);

        try {
            /* TODO
            const response = await Axios.get('', { cancelToken: axiosSource.current.token });
            setModel(response.data.model); */

            setModel({ id: 1, name: 'foo', categories: [] });
        } catch (error) {
            Alert.alert('Error', 'Something went wrong while fetching the model, please try again.');
        }

        setIsLoading(false);
    }

    return (
        <SafeAreaView style={[theme.flex.expand, theme.bg.white]}>
            {isLoading ? (
                <ActivityIndicator style={[theme.mt.auto, theme.mb.auto]} size="large" />
            ) : (
                <Tab.Navigator initialRouteName="Trainer">
                    {/* TODO: type the params like in ModelsScreen */}
                    <Tab.Screen name="Trainer" component={TrainerScreen} initialParams={{ model }} />
                    <Tab.Screen name="Classifier" component={ClassifierScreen} initialParams={{ model }} />
                </Tab.Navigator>
            )}
        </SafeAreaView>
    );
}
