import {
    Contract,
    ethers,
} from "ethers";
import {
  Seaport
} from "@opensea/seaport-js";
import { SeaportABIvSME } from "./abi/Seaport_vSME_dual";
import type {
  Seaport as SMESeaport, OrderProbilityStruct
} from "./typechain-types-dual/contracts/Seaport";
import { MatchOrdersFulfillment} from "@opensea/seaport-js/lib/types";
const fs = require("fs");
// Provider must be provided to the signer when supplying a custom signer
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.public.blastapi.io"
);
const smeSeaportAddress = "0xDe215cECCb5707Cad33a9500Cede0C585A42FDA2"
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
  const modeOrderFulfillments: MatchOrdersFulfillment[] = [];
  modeOrderFulfillments.push({
    offerComponents: [
      {
        orderIndex: 0,
        itemIndex: 0,
      },
    ],
    considerationComponents: [
      {
        orderIndex: 1,
        itemIndex: 0,
      },
    ],
  });
  modeOrderFulfillments.push({
    offerComponents: [
      {
        orderIndex: 1,
        itemIndex: 0,
      },
    ],
    considerationComponents: [
      {
        orderIndex: 0,
        itemIndex: 0,
      },
    ],
  });
  // modeOrderFulfillments.push({
  //   offerComponents: [
  //     {
  //       orderIndex: 2,
  //       itemIndex: 0,
  //     },
  //   ],
  //   considerationComponents: [
  //     {
  //       orderIndex: 0,
  //       itemIndex: 1,
  //     },
  //   ],
  // });
  // modeOrderFulfillments.push({
  //   offerComponents: [
  //     {
  //       orderIndex: 2,
  //       itemIndex: 0,
  //     },
  //   ],
  //   considerationComponents: [
  //     {
  //       orderIndex: 0,
  //       itemIndex: 2,
  //     },
  //   ],
  // });
  // modeOrderFulfillments.push({
  //   offerComponents: [
  //     {
  //       orderIndex: 1,
  //       itemIndex: 0,
  //     },
  //   ],
  //   considerationComponents: [
  //     {
  //       orderIndex: 2,
  //       itemIndex: 0,
  //     },
  //   ],
  // });
  // modeOrderFulfillments.push({
  //   offerComponents: [
  //     {
  //       orderIndex: 2,
  //       itemIndex: 0,
  //     },
  //   ],
  //   considerationComponents: [
  //     {
  //       orderIndex: 1,
  //       itemIndex: 0,
  //     },
  //   ],
  // });
  // modeOrderFulfillments.push({
  //   offerComponents: [
  //     {
  //       orderIndex: 2,
  //       itemIndex: 0,
  //     },
  //   ],
  //   considerationComponents: [
  //     {
  //       orderIndex: 1,
  //       itemIndex: 1,
  //     },
  //   ],
  // });
  // modeOrderFulfillments.push({
  //   offerComponents: [
  //     {
  //       orderIndex: 2,
  //       itemIndex: 0,
  //     },
  //   ],
  //   considerationComponents: [
  //     {
  //       orderIndex: 1,
  //       itemIndex: 2,
  //     },
  //   ],
  // });
  console.log(modeOrderFulfillments);

  const orderProbility: OrderProbilityStruct[] = [];
  // const privateKey = process.env["MAKER"] as string;
  const privateKey = "127d5c48f0625b2e6af6b642d839eaf17dc65f1682513a810bf3beca7ba1e393";
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer,  {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});
  orderProbility.push({
    orderHash: seaport.getOrderHash(makerOrder.parameters),
    numerator: 0,
    denominator: 10
  })

  // orderProbility.push({
  //   orderHash: seaport.getOrderHash(makerOrder2.parameters),
  //   numerator: 1,
  //   denominator: 2
  // })

  orderProbility.push({
    orderHash: seaport.getOrderHash(takerOrder.parameters),
    numerator: 0,
    denominator: 10
  })

  const smeContract = new Contract(
      smeSeaportAddress,
      SeaportABIvSME,
      Signer,
  ) as SMESeaport;
  smeContract.matchOrdersWithRandom([makerOrder,takerOrder],modeOrderFulfillments,"27675193603757099361522656863015038424208180310496985715281712913021214111352",orderProbility, {gasLimit: 1500000})
   .then(console.log);
}

main();