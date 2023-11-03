import * as React from "react";

import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const CouponsDesignBorder = (props) => (
  <Svg
    width={79}
    height={170}
    viewBox="0 0 79 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      id="Subtract"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H79V170H0V156.09L6.36344 146.819H6.36448L6.36408 146.818L0.000204563 137.546L0 137.546V131.362L6.36344 122.091H6.36448L6.36396 122.09L6.36408 122.09H6.36385L0.000204563 112.818L0 112.819V106.636L6.36408 97.3634L0 97.3633H6.36448L0.000204563 88.0906L0 88.0909V81.9091L6.36408 72.6367L0 72.6366H6.36448L0.000204563 63.3639L0 63.3642V57.1815L6.36344 47.91H6.36448L6.36396 47.9092L6.36408 47.909H6.36385L0.000204563 38.6372L0 38.6375V32.4538L6.36344 23.1823H6.36448L6.36396 23.1816L6.36408 23.1814H6.36385L0.000204563 13.9096L0 13.9099V0Z"
      fill="url(#paint0_linear_807_13380)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_807_13380"
        x1={79}
        y1={0}
        x2={-49.1443}
        y2={115.454}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00A442" />
        <Stop offset={1} stopColor="#00D6BC" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CouponsDesignBorder;
