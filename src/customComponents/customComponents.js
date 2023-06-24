import { Text, View } from "react-native";
import { styled } from "styled-components";
import Colors from "../Colors";

export const BoldBigWords = styled(Text)`
  font-family: "Montserrat";
  font-size: 29px;
  font-weight: 400;
`;

export const BoldWords = styled(Text)`
  font-family: "MontserratBold";
  font-size: 29px;
  color: ${Colors.componentColors.whiteWords};
`;

export const Words = styled(Text)`
  font-family: "Montserrat";
  font-size: 13px;
  color: ${Colors.componentColors.whiteWords};
`;
