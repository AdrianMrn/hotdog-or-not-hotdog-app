import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Alert, ActivityIndicator, Text, View } from 'react-native';
import TrainerScreen from './TrainerScreen';
import ClassifierScreen from './ClassifierScreen';
import { RootStackParamList } from '../App';
import * as theme from '../theme';
import { Model } from './ModelsScreen';
import { dummyModels } from '../dummydata';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../api';

export type ModelParamList = {
    Trainer: { model: Model };
    Classifier: { model: Model };
};

const Tab = createBottomTabNavigator<ModelParamList>();

export default function DetailStack() {
    const { modelId } = useRoute<RouteProp<RootStackParamList, 'ModelDetail'>>().params;

    const [isLoading, setIsLoading] = useState(true);
    const [model, setModel] = useState<Model | null>(null);

    const [cancelApi, setCancelApi] = useState<Function | null>(null);
    useEffect(() => {
        return () => cancelApi && cancelApi();
    }, [cancelApi]);

    useEffect(() => {
        getModel();
    }, [modelId]);

    async function getModel() {
        setIsLoading(true);

        try {
            const { cancel, response } = api.getModel();
            setCancelApi(cancel);

            /* setModel((await response).data.model); */

            setModel(dummyModels[0]);
        } catch (error) {
            Alert.alert('Error', 'Something went wrong while fetching the model, please try again.');
        }

        setIsLoading(false);
    }

    return (
        <View style={[theme.flex.expand, theme.bg.white]}>
            {isLoading ? (
                <ActivityIndicator style={[theme.mt.auto, theme.mb.auto]} size="large" />
            ) : model ? (
                <View style={[theme.pb.lg, theme.flex.expand]}>
                    <Tab.Navigator initialRouteName="Trainer">
                        <Tab.Screen name="Trainer" component={TrainerScreen} initialParams={{ model }} />
                        <Tab.Screen name="Classifier" component={ClassifierScreen} initialParams={{ model }} />
                    </Tab.Navigator>
                </View>
            ) : (
                <View style={[theme.flex.expand, theme.flex.itemsCenter, theme.flex.justifyCenter]}>
                    <TouchableOpacity
                        style={[theme.radius.full, theme.bg.black, theme.py.sm, theme.px.lg]}
                        onPress={getModel}
                    >
                        <Text style={[theme.text.white]}>Refresh</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
