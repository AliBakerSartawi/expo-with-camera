import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface Props extends TouchableOpacityProps {
  withBackground?: boolean;
}

export function CameraButton({ withBackground = true, children, ...props }: Props) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          flex: 1,
          alignItems: 'center'
        },
        props.style
      ]}
    >
      <View
        style={
          withBackground
            ? {
                padding: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: 1000
              }
            : undefined
        }
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}
