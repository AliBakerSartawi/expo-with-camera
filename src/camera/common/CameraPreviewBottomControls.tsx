import { observer } from '@legendapp/state/react';
import { Text, View } from 'react-native';
import { CameraButton } from './CameraButton';
import { CameraControls } from './CameraControls';
import CameraSendIcon from '../icons/CameraSendIcon';

export const CameraPreviewBottomControls = observer(() => {
  return (
    <CameraControls position="bottom">
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1 }} />
      <CameraButton withBackground={false} style={{ alignItems: 'flex-end' }}>
        <CameraSendIcon width={48} height={48} />
      </CameraButton>
    </CameraControls>
  );
});
