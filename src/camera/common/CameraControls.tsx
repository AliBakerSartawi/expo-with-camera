import { observer } from '@legendapp/state/react';
import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

export const CameraControls = observer(
  ({
    position,
    children
  }: ViewProps & {
    position: 'top' | 'bottom';
    children: ReactNode;
  }) => {
    return (
      <View
        style={[
          {
            position: 'absolute',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 32,
            paddingHorizontal: 16,
          },
          position === 'top'
            ? {
                top: 0,
                paddingTop: 64
              }
            : {
                bottom: 0,
                paddingBottom: 64
              }
        ]}
      >
        {children}
      </View>
    );
  }
);
