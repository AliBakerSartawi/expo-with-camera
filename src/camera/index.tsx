import { Camera } from 'expo-camera';
import {
  Button,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View
} from 'react-native';
import { observer } from '@legendapp/state/react';
import { $store } from '../store';
import { CameraCaptureScreen } from './CameraCaptureScreen';
import { CameraPreviewScreen } from './CameraPreviewScreen';
import { Sheet } from 'tamagui';
import { useState } from 'react';

export const CameraScreen = observer(() => {
  const [status, requestPermission, getPermissionMethod] =
    Camera.useCameraPermissions();

  const lastPhotoUri = $store.camera.lastPhotoUri.get();

  const handleOpenCamera = async () => {
    console.log('🚀 ~ handleOpenCamera ~ status:', status);
    if (status.granted) {
      $store.camera.isOpen.set(true);
    } else {
      console.log('requesting permission');
      const x = await requestPermission();
      console.log('🚀 ~ handleOpenCamera ~ x:', x);
    }
  };

  return (
    <>
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        {/* <Button onPress={handleOpenCamera} title="Camera" /> */}
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={handleOpenCamera}
            style={{ backgroundColor: 'blue' }}
          >
            <Text style={{ color: 'white' }}>Open Camera</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Sheet
        open={$store.camera.isOpen.get()}
        onOpenChange={$store.camera.isOpen.set}
        snapPoints={[100]}
        dismissOnSnapToBottom
        zIndex={100_000}
        // animation="medium"
      >
        <Sheet.Overlay />
        {/* <Sheet.Handle /> */}
        <Sheet.Frame backgroundColor="black">
          <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            {lastPhotoUri ? <CameraPreviewScreen /> : <CameraCaptureScreen />}
          </SafeAreaView>
        </Sheet.Frame>
      </Sheet>
    </>
  );
});
