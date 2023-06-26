import { atom } from "jotai";

export const fundEntireInfo = atom({
  totalValue: 123456,
  returns: 123456,
  investors: 123456,
});

export const strategies = atom({
  arbitrage: {
    apr: 12.3,
  },
  btcHedge: {
    apr: 12.3,
  },
  fundingRate: {
    apr: 12.3,
  },
});

export const virtualWallet = atom({
  QVE: {
    amount: 100000,
  },
  mQVE: {
    amount: 100000,
  },
});

export const stakes = atom([
  {
    name: "QVE",
    tokenImage: require("../../assets/img/arbQve.png"),
    detail: "Staking Pool",
    apy: 12.3,
    tvl: 12.3,
  },
  {
    name: "mQVE",
    tokenImage: require("../../assets/img/Qve.png"),
    detail: "Staking Pool",
    apy: 12.3,
    tvl: 12.3,
  },
  {
    name: "Invin",
    tokenImage: require("../../assets/img/arbQve.png"),
    detail: "Staking Pool",
    apy: 12.3,
    tvl: 12.3,
  },
  {
    name: "Aptos",
    tokenImage: require("../../assets/img/Qve.png"),
    detail: "Staking Pool",
    apy: 12.3,
    tvl: 12.3,
  },
  {
    name: "Sui",
    tokenImage: require("../../assets/img/arbQve.png"),
    detail: "Staking Pool",
    apy: 12.3,
    tvl: 12.3,
  },
  {
    name: "BFC",
    tokenImage: require("../../assets/img/Qve.png"),
    detail: "Staking Pool",
    apy: 12.3,
    tvl: 12.3,
  },
]);
