import React, { useRef, useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as theme from '../theme';
import api from '../api';
import { ModelParamList } from './DetailStack';

export default function ClassifierScreen() {
    const { model } = useRoute<RouteProp<ModelParamList, 'Classifier'>>().params;
    console.log(model);

    const [cancelApi, setCancelApi] = useState<Function | null>(null);
    useEffect(() => {
        return () => cancelApi && cancelApi();
    }, [cancelApi]);

    const cameraRef = useRef<RNCamera>(null);
    const [image, setImage] = useState<string | null>();
    const [hasImage, setHasImage] = useState(false);
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);

    async function takePicture() {
        setIsLoadingImage(true);
        cameraRef.current!.pausePreview();
        setHasImage(true);

        const picture = await cameraRef.current!.takePictureAsync({ quality: 0.5, base64: true });
        setIsLoadingImage(false);
        setImage(picture.base64);
    }

    function removePicture() {
        setHasImage(false);
        setImage(null);
        cameraRef.current!.resumePreview();
        // TODO: cancel upload if it exists?
        setIsLoadingUpload(false);
    }

    function classifyPicture() {
        setIsLoadingUpload(true);

        if (!image) {
            return;
        }

        try {
            const { cancel, response } = api.classifyPicture(image, model.id!);
            setCancelApi(cancel);

            /* setModel((await response).data.model); */
        } catch (error) {
            Alert.alert('Error', 'Something went wrong while uploading your image, please try again.');
        }
    }

    return (
        <View style={[theme.flex.expand, theme.bg.white]}>
            <RNCamera style={[theme.flex.expand]} ref={cameraRef} captureAudio={false} />

            <View style={[theme.w.full, theme.flex.justifyCenter, { height: 80 }]}>
                {isLoadingImage ? (
                    <ActivityIndicator size="large" />
                ) : hasImage ? (
                    <View style={[theme.flex.row, theme.flex.justifyAround]}>
                        <TouchableOpacity
                            style={[theme.p.lg, theme.h.full, theme.flex.justifyCenter]}
                            onPress={removePicture}
                        >
                            <Text style={[theme.text.lg, theme.text.faded]}>Remove</Text>
                        </TouchableOpacity>

                        {isLoadingUpload ? (
                            <ActivityIndicator size="large" />
                        ) : (
                            <TouchableOpacity
                                style={[theme.p.lg, theme.h.full, theme.flex.justifyCenter]}
                                onPress={classifyPicture}
                            >
                                <Text style={[theme.text.lg, theme.font.bold]}>Classify</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ) : (
                    <TouchableOpacity
                        style={[theme.w.full, theme.h.full, theme.flex.itemsCenter, theme.flex.justifyCenter]}
                        onPress={takePicture}
                    >
                        <Text style={[theme.text.lg, theme.font.bold]}>Snap</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
