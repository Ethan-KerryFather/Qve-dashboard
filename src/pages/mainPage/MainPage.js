import {
  Button,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import DefaultView from "../../customComponents/DefaultView";
import React, { useState, useEffect } from "react";
import {
  BoldWords,
  ColumnBox,
  SubBox,
  Words,
} from "../../customComponents/customComponents";
import axios from "axios";
import * as cheerio from "cheerio";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LineChart } from "react-native-chart-kit";

const MainPage = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const [data, setData] = useState({
    date: "",
    netDeposit: "",
    currentBalance: "",
    yield: "",
    dayProfit: "",
    dayReturn: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://es7q09d3g5.execute-api.ap-northeast-1.amazonaws.com/default/getApolloxBalance"
      );
      const htmlData = response.data;
      const $ = cheerio.load(htmlData);

      const parseData = $("p").text().split("\n");

      const dateRegex =
        /(\d{4}\/\d{1,2}\/\d{1,2} \d{1,2}:\d{1,2}:\d{1,2} [APM]{2})/;
      const profitRegex = /24hr Profit: (\d+\.\d+) USDT/;
      const returnRegex = /24hr Return: (-?\d+\.\d+)%/;
      const depositRegex = /Net Deposit: ([\d,]+\.\d{2}) USDT/;
      const balanceRegex = /Current Balance: ([\d,]+\.\d{2}) USDT/;
      const yieldRegex = /Total Return: (-?\d+\.\d+)%/;

      const dateMatch = dateRegex.exec(parseData[1]);
      const profitMatch = profitRegex.exec(parseData[2]);
      const returnMatch = returnRegex.exec(parseData[3]);
      const depositMatch = depositRegex.exec(parseData[4]);
      const balanceMatch = balanceRegex.exec(parseData[5]);
      const yieldMatch = yieldRegex.exec(parseData[6]);

      const parsedValues = {
        date: dateMatch ? dateMatch[1] : null,
        dayProfit: profitMatch ? profitMatch[1] : null,
        dayReturn: returnMatch ? returnMatch[1] : null,
        netDeposit: depositMatch ? depositMatch[1] : null, // 문자열로 반환
        currentBalance: balanceMatch ? balanceMatch[1] : null, // 문자열로 반환
        yield: yieldMatch ? yieldMatch[1] : null,
      };

      console.log(parsedValues);

      setData({
        date: parsedValues.date,
        dayProfit: parsedValues.dayProfit,
        dayReturn: parsedValues.dayReturn,
        netDeposit: parsedValues.netDeposit,
        currentBalance: parsedValues.currentBalance,
        yield: parsedValues.yield,
      });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    fetchData();
  }, []);

  const datas = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  if (error)
    return (
      <DefaultView>
        <BoldWords>Error : {error.message}</BoldWords>
      </DefaultView>
    );
  if (loading) {
    return (
      <DefaultView>
        <BoldWords>Loading</BoldWords>
      </DefaultView>
    );
  } else {
    return (
      <DefaultView style={{ position: "relative" }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            padding: 10,
            backgroundColor: "gray",
            opacity: 0.9,
            borderRadius: 10,
          }}
          onPress={fetchData}
        >
          <Text style={{ color: "white" }}>Refresh</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "5%",
            width: width * 0.95,
            alignSelf: "center",
          }}
        >
          <ColumnBox>
            <BoldWords>{data.date}</BoldWords>
          </ColumnBox>

          <SubBox
            style={{
              minWidth: "98%",
              alignItems: "flex-start",
              marginTop: RFPercentage(2),
            }}
          >
            <BoldWords>24hr Profit</BoldWords>
            <Words
              center
              style={{
                fontSize: RFPercentage(3),
                marginBottom: "3%",
              }}
            >
              {data.dayProfit} USDT
            </Words>
          </SubBox>
          <SubBox
            style={{
              minWidth: "98%",
              alignItems: "flex-start",
              marginTop: RFPercentage(2),
            }}
          >
            <BoldWords>24hr Return</BoldWords>
            <Words
              center
              style={{ fontSize: RFPercentage(3), marginBottom: "3%" }}
            >
              {data.dayReturn} %
            </Words>
          </SubBox>

          <SubBox
            style={{
              minWidth: "98%",
              alignItems: "flex-start",
              marginTop: RFPercentage(2),
            }}
          >
            <BoldWords>Net Deposit</BoldWords>
            <Words
              center
              style={{ fontSize: RFPercentage(3), marginBottom: "3%" }}
            >
              {data.netDeposit} USDT
            </Words>
          </SubBox>

          <SubBox
            style={{
              minWidth: "98%",
              alignItems: "flex-start",
              marginTop: RFPercentage(2),
            }}
          >
            <BoldWords>Current Balance</BoldWords>
            <Words
              center
              style={{ fontSize: RFPercentage(3), marginBottom: "3%" }}
            >
              {data.currentBalance} USDT
            </Words>
          </SubBox>

          <SubBox
            style={{
              minWidth: "98%",
              alignItems: "flex-start",
              marginTop: RFPercentage(2),
            }}
          >
            <BoldWords>Total Return</BoldWords>
            <Words center style={{ fontSize: RFPercentage(3) }}>
              {data.yield}%
            </Words>
          </SubBox>
        </View>
      </DefaultView>
    );
  }
};

export default MainPage;
