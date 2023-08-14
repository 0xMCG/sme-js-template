import {
    Contract,
    ethers,
} from "ethers";
import {
    Seaport
} from "@opensea/seaport-js";
import { SeaportABIvSME } from "./abi/Seaport_vSME";
import type {
    Seaport as SMESeaport,
} from "./typechain-types/contracts/Seaport";
import { MatchOrdersFulfillment } from "@opensea/seaport-js/lib/types";
// Provider must be provided to the signer when supplying a custom signer
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.public.blastapi.io"
);
const smeSeaportAddress = "0x45a7f5Ff630D31Eeb1e00dc24DF2f23DF1bA0A7C"
const testERC20Address = "0x8D4E2c8bc6b1E4Fa0ED829E6786E9096dd6DC265"
const testERC721Address = "0xE4E39D40d1b9c70dcd115FEA8DaEF242194f2cC7"
const nftId = "19"

const main = async () => {
    const makerOrder = await build_maker_order();
    const takerOrder = await build_taker_order();
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
            itemIndex: 1,
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
            itemIndex: 2,
          },
        ],
      });
    const numerator = 1;
    const denominator = 2;

    console.log(makerOrder);
    console.log(takerOrder);
    console.log(modeOrderFulfillments);
    const privateKey = process.env["MAKER"] as string;
    const Signer = new ethers.Wallet(privateKey, provider);
    const smeContract = new Contract(
        smeSeaportAddress,
        SeaportABIvSME,
        Signer,
      ) as SMESeaport;
    smeContract.matchOrdersWithLucky([makerOrder,takerOrder],modeOrderFulfillments,numerator,denominator,{gasLimit: 300000})
     .then(console.log)
}

async function build_taker_order() {
    const privateKey = process.env["TAKER"] as string;
    const Signer = new ethers.Wallet(privateKey, provider);

    const seaport = new Seaport(Signer, {overrides: {contractAddress: smeSeaportAddress}});

    const offerer = "0x53B3F192A56a9cdA260476974443634a96529c72";
    const { executeAllActions } = await seaport.createOrder(
        {
            zone: "0x0000000000000000000000000000000000000000",
            startTime: Math.floor(new Date().getTime() / 1000).toString(),
            endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
            consideration: [
                {
                    itemType: 2,
                    token: testERC721Address,
                    identifier: nftId,
                    recipient: offerer,
                },
            ],
            offer: [
                {
                    amount: ethers.utils.parseEther("0.00004").toString(),
                    token: testERC20Address,
                    endAmount: ethers.utils.parseEther("0.0001").toString(),
                }
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

    const seaport = new Seaport(Signer, {overrides: {contractAddress: smeSeaportAddress}});
    const offerer = "0x28c73A60ccF8c66c14EbA8935984e616Df2926e3";
    const { executeAllActions } = await seaport.createOrder(
        {
            zone: "0x0000000000000000000000000000000000000000",
            startTime: Math.floor(new Date().getTime() / 1000).toString(),
            endTime: Math.floor(new Date().getTime() / 1000 + 60 * 60).toString(),
            offer: [
                {
                    itemType: 2,
                    token: testERC721Address,
                    identifier: nftId,
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
main();