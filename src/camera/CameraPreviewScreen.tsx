import { Image, Text, TouchableOpacity, View } from 'react-native';
import { observer } from '@legendapp/state/react';
import { $store } from '../store';
import { CameraPreviewBottomControls } from './common/CameraPreviewBottomControls';
import { CameraPreviewTopControls } from './common/CameraPreviewTopControls';

export const CameraPreviewScreen = observer(() => {
  const lastPhotoUri = $store.camera.lastPhotoUri.get();
  const aspectRatio = $store.camera.calculatedAspectRatio.get();

  return (
    <View
      style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}
    >
      <Image
        source={{ uri: lastPhotoUri }}
        style={{ width: '100%', aspectRatio }}
      />
      <CameraPreviewTopControls />
      <CameraPreviewBottomControls />
    </View>
  );
});
