import {
    Contract,
    ethers,
} from "ethers";
import {
    Seaport
} from "@opensea/seaport-js";
import { SeaportABIvSME } from "./abi/Seaport_vSME_dual";
import type {
  Seaport as SMESeaport,
} from "./typechain-types-dual/contracts/Seaport";
import type {
  LocalConduitController
} from "./typechain-types-dual/contracts/conduit/ConduitController.sol";
import {ConduitMangerABI} from "./abi/Seaport_ConduitManager";
import { MatchOrdersFulfillment } from "@opensea/seaport-js/lib/types";
const fs = require("fs");
// Provider must be provided to the signer when supplying a custom signer
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.public.blastapi.io"
);
const smeSeaportAddress = "0xC6254AB94dA896e758fE5aB82d22fA137a358ae9"
const testERC20Address = "0x8D4E2c8bc6b1E4Fa0ED829E6786E9096dd6DC265"
const testERC20Address2 = "0x6c877a0f432feaab6052d8cc4ae2cf3d686d589f"
const testERC721Address = "0xE4E39D40d1b9c70dcd115FEA8DaEF242194f2cC7"
const conduitController = "0x7b4dAf65974871cb1F9eec4Fd933E27a365dDA72"
const conduitAddress = "0x0681Bc8F138CA32ED7725B91E8D11CfB6e10eb5f"
const nftId = "54"

export const CONDUIT_KEYS_TO_CONDUIT = {
  "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00": "0x0681bc8f138ca32ed7725b91e8d11cfb6e10eb5f",
};

function sleep(ms: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const main = async () => {
    const [takerOrder, makerOrder, makerOrder2] = await build_bid_scenario();
    fs.writeFileSync("/Users/qiufan/bova/takerOrder.json", JSON.stringify(takerOrder));
    fs.writeFileSync("/Users/qiufan/bova/makerOrder.json", JSON.stringify(makerOrder));
    fs.writeFileSync("/Users/qiufan/bova/makerOrder2.json", JSON.stringify(makerOrder2));
    const premiumOrder = await build_premium_order();
    const privateKey = process.env["MAKER"] as string;
    const Signer = new ethers.Wallet(privateKey, provider);
    // const conduitManagerContract = new Contract(
    //   conduitController,
    //   ConduitMangerABI,
    //   Signer,
    // ) as LocalConduitController;
    
    // conduitManagerContract.updateChannel(conduitAddress, smeSeaportAddress, true).then(console.log);

    const smeContract = new Contract(
        smeSeaportAddress,
        SeaportABIvSME,
        Signer,
    ) as SMESeaport;
    smeContract.prepare([makerOrder, makerOrder2, takerOrder], [], [], 2, {gasLimit: 1000000})
     .then(console.log);
}

async function build_ask_scenario() {
  const takerOrder = await build_taker_order();
  const makerOrder = await build_maker_order();
  const makerOrder2 = await build_maker_order2();
  return [takerOrder, makerOrder, makerOrder2];
}

async function build_bid_scenario() {
  const takerOrder = await build_taker_order_for_bid();
  const makerOrder = await build_maker_order_for_bid();
  const makerOrder2 = await build_maker_order2_for_bid();
  return [takerOrder, makerOrder, makerOrder2];
}

async function build_taker_order() {
  const privateKey = process.env["TAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer,  {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});

  const offerer = "0x53B3F192A56a9cdA260476974443634a96529c72";
  const { executeAllActions } = await seaport.createOrder(
      {
          zone: "0x0000000000000000000000000000000000000000",
          conduitKey: "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00",
          startTime: Math.floor(new Date().getTime() / 1000 - 60 * 60).toString(),
          endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
          consideration: [
              {
                amount: ethers.utils.parseEther("0.15").toString(),
                token: testERC20Address2,
                endAmount: ethers.utils.parseEther("0.15").toString(),
              },
          ],
          offer: [
              {
                  amount: ethers.utils.parseEther("0.001").toString(),
                  token: testERC20Address,
                  endAmount: ethers.utils.parseEther("0.001").toString(),
              },
          ]
      },
      offerer
  );

  const order = await executeAllActions();
  return order;
}

async function build_maker_order() {
  const privateKey = process.env["MAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer, {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});
  const offerer = "0x28c73A60ccF8c66c14EbA8935984e616Df2926e3";
  const { executeAllActions } = await seaport.createOrder(
      {
          zone: "0x0000000000000000000000000000000000000000",
          conduitKey: "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00",
          startTime: Math.floor(new Date().getTime() / 1000 - 60 * 60).toString(),
          endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
          offer: [
              {
                  amount: ethers.utils.parseEther("0.1").toString(),
                  token: testERC20Address2,
                  endAmount: ethers.utils.parseEther("0.1").toString(),
              },
          ],
          consideration: [
            {
              amount: ethers.utils.parseEther("0.00002").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00004").toString(),
              recipient: offerer
            },
            {
              amount: ethers.utils.parseEther("0.00001").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00003").toString(),
              recipient: "0xfcfC835903314e6a29751f6D57c08e8D01Cd246b"
            },
            {
              amount: ethers.utils.parseEther("0.00001").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00003").toString(),
              recipient: "0xfcfC835903314e6a29751f6D57c08e8D01Cd246b"
            }
          ]
      },
      offerer
  );

  const order = await executeAllActions();
  return order;
}

async function build_maker_order2() {
  const privateKey = process.env["MAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer, {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});
  const offerer = "0x28c73A60ccF8c66c14EbA8935984e616Df2926e3";
  const { executeAllActions } = await seaport.createOrder(
      {
          zone: "0x0000000000000000000000000000000000000000",
          conduitKey: "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00",
          startTime: Math.floor(new Date().getTime() / 1000 - 60 * 60).toString(),
          endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
          offer: [
              {
                  amount: ethers.utils.parseEther("0.05").toString(),
                  token: testERC20Address2,
                  endAmount: ethers.utils.parseEther("0.05").toString(),
              },
          ],
          consideration: [
            {
              amount: ethers.utils.parseEther("0.00002").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00004").toString(),
              recipient: offerer
            },
            {
              amount: ethers.utils.parseEther("0.00001").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00003").toString(),
              recipient: "0xfcfC835903314e6a29751f6D57c08e8D01Cd246b"
            },
            {
              amount: ethers.utils.parseEther("0.00001").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00003").toString(),
              recipient: "0xfcfC835903314e6a29751f6D57c08e8D01Cd246b"
            }
          ]
      },
      offerer
  );

  const order = await executeAllActions();
  return order;
}

async function build_premium_order() {
  const privateKey = process.env["TAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer,  {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});

  const offerer = "0x53B3F192A56a9cdA260476974443634a96529c72";
  const { executeAllActions } = await seaport.createOrder(
      {
          zone: "0x0000000000000000000000000000000000000000",
          conduitKey: "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00",
          startTime: Math.floor(new Date().getTime() / 1000 - 60 * 60).toString(),
          endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
          consideration: [],
          offer: [
              {
                  amount: ethers.utils.parseEther("0.00004").toString(),
                  token: testERC20Address,
                  endAmount: ethers.utils.parseEther("0.00004").toString(),
              },
          ]
      },
      offerer
  );

  const order = await executeAllActions();
  return order;
}

async function build_maker_order_for_bid() {
  const privateKey = process.env["MAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer, {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});
  const offerer = "0x28c73A60ccF8c66c14EbA8935984e616Df2926e3";
  const { executeAllActions } = await seaport.createOrder(
      {
          zone: "0x0000000000000000000000000000000000000000",
          conduitKey: "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00",
          startTime: Math.floor(new Date().getTime() / 1000 - 60 * 60).toString(),
          endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
          offer: [
              {
                  amount: ethers.utils.parseEther("0.002").toString(),
                  token: testERC20Address2,
                  endAmount: ethers.utils.parseEther("0.004").toString(),
              },
          ],
          consideration: [
            {
              amount: ethers.utils.parseEther("0.00002").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00002").toString(),
              recipient: offerer
            }
          ]
      },
      offerer
  );

  const order = await executeAllActions();
  return order;
}


async function build_maker_order2_for_bid() {
  const privateKey = process.env["MAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer, {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});
  const offerer = "0x28c73A60ccF8c66c14EbA8935984e616Df2926e3";
  const { executeAllActions } = await seaport.createOrder(
      {
          zone: "0x0000000000000000000000000000000000000000",
          conduitKey: "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00",
          startTime: Math.floor(new Date().getTime() / 1000 - 60 * 60).toString(),
          endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
          offer: [
              {
                  amount: ethers.utils.parseEther("0.02").toString(),
                  token: testERC20Address2,
                  endAmount: ethers.utils.parseEther("0.05").toString(),
              },
          ],
          consideration: [
            {
              amount: ethers.utils.parseEther("0.00001").toString(),
              token: testERC20Address,
              endAmount: ethers.utils.parseEther("0.00001").toString(),
              recipient: offerer
            }
          ]
      },
      offerer
  );

  const order = await executeAllActions();
  return order;
}

async function build_taker_order_for_bid() {
  const privateKey = process.env["TAKER"] as string;
  const Signer = new ethers.Wallet(privateKey, provider);

  const seaport = new Seaport(Signer,  {overrides: {contractAddress: smeSeaportAddress}, conduitKeyToConduit: CONDUIT_KEYS_TO_CONDUIT});

  const offerer = "0x53B3F192A56a9cdA260476974443634a96529c72";
  const { executeAllActions } = await seaport.createOrder(
      {
          zone: "0x0000000000000000000000000000000000000000",
          conduitKey: "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00",
          startTime: Math.floor(new Date().getTime() / 1000 - 60 * 60).toString(),
          endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
          consideration: [
              {
                amount: ethers.utils.parseEther("0.022").toString(),
                token: testERC20Address2,
                endAmount: ethers.utils.parseEther("0.054").toString(),
              },
          ],
          offer: [
              {
                  amount: ethers.utils.parseEther("0.000020").toString(),
                  token: testERC20Address,
                  endAmount: ethers.utils.parseEther("0.000020").toString(),
              },
          ]
      },
      offerer
  );

  const order = await executeAllActions();
  return order;
}

main();