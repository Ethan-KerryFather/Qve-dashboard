import { Image, Text, View, Animated } from "react-native";
import DefaultView from "../../customComponents/DefaultView";
import { useEffect, useRef } from "react";
import {
  BoldWords,
  EView,
  Footer,
  InvestBtn,
  ColumnBox,
  WordBox,
  BoldGrayWords,
  RowBox,
} from "../../customComponents/customComponents";
import { styled } from "styled-components";
import Colors from "../../Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useAtom } from "jotai";
import { stakes } from "../../jotai/root";

const StakeItem = styled(Animated.View)`
  background-color: ${Colors.componentColors.graySubView};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  align-self: center;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: ${RFPercentage(3)};
`;

const StakeItemInfo = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: ${RFPercentage(2)};
`;
const ImageWrapper = styled(View)`
  width: 20%;
  justify-content: center;
  align-items: center;
`;
const StakeItemImage = styled(Image)``;

const StakePage = ({ navigation }) => {
  const FloatedAnim = useRef(new Animated.Value(0)).current;

  const FloatDown = () => {
    Animated.spring(FloatedAnim, {
      toValue: 1, // 어떤 값으로 변경할지 - 필수
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 기본값 false
      speed: 1, // 스프링의 속도 - 기본값 12
      bounciness: 12, // 스프링의 바운스 정도 - 기본값 8
    }).start(() => {});
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    FloatDown();
  }, []);

  const stakeInfo = useAtom(stakes);

  return (
    <DefaultView>
      <BoldGrayWords
        style={{
          fontSize: RFValue(20),
          marginLeft: "5%",
          marginBottom: RFPercentage(2),
          color: "gray",
        }}
      >
        Stake
      </BoldGrayWords>
      {stakeInfo[0].map((element) => {
        return (
          <StakeItem
            style={{
              alignItems: "center",
              transform: [
                {
                  translateY: FloatedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                  }),
                },
              ],
            }}
          >
            <StakeItemInfo style={{ width: "100%" }}>
              <ImageWrapper style={{ flex: 3 }}>
                <StakeItemImage
                  source={element.tokenImage}
                  resizeMode="contain"
                  style={{ flex: 1, width: 54, height: 57 }}
                />
              </ImageWrapper>

              <ColumnBox style={{ flex: 4 }}>
                <BoldWords
                  style={{
                    fontSize: RFValue(16),
                    paddingBottom: 5,
                    letterSpacing: 0.5,
                  }}
                >
                  {element.name}
                </BoldWords>
                <BoldGrayWords style={{ fontSize: RFValue(11) }}>
                  {element.detail}
                </BoldGrayWords>
              </ColumnBox>
              <ColumnBox style={{ flex: 4 }}>
                <RowBox>
                  <BoldGrayWords style={{ fontSize: 12 }}>
                    APY{"   "}
                  </BoldGrayWords>
                  <BoldWords style={{ fontSize: 14 }}>{element.apy}%</BoldWords>
                </RowBox>
                <RowBox>
                  <BoldGrayWords style={{ fontSize: 12 }}>
                    TVL{"   "}
                  </BoldGrayWords>
                  <BoldWords style={{ fontSize: 14 }}>
                    ${element.apy}M
                  </BoldWords>
                </RowBox>
              </ColumnBox>
            </StakeItemInfo>
            <InvestBtn style={{ width: "90%", borderRadius: 5 }}>
              <BoldWords style={{ fontSize: 15, letterSpacing: 2 }}>
                Stake
              </BoldWords>
            </InvestBtn>
          </StakeItem>
        );
      })}
    </DefaultView>
  );
};

export default StakePage;
