import { Circle, Path, Svg, SvgProps } from 'react-native-svg';

interface CameraCaptureIconProps extends SvgProps {}

export default function CameraCaptureIcon(props: CameraCaptureIconProps) {
  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" {...props}>
      <Circle cx="39.9998" cy="40" r="32.9412" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM40 76.4706C60.1422 76.4706 76.4706 60.1422 76.4706 40C76.4706 19.8579 60.1422 3.52941 40 3.52941C19.8579 3.52941 3.52941 19.8579 3.52941 40C3.52941 60.1422 19.8579 76.4706 40 76.4706Z"
        fill="white"
      />
    </Svg>
  );
}
