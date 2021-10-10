// @ts-nocheck
import { writable } from "svelte/store";
import {
  campaignStarterABI,
  campaignStarterAddress,
  campaignABI,
} from "@lib/contracts/contract";

export const sUser = writable(null);

export async function login() {
  try {
    await Moralis.Web3.authenticate();
    sUser.set(Moralis.User.current());
  } catch (error) {
    const code = error.code;
    const message = error.message;
    console.log(code + message);
  }
}

export async function createCampaign(name, goal, endTime) {
  await Moralis.enable();
  const options = {
    contractAddress: campaignStarterAddress,
    functionName: "createProject",
    abi: campaignStarterABI,
    params: {
      _projectName: name,
      _projectStarter: Moralis.User.current().attributes.accounts[0],
      _fundTarget: goal,
      _fundingEndTime: endTime,
      _projectEndTime: endTime,
    },
  };
  const log = await Moralis.executeFunction(options);
  await createCampaignDetail(
    log.events.OwnershipTransferred.address,
    name,
    "",
    "",
    ""
  );
  console.log(log.events.OwnershipTransferred.address);
  return log;
}

async function createCampaignDetail(address, name, image, story, desc) {
  const Campaign = Moralis.Object.extend("campaign");
  const camp = new Campaign();

  camp.save({
    ownerAddress: Moralis.User.current().attributes.accounts[0],
    contractAddress: address,
    title: name,
    image: image,
    shortDesc: desc,
    story: story,
  });
}

export async function updateCampaignDetail(campaign, name, image, desc) {
  const img = new Moralis.File("campaignImage", image[0]);
  await img.saveIPFS();

  campaign.set("title", name);
  // console.log(campaign.attributes.title);
  campaign.set("image", img.ipfs().toString());
  campaign.set("shortDesc", desc);
  await campaign.save();
  console.log(campaign);
}

export async function getCampaings() {
  // const campaigns = Moralis.Object.extend("campaign");
  const query = new Moralis.Query("campaign");
  // console.log(Moralis.User.current().attributes.accounts[0]);
  // query.equalTo("ownerAddress", Moralis.User.current().attributes.accounts[0]);
  const results = await query.find();
  return results;
}

export async function getSpecificCampaing(address) {
  // const campaigns = Moralis.Object.extend("campaign");
  const query = new Moralis.Query("campaign");
  // console.log(Moralis.User.current().attributes.accounts[0]);
  query.equalTo("contractAddress", address);
  const results = await query.find();
  return results;
}

export async function pledge(address, amount) {
  await Moralis.enable();
  const options = {
    contractAddress: address,
    functionName: "deposit",
    abi: campaignABI,
    params: {
      amount: amount,
    },
  };
  const log = await Moralis.executeFunction(options);
  console.log(log);
}

export async function getProjectDetail(address) {
  await Moralis.enable();
  const options = {
    contractAddress: address,
    functionName: "detailsProject",
    abi: campaignABI,
  };
  const log = await Moralis.executeFunction(options);
  return log;
}

export async function logout() {
  await Moralis.User.logOut();
  sUser.set(null);
}
