import { Circle, G, Mask, Path, Rect, Svg, SvgProps } from 'react-native-svg';

interface CameraSendIconProps extends SvgProps {}

export default function CameraSendIcon(props: CameraSendIconProps) {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" {...props}>
      <Circle cx="18" cy="18" r="18" fill="#176CFF" />
      <Mask
        id="mask0_21363_36442"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="8"
        y="6"
        width="24"
        height="24"
      >
        <Rect x="8" y="6" width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_21363_36442)">
        <Path
          d="M12.4 25.425C12.0667 25.5583 11.75 25.5291 11.45 25.3375C11.15 25.1458 11 24.8666 11 24.5V20L19 18L11 16V11.5C11 11.1333 11.15 10.8541 11.45 10.6625C11.75 10.4708 12.0667 10.4416 12.4 10.575L27.8 17.075C28.2167 17.2583 28.425 17.5666 28.425 18C28.425 18.4333 28.2167 18.7416 27.8 18.925L12.4 25.425Z"
          fill="white"
        />
      </G>
    </Svg>
  );
}
