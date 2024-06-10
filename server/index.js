const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const { createProxyMiddleware } = require("http-proxy-middleware");

const port = 4000;

app.use(cors());
app.use(express.json());

app.use( "/swap",
createProxyMiddleware({
  target: "https://api.1inch.dev",
  changeOrigin: true,
  onProxyReq: (proxyReq) => {
    // add API key in Header
    proxyReq.setHeader(
      "Authorization",
      `Bearer AKXEOURlo62F10yt0xr8t58xepXSB4k6`
      );
    },
  })
 );

app.get("/tokenPrice", async (req, res) => {

  const {query} = req;

  const responseOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne
  })

  const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo
  })

  const usdPrices = {
    tokenOne: responseOne.raw.usdPrice,
    tokenTwo: responseTwo.raw.usdPrice,
    ratio: responseOne.raw.usdPrice/responseTwo.raw.usdPrice
  }
  

  return res.status(200).json(usdPrices);
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
