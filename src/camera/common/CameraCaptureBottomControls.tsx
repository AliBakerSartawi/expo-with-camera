import { Camera, CameraType } from 'expo-camera';
import { MutableRefObject } from 'react';
import { Text, View } from 'react-native';
import { observer } from '@legendapp/state/react';
import { $store } from '../../store';
import { CameraButton } from './CameraButton';
import { CameraControls } from './CameraControls';
import CameraCaptureIcon from '../icons/CameraCaptureIcon';
import CameraSwitchIcon from '../icons/CameraSwitchIcon';

export const CameraCaptureBottomControls = observer(
  ({ camera }: { camera: MutableRefObject<Camera> | null }) => {
    return (
      <CameraControls position="bottom">
        <View style={{ flex: 1 }} />
        <CameraButton
          withBackground={false}
          onPress={async () => {
            if (camera.current) {
              let photo = await camera.current.takePictureAsync();
              $store.camera.lastPhotoUri.set(photo.uri);
            }
          }}
        >
          <CameraCaptureIcon width={72} height={72} />
        </CameraButton>
        <CameraButton
          onPress={() => {
            $store.camera.type.set((type) =>
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
          style={{ alignItems: 'flex-end' }}
        >
          <CameraSwitchIcon width={28} height={28} />
        </CameraButton>
      </CameraControls>
    );
  }
);
