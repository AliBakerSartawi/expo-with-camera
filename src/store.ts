import { ObservableComputed, computed, observable } from '@legendapp/state';
import { Camera, CameraType, FlashMode } from 'expo-camera';

export const $store = observable({
  camera: CAMERA_CONFIG_INITIAL_VALUE()
});

function CAMERA_CONFIG_INITIAL_VALUE(): CameraConfig {
  return {
    isOpen: false,
    type: CameraType.back,
    ratio: '16:9',
    lastPhotoUri: '',
    flashMode: FlashMode.off,
    calculatedAspectRatio: computed(() => {
      const [height, width] = $store.camera.ratio.get().split(':').map(Number);
      return width / height;
    })
  };
}

type CameraConfig = {
  isOpen: boolean;
  type: CameraType;
  ratio: string;
  lastPhotoUri: string;
  flashMode: FlashMode;
  calculatedAspectRatio: ObservableComputed<number>;
};
