import {
    Contract,
    ethers,
} from "ethers";
import {
    Seaport
} from "@opensea/seaport-js";
import { SeaportABIvVRF } from "./abi/Seaport_VRF";
import type {
     VRFConsumerV2,
} from "./ethers-contracts/VRFConsumerV2";
import { MatchOrdersFulfillment } from "@opensea/seaport-js/lib/types";
// Provider must be provided to the signer when supplying a custom signer
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.public.blastapi.io"
);
const smeSeaportAddress = "0x9c1687C953Fff856e244A152995B96e569C4762A"
const testERC20Address = "0x8D4E2c8bc6b1E4Fa0ED829E6786E9096dd6DC265"
const testERC721Address = "0xE4E39D40d1b9c70dcd115FEA8DaEF242194f2cC7"
const vrfAddress = "0x45c71376479BE7061fE0cb19E288EA8d7855aF35"
const nftId = "33"

export const CONDUIT_KEYS_TO_CONDUIT = {
  "0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00": "0x0681bc8f138ca32ed7725b91e8d11cfb6e10eb5f",
};

const main = async () => {
    const makerOrder = await build_maker_order();
    const takerOrder = await build_taker_order();
    console.log(makerOrder);
    console.log(takerOrder);
    const privateKey = process.env["MAKER"] as string;
    const Signer = new ethers.Wallet(privateKey, provider);
    const smeContract = new Contract(
        vrfAddress,
        SeaportABIvVRF,
        Signer,
      ) as VRFConsumerV2;
    smeContract.transferPremium([makerOrder,takerOrder])
     .then(console.log)
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
                    amount: ethers.utils.parseEther("0.096").toString(),
                    token: testERC20Address,
                    endAmount: ethers.utils.parseEther("1.2").toString(),
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
                    amount: ethers.utils.parseEther("0.096").toString(),
                    token: testERC20Address,
                    endAmount: ethers.utils.parseEther("1.2").toString(),
                    recipient: offerer,
                },
            ]
        },
        offerer
    );

    const order = await executeAllActions();
    return order;
}
main();