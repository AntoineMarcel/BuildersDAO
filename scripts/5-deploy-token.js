import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x8F9c29C564DF8d25fA595EeE1F96d2b9AD93D64A");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "BuildersDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "BUILDERS",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();