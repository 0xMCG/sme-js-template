import {
    Contract,
    ethers,
} from "ethers";
import {
  Seaport
} from "@opensea/seaport-js";
import { SeaportABIvSME } from "./abi/Seaport_vSME";
import type {
  Seaport as SMESeaport, OrderProbilityStruct
} from "./seaport-types/contracts/Seaport";
import { MatchOrdersFulfillment} from "@opensea/seaport-js/lib/types";
const fs = require("fs");
// Provider must be provided to the signer when supplying a custom signer
const provider = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8545"
);
const smeSeaportAddress = "0x669a78Fa846b19c188E0Babf01EAE2f915E6936c"
const testERC20Address = "0x8D4E2c8bc6b1E4Fa0ED829E6786E9096dd6DC265"
const testERC721Address = "0xE4E39D40d1b9c70dcd115FEA8DaEF242194f2cC7"
const nftId = "53"

export const CONDUIT_KEYS_TO_CONDUIT = {
  "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00": "0x0681bc8f138ca32ed7725b91e8d11cfb6e10eb5f",
};

function sleep(ms: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const main = async () => {
  const takerOrder = JSON.parse(fs.readFileSync("/Users/qiufan/bova/takerOrder.json"));
  const makerOrder = JSON.parse(fs.readFileSync("/Users/qiufan/bova/makerOrder.json"));
  const makerOrder2 = JSON.parse(fs.readFileSync("/Users/qiufan/bova/makerOrder2.json"));

  const orderProbility: OrderProbilityStruct[] = [];
  const privateKey = process.env["MAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer,  {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});
  orderProbility.push({
    orderHash: seaport.getOrderHash(makerOrder.parameters),
    numerator: 1,
    denominator: 5
  })

  const smeContract = new Contract(
      smeSeaportAddress,
      SeaportABIvSME,
      Signer,
  ) as SMESeaport;
  smeContract.prepare([makerOrder, takerOrder], [], [], 1, {gasLimit: 5000000}).then(console.log);
}

main();