import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import * as theme from './theme';

declare const global: { HermesInternal: null | {} };

function App() {
    return (
        <>
            <SafeAreaView style={[theme.flex.expand]}>
                <ScrollView style={[theme.flex.expand, theme.bg.red]}>
                    <View></View>
                    <Text>yu</Text>
                    <Text>yu</Text>
                    <Text>yu</Text>
                    <Text>yu</Text>
                </ScrollView>

                <View style={[theme.p.md]}>
                    <TouchableOpacity style={[theme.p.md, theme.bg.gray, theme.radius.full, theme.shadow.sm]}>
                        <Text style={[theme.text.center, theme.text.lg, theme.text.white]}>Create new model</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

export default App;
