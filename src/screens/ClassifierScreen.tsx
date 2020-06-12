import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import * as theme from '../theme';

export default function ClassifierScreen() {
    return (
        <SafeAreaView style={[theme.flex.expand, theme.flex.itemsCenter, theme.flex.justifyCenter, theme.bg.white]}>
            <Text>Classifier</Text>
        </SafeAreaView>
    );
}
