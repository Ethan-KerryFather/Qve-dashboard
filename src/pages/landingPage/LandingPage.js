import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BoldWords, Words } from "../../customComponents/customComponents";
import { useEffect, useRef } from "react";
import DefaultView from "../../customComponents/DefaultView";
import { styled } from "styled-components";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../Colors";
import { useAtom } from "jotai";
import { fundEntireInfo } from "../../jotai/root";

const EView = styled(View)`
  flex-direction: column;
  align-items: center;
`;

const InvestBtn = styled(Pressable)`
  background-color: ${Colors.componentColors.purpleBtn};
  width: 45%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: ${RFPercentage(6.4)};
`;

const WordBox = styled(View)`
  align-items: center;
  margin-top: ${RFPercentage(4)};
`;

const SubBox = styled(View)`
  width: 30%;
  background-color: ${Colors.componentColors.graySubView};
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  border-width: 0.7px;
  border-color: gray;
`;

const CheckoutBox = styled(View)`
  width: 80%;
  height: ${RFPercentage(9)};
  padding: 10px;
  flex-direction: row;
  background-color: ${Colors.componentColors.graySubView};
  margin-bottom: 20;
  border-radius: 10px;
  padding: 10px;
`;

const LandingPage = ({ navigation }) => {
  const FloatedAnim = useRef(new Animated.Value(0)).current;

  const FloatDown = () => {
    Animated.spring(FloatedAnim, {
      toValue: 1, // 어떤 값으로 변경할지 - 필수
      useNativeDriver: true, // 네이티브 드라이버 사용 여부 - 기본값 false
      speed: 1, // 스프링의 속도 - 기본값 12
      bounciness: 12, // 스프링의 바운스 정도 - 기본값 8
    }).start(() => {});
  };

  const fundInfo = useAtom(fundEntireInfo);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    FloatDown();
  }, []);

  return (
    <DefaultView>
      <EView>
        <Animated.View
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
          <Words style={{ fontSize: 30 }}>Decentralized</Words>
          <BoldWords>Fund Liquidation</BoldWords>
          <BoldWords>Solution</BoldWords>
        </Animated.View>
        <View style={{ height: RFPercentage(30) }}>
          <Image
            source={require("../../../assets/img/LandingImg.png")}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        </View>
        <InvestBtn>
          <BoldWords style={{ fontSize: 15, letterSpacing: 1 }}>
            Invest Now
          </BoldWords>
        </InvestBtn>
        <Animated.View
          style={{
            marginTop: "10%",
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
          <BoldWords>Get Back</BoldWords>
          <BoldWords>Your share of fund</BoldWords>
        </Animated.View>

        <WordBox
          style={{
            flexDirection: "row",
            height: RFPercentage(12),
            marginBottom: RFPercentage(5),
          }}
        >
          <SubBox style={{ height: "100%" }}>
            <Words>Total</Words>
            <Words>Volume{"\n"}</Words>
            <BoldWords style={{ fontSize: 16 }}>
              ${fundInfo[0].totalValue.toLocaleString()}
            </BoldWords>
          </SubBox>
          <SubBox style={{ height: "100%", marginHorizontal: 10 }}>
            <Words>
              Returns{"\n"}
              {"\n"}
            </Words>
            <BoldWords style={{ fontSize: 16 }}>
              ${fundInfo[0].returns.toLocaleString()}
            </BoldWords>
          </SubBox>
          <SubBox style={{ height: "100%" }}>
            <Words>
              Investors{"\n"}
              {"\n"}
            </Words>
            <BoldWords style={{ fontSize: 16 }}>
              ${fundInfo[0].investors.toLocaleString()}
            </BoldWords>
          </SubBox>
        </WordBox>
        <WordBox style={{ width: "100%" }}>
          <Image
            source={require("../../../assets/img/ArrowDown.png")}
            style={{
              width: 30,
              height: 30,
              marginTop: "10%",
              marginBottom: "20%",
            }}
          />

          <BoldWords>Check Out</BoldWords>
          <BoldWords style={{ fontSize: 20 }}>
            Various Investment Strategies
          </BoldWords>
          <CheckoutBox style={{ marginTop: "10%" }}>
            <View style={{ justifyContent: "center", flex: 4 }}>
              <BoldWords style={{ fontSize: 17 }}>Arbitrage</BoldWords>
              <BoldWords style={{ fontSize: 12 }}>APR 12.3%</BoldWords>
            </View>
            <View
              style={{
                flex: 1.4,
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  width: "100%",
                  height: "70%",
                  backgroundColor: Colors.componentColors.purpleBtn,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <BoldWords style={{ fontSize: 12 }}>Invest</BoldWords>
              </Pressable>
            </View>
          </CheckoutBox>
          <CheckoutBox>
            <View style={{ justifyContent: "center", flex: 4 }}>
              <BoldWords style={{ fontSize: 17 }}>BTC Hedge</BoldWords>
              <BoldWords style={{ fontSize: 12 }}>APR 12.3%</BoldWords>
            </View>
            <View
              style={{
                flex: 1.4,
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  width: "100%",
                  height: "70%",
                  backgroundColor: Colors.componentColors.purpleBtn,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <BoldWords style={{ fontSize: 12 }}>Invest</BoldWords>
              </Pressable>
            </View>
          </CheckoutBox>
          <CheckoutBox>
            <View style={{ justifyContent: "center", flex: 4 }}>
              <BoldWords style={{ fontSize: 17 }}>Funding Rate</BoldWords>
              <BoldWords style={{ fontSize: 12 }}>APR 12.3%</BoldWords>
            </View>
            <View
              style={{
                flex: 1.4,
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  width: "100%",
                  height: "70%",
                  backgroundColor: Colors.componentColors.purpleBtn,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <BoldWords style={{ fontSize: 12 }}>Invest</BoldWords>
              </Pressable>
            </View>
          </CheckoutBox>
        </WordBox>
        <InvestBtn>
          <BoldWords style={{ fontSize: 15, letterSpacing: 1 }}>
            View Portfolio
          </BoldWords>
        </InvestBtn>
        <Image
          source={require("../../../assets/img/ArrowDown.png")}
          style={{
            width: 30,
            height: 30,
            marginTop: "20%",
            marginBottom: "10%",
          }}
        />

        <WordBox style={{ width: "90%" }}>
          <BoldWords>How Qve Work?</BoldWords>
          <Image
            source={require("../../../assets/img/HowQveWorks.png")}
            style={{ width: "90%" }}
            resizeMode="contain"
          />
          <InvestBtn>
            <BoldWords style={{ fontSize: 15, letterSpacing: 1 }}>
              Deposit Coins
            </BoldWords>
          </InvestBtn>
        </WordBox>

        <WordBox>
          <BoldWords>Community</BoldWords>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../../assets/img/Discord.png")}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../../assets/img/Twitter.png")}
              style={{ width: 60, height: 60, marginHorizontal: 30 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../../assets/img/Telegram.png")}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
          </View>
        </WordBox>
      </EView>
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LandingPage;
