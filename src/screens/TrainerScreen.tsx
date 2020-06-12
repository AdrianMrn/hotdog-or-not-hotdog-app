import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import * as theme from '../theme';

export default function TrainerScreen() {
    return (
        <SafeAreaView style={[theme.flex.expand, theme.flex.itemsCenter, theme.flex.justifyCenter, theme.bg.white]}>
            <Text>Trainer</Text>
        </SafeAreaView>
    );
}
