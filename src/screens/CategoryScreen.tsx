import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as theme from '../theme';
import { Category } from './ModelsScreen';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/App';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function CategoryScreen() {
    const { params } = useRoute<RouteProp<RootStackParamList, 'CategoryDetail'>>();

    const [category /* , setCategory */] = useState<Category>(params.category || { id: null, name: '', items: [] });

    return (
        <View style={[theme.flex.expand, theme.bg.white]}>
            <View style={[theme.flex.expand, theme.mt.lg]}>
                <Text style={[theme.text.lg, theme.font.bold, theme.flex.selfCenter]}>Items</Text>

                <ScrollView style={[theme.flex.expand, theme.border.t, theme.mt.md]}>
                    {category.items.map((item) => (
                        <TouchableOpacity key={item.id} style={[theme.border.b, theme.p.md]}>
                            <Text>{item.image_url}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={[theme.p.md]}>
                    <TouchableOpacity style={[theme.p.md, theme.bg.gray, theme.radius.full]}>
                        <Text style={[theme.text.center, theme.text.lg, theme.text.white]}>Create new Category</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
