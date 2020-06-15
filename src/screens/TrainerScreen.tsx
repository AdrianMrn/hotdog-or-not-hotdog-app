import React from 'react';
import { Text, View } from 'react-native';
import * as theme from '../theme';
import { ModelParamList } from './DetailStack';
import { useRoute, RouteProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function TrainerScreen() {
    const { model } = useRoute<RouteProp<ModelParamList, 'Trainer'>>().params;
    const navigation = useNavigation<NavigationProp<ModelParamList, 'Trainer'>>();

    return (
        <View style={[theme.flex.expand, theme.bg.white]}>
            <ScrollView style={[theme.flex.expand]}>
                {model.categories.map((category) => (
                    <TouchableOpacity
                        key={category.id!}
                        style={[theme.border.b, theme.p.md]}
                        onPress={() => {
                            navigation.navigate('CategoryDetail' as any, { category });
                        }}
                    >
                        <Text>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={[theme.p.md]}>
                <TouchableOpacity style={[theme.p.md, theme.bg.gray, theme.radius.full]}>
                    <Text style={[theme.text.center, theme.text.lg, theme.text.white]}>Create new Category</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
