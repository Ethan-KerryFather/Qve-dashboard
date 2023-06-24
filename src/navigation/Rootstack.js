import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingPage from "../pages/landingPage/LandingPage";
import MainPage from "../pages/mainPage/MainPage";
import PoolPage from "../pages/poolPage/PoolPage";
import StakePage from "../pages/stakePage/StakePage";
import SwapPage from "../pages/swapPage/SwapPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Colors from "../Colors";

const Tab = createBottomTabNavigator();

const LandingStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const PoolStack = createNativeStackNavigator();
const StakeStack = createNativeStackNavigator();
const SwapStack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.componentColors.purpleBtn,
        tabBarInactiveBackgroundColor: Colors.componentColors.background,
        tabBarActiveTintColor: Colors.componentColors.graySubView,
        tabBarStyle: { height: 50, justifyContent: "center" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={LandingScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/img/Qve.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/img/Qve.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pool"
        component={PoolScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/img/Qve.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stake"
        component={StakeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/img/Qve.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/img/Qve.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function LandingScreen() {
  return (
    <LandingStack.Navigator>
      <LandingStack.Screen name="LandingPage" component={LandingPage} />
    </LandingStack.Navigator>
  );
}
function MainScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainPage" component={MainPage} />
    </MainStack.Navigator>
  );
}
function PoolScreen() {
  return (
    <PoolStack.Navigator>
      <PoolStack.Screen name="PoolPage" component={PoolPage} />
    </PoolStack.Navigator>
  );
}
function StakeScreen() {
  return (
    <StakeStack.Navigator>
      <StakeStack.Screen name="StakePage" component={StakePage} />
    </StakeStack.Navigator>
  );
}
function SwapScreen() {
  return (
    <SwapStack.Navigator>
      <SwapStack.Screen name="StakePage" component={StakePage} />
    </SwapStack.Navigator>
  );
}

export default RootStack;
