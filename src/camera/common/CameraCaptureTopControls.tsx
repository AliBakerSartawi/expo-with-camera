import { observer } from '@legendapp/state/react';
import { FlashMode } from 'expo-camera';
import { View } from 'react-native';
import { $store } from '../../store';
import CameraFlashIcon from '../icons/CameraFlashIcon';
import { CameraButton } from './CameraButton';
import { CameraControls } from './CameraControls';
import CameraXIcon from '../icons/CameraXIcon';

export const CameraCaptureTopControls = observer(() => {
  const flashMode = $store.camera.flashMode.get();

  return (
    <CameraControls position="top">
      <CameraButton
        style={{ alignItems: 'flex-start' }}
        onPress={() => $store.camera.isOpen.set(false)}
      >
        <CameraXIcon />
      </CameraButton>
      <View style={{ flex: 1 }} />
      <CameraButton
        style={{ alignItems: 'flex-end' }}
        onPress={() => {
          $store.camera.flashMode.set((flashMode) => {
            if (flashMode === FlashMode.off) {
              return FlashMode.on;
            } else if (flashMode === FlashMode.on) {
              return FlashMode.auto;
            } else if (flashMode === FlashMode.auto) {
              return FlashMode.off;
            }
          });
        }}
      >
        <CameraFlashIcon mode={flashMode} />
      </CameraButton>
    </CameraControls>
  );
});
