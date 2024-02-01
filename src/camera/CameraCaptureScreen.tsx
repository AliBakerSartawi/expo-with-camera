import { Camera } from 'expo-camera';
import { ElementRef, useEffect, useRef, useState } from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import { observer } from '@legendapp/state/react';
import { $store } from '../store';
import { CameraControls } from './common/CameraControls';
import { CameraCaptureBottomControls } from './common/CameraCaptureBottomControls';
import { CameraCaptureTopControls } from './common/CameraCaptureTopControls';

export const CameraCaptureScreen = observer(() => {
  const ref = useRef<ElementRef<typeof Camera>>(null);

  const type = $store.camera.type.get();
  const flashMode = $store.camera.flashMode.get();
  const ratio = $store.camera.ratio.get();
  const aspectRatio = $store.camera.calculatedAspectRatio.get();

  useEffect(() => {
    if (ref.current && Platform.OS === 'android') {
      ref.current.getSupportedRatiosAsync().then((ratios) => {
        if (ratios.includes('16:9')) {
          $store.camera.ratio.set('16:9');
        } else if (ratios.includes('4:3')) {
          $store.camera.ratio.set('4:3');
        } else {
          $store.camera.ratio.set(ratios[0]);
        }
      });
    }
  }, []);

  return (
    <View
      style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}
    >
      <Camera
        ref={ref}
        ratio={ratio}
        type={type}
        flashMode={flashMode}
        style={{ width: '100%', aspectRatio }}
      />
      <CameraCaptureTopControls />
      <CameraCaptureBottomControls camera={ref} />
    </View>
  );
});
