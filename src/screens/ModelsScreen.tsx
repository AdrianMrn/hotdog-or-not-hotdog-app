import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/App';
import * as theme from '../theme';

export type Model = {
    id: number;
    name: string;
    categories: Array<string>;
};

const models: Array<Model> = [
    { id: 1, name: 'foo', categories: [] },
    { id: 2, name: 'bar', categories: [] },
    { id: 3, name: 'rab', categories: [] },
    { id: 4, name: 'oof', categories: [] },
];

export default function ModelsScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'Models'>>();

    return (
        <SafeAreaView style={[theme.flex.expand, theme.bg.white]}>
            <ScrollView style={[theme.flex.expand]}>
                {models.map((model) => (
                    <TouchableOpacity
                        key={model.id}
                        style={[theme.border.b, theme.p.md]}
                        onPress={() => navigation.navigate('Detail', { modelId: model.id, name: model.name })}
                    >
                        <Text>{model.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={[theme.p.md]}>
                <TouchableOpacity style={[theme.p.md, theme.bg.gray, theme.radius.full, theme.shadow.sm]}>
                    <Text style={[theme.text.center, theme.text.lg, theme.text.white]}>Create new model</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
