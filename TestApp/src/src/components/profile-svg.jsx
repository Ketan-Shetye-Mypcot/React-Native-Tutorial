import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const Profile = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Linear / Users / User Circle">
      <Circle
        id="Vector"
        cx={12}
        cy={9}
        r={3}
        stroke="#272727"
        strokeWidth={1.5}
      />
      <Circle
        id="Vector_2"
        cx={12}
        cy={12}
        r={10}
        stroke="#272727"
        strokeWidth={1.5}
      />
      <Path
        id="Vector_3"
        d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
        stroke="#272727"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </G>
  </Svg>
);
export default Profile;