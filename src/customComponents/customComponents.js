import { Text, View, Pressable } from "react-native";
import { styled } from "styled-components";
import Colors from "../Colors";
import { RFPercentage } from "react-native-responsive-fontsize";
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

export const BoldGrayWords = styled(Text)`
  font-family: "MontserratBold";
  color: ${Colors.componentColors.graygrayWords};
`;

export const Words = styled(Text)`
  font-family: "Montserrat";
  font-size: 13px;
  color: ${Colors.componentColors.whiteWords};
`;

export const EView = styled(View)`
  flex-direction: column;
  align-items: center;
`;
export const Footer = styled(View)`
  margin-top: ${RFPercentage(7)};
  height: ${RFPercentage(10)};
  background-color: ${Colors.componentColors.graySubView};
  align-items: center;
  justify-content: center;
`;

export const InvestBtn = styled(Pressable)`
  background-color: ${Colors.componentColors.purpleBtn};
  width: 45%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: ${RFPercentage(6.4)};
`;

export const WordBox = styled(View)`
  align-items: center;
  margin-top: ${RFPercentage(4)};
`;

export const SubBox = styled(View)`
  width: 30%;
  background-color: ${Colors.componentColors.graySubView};
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  border-width: 0.7px;
  border-color: gray;
`;

export const CheckoutBox = styled(View)`
  width: 80%;
  height: ${RFPercentage(9)};
  padding: 10px;
  flex-direction: row;
  background-color: ${Colors.componentColors.graySubView};
  margin-bottom: 20;
  border-radius: 10px;
  padding: 10px;
`;

export const ColumnBox = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const RowBox = styled(View)`
  flex-direction: row;
`;
