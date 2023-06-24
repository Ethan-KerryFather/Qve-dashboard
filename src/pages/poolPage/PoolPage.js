import { Text, View } from "react-native";
import DefaultView from "../../customComponents/DefaultView";
import { useEffect } from "react";
const PoolPage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return <DefaultView></DefaultView>;
};

export default PoolPage;
