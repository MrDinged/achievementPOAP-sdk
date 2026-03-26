import { AchievementPOAP, DEFAULT_CONTRACT_NAME } from "achievement-poap";

console.log("Achievement POAP Growth Bot running...");

console.log("SDK Default Contract Name:", DEFAULT_CONTRACT_NAME);

if (typeof AchievementPOAP !== "function") {
  console.error("Smoke check failed: AchievementPOAP is not available.");
  process.exit(1);
}

const sdk = new AchievementPOAP();
console.log("Smoke check passed: AchievementPOAP instantiated successfully.");
