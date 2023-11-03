import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const LeftArrow = (props) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Linear / Arrows / Arrow Left" opacity={props.opacity}>
      <Path
        id="Vector"
        d="M20 12H4M4 12L10 6M4 12L10 18"
        stroke="#EBA500"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default LeftArrow;
