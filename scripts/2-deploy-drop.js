import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x8F9c29C564DF8d25fA595EeE1F96d2b9AD93D64A");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "BuildersDAO Membership",
      description: "A DAO for a community of builders that help eachothers.",
      image: readFileSync("scripts/assets/logo2.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()