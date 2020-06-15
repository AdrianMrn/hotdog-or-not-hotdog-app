import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/App';
import * as theme from '../theme';
import { dummyModels } from '../dummydata';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export type Category = {
    id: number | null;
    name: string;
    items: Array<{
        id: number;
        image_url: string;
    }>;
};

export type Model = {
    id: number | null;
    name: string;
    categories: Array<Category>;
};

const models: Array<Model> = dummyModels;

export default function ModelsScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'ModelIndex'>>();

    return (
        <View style={[theme.flex.expand, theme.bg.white]}>
            <ScrollView style={[theme.flex.expand]}>
                {models.map((model) => (
                    <TouchableOpacity
                        key={model.id!}
                        style={[theme.border.b, theme.p.md]}
                        onPress={() => navigation.navigate('ModelDetail', { modelId: model.id, name: model.name })}
                    >
                        <Text>{model.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={[theme.p.md]}>
                <TouchableOpacity style={[theme.p.md, theme.bg.gray, theme.radius.full]}>
                    <Text style={[theme.text.center, theme.text.lg, theme.text.white]}>Create new model</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
