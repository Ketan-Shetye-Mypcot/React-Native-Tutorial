import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const RightArrow = (props) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Linear / Arrows / Arrow Right" opacity={props.opacity}>
      <Path
        id="Vector"
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke="#EBA500"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default RightArrow;
