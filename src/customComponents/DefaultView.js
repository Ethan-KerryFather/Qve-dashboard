import { Image, ScrollView, StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../Colors";
import { styled } from "styled-components";
import { Words } from "./customComponents";

const Header = styled(View)`
  height: ${RFPercentage(14)};
  background-color: ${Colors.componentColors.graySubView};
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 2%;
  padding-bottom: 2%;
`;

const Footer = styled(View)`
  margin-top: ${RFPercentage(7)};
  height: ${RFPercentage(10)};
  background-color: ${Colors.componentColors.graySubView};
  align-items: center;
  justify-content: center;
`;

const EntireContainer = styled(ScrollView)`
  background-color: ${Colors.componentColors.background};
  flex: 1;
`;

const MainContainer = styled(View)`
  padding-top: ${RFPercentage(5)};
`;

function DefaultView({ children }) {
  return (
    <EntireContainer>
      <Header>
        <Image source={require("../../assets/img/logo.png")} />
      </Header>
      <MainContainer>{children}</MainContainer>
      {/* <Footer>
        <View>
          <Words>Blockwave Labs | contact@blockwavelabs.io</Words>
          <Words>Blockwave Labs Inc. All rights reserved</Words>
        </View>
      </Footer> */}
    </EntireContainer>
  );
}

export default DefaultView;
