import { Text, View } from "react-native";
import DefaultView from "../../customComponents/DefaultView";
import { useEffect } from "react";

const MainPage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return <DefaultView></DefaultView>;
};

export default MainPage;
