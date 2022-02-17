import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xE29BaD27bFB77212151A6cF4F8c3E7ca95D065c5",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Pied Piper",
        description: "This NFT will give you access to BuildersDAO!",
        image: readFileSync("scripts/assets/piedpiper.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()