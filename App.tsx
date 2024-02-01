import { View } from 'react-native';
import { CameraScreen } from './src/camera';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from './theme';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <CameraScreen />
      </TamaguiProvider>
    </View>
  );
}
