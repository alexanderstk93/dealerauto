import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carPreviews: [
    {
      id: 0,
      model: "BMW M4 Competition",
      km: "43.232",
      price: "56.999",
      year: "2019",
      img: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C3132/U460/IMG_11728-large.jpg",
    },
    {
      id: 1,
      model: "BMW 420D Gran Coupe",
      km: "161.024",
      price: "24.199",
      year: "2016",
      img: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNhbTgxejc5bnlnbzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.o1SX83sfWgvTDAwIHvEqZ_lFDCIkHfXlH7B8D-__cno/image;s=1080x720",
    },
    {
      id: 2,
      model: "Mercedes-Benz G 400 D SW Long",
      km: "2.132",
      price: "183.499",
      year: "2021",
      img: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InR5NTRsMG41OWg4Ni1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.NWa3cxQxu03qc29kHPwjxj10EkJ9BysRVIahAWkmBM8/image;s=1080x720",
    },
    {
      id: 3,
      model: "Bentley Continental GTC Speed",
      km: "43.232",
      price: "67.500",
      year: "2009",
      img: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InM0ZHNucjNvYWZubTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.nR4wbIsGaJBmt2Xobqs6XIijrqvYB0hEygwyMnH_SV0/image;s=1080x720",
    },
    {
      id: 4,
      model: "Ford Mustang",
      km: "57.000",
      price: "120.000",
      year: "1969",
      img: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijd4ZGJrd2pnYm0wNS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.faJ1F5Xb1RKgfli4YoyBEuXJeX1ZY-MOCKR8SE5xiEU/image;s=1080x720",
    },
    {
      id: 5,
      model: "Mercedes-Benz C AMG 63 Coupe S AMG",
      km: "54.500",
      price: "63.070",
      year: "2016",
      img: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imh2ZWt6ajR0YWFxODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.otRQcJye4kF0Ae6XyPgIwVhQscLTCYXv0v6Oq5cu3bI/image;s=1080x720",
    },
    {
      id: 6,
      model: "Skoda Superb 1.6 TDI DSG",
      km: "153825",
      price: "14.637",
      year: "2017",
      img: "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImU1djczcDJydGd6bC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.ZgSK2hUmeOsC67zWvmCnuJWeElpn3b-WnaPRVoYYBRI/image;s=1080x720",
    },
  ],
  wheelsPreviews: [
    {
      id: 1,
      producer: "Vossen",
      price: "1.900",
      img: require("../assets/images/wheels/vossen/vossen1.png"),
    },
    {
      id: 2,
      producer: "Vossen",
      price: "1.599",
      img: require("../assets/images/wheels/vossen/vossen2.png"),
    },
    {
      id: 3,
      producer: "Vossen",
      price: "1.799",
      img: require("../assets/images/wheels/vossen/vossen3.png"),
    },
    {
      id: 4,
      producer: "Kansei",
      price: "399",
      img: require("../assets/images/wheels/kansei/kansei1.png"),
    },
    {
      id: 5,
      producer: "Kansei",
      price: "349",
      img: require("../assets/images/wheels/kansei/kansei1.png"),
    },
  ],
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {},
});

export default previewSlice.reducer;
