import { Image, ScrollView, StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../Colors";
import { styled } from "styled-components";
import { Words } from "./customComponents";
import { GlitchImage } from "rn-glitch-effect";

/*
컴포넌트 기본틀 
헤더 - 내용물 - 푸터

*/

const Header = styled(View)`
  height: ${RFPercentage(14)};
  background-color: ${Colors.componentColors.graySubView};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 7%;
  padding-left: 4%;
  /* padding-left: 2%;
  padding-bottom: 2%; */
  overflow: hidden;
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
  min-height: ${RFPercentage(100)};
`;

function DefaultView({ children }) {
  return (
    <EntireContainer>
      <Header>
        <GlitchImage
          shadowColor="gray"
          source={require("../../assets/img/logo.png")}
          imageStyle={{
            width: 124,
            alignSelf: "center",
            height: RFPercentage(8),
          }}
          mainColor={Colors.componentColors.graySubView}
          repeatDelay={2000}
        />
        {/* <Image source={require("../../assets/img/logo.png")} /> */}
      </Header>
      <MainContainer>{children}</MainContainer>
      <Footer>
        <View>
          <Words>Blockwave Labs | contact@blockwavelabs.io</Words>
          <Words>Blockwave Labs Inc. All rights reserved</Words>
        </View>
      </Footer>
    </EntireContainer>
  );
}

export default DefaultView;
