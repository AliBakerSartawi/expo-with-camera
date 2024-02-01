import { observer } from '@legendapp/state/react';
import { View } from 'react-native';
import { $store } from '../../store';
import CameraXIcon from '../icons/CameraXIcon';
import { CameraButton } from './CameraButton';
import { CameraControls } from './CameraControls';

export const CameraPreviewTopControls = observer(() => {
  return (
    <CameraControls position="top">
      <CameraButton
        style={{ alignItems: 'flex-start' }}
        onPress={() => $store.camera.lastPhotoUri.set('')}
      >
        <CameraXIcon />
      </CameraButton>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1 }} />
    </CameraControls>
  );
});
