import axios from "axios";

const apikey = "63286490-55df-4b69-8967-4172eef39e9b";

export function search(query) {
  axios.request({
    method: "GET",
    url: "https://api.nftport.xyz/text_search",
    params: {
      text: query,
      chain: "polygon",
      filter_by_contract_address:
        "method: 'GET',   url: 'https://api.nftport.xyz/nfts/0xdf8ca29feb47b012dbb5dd885b78520b93e0b574',   params: {chain: 'polygon', include: 'metadata'},   headers: {     'Content-Type': 'application/json',     Authorization: '63286490-55df-4b69-8967-4172eef39e9b'   }",
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "63286490-55df-4b69-8967-4172eef39e9b",
    },
  });
}

export const getNFTs = axios.request({
  method: "GET",
  url: "https://api.nftport.xyz/nfts/0xdf8ca29feb47b012dbb5dd885b78520b93e0b574",
  params: { chain: "polygon", include: "metadata" },
  headers: {
    "Content-Type": "application/json",
    Authorization: "63286490-55df-4b69-8967-4172eef39e9b",
  },
});
