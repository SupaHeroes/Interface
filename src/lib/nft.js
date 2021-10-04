
import axios from "axios";

const apikey = "63286490-55df-4b69-8967-4172eef39e9b";

// export function getNFTDetail(query) {
//   axios.request({
//     method: 'GET',
//     url: 'https://api.nftport.xyz/nfts/0x47c7ff137d7a6644a9a96f1d44f5a6f857d9023f/2650',
//     params: {chain: 'polygon'},
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: '63286490-55df-4b69-8967-4172eef39e9b'
//     }
//   });
// } 

export const getNFTs = axios.request({
  method: 'GET',
  url: 'https://api.nftport.xyz/nfts/0x47c7ff137d7a6644a9a96f1d44f5a6f857d9023f',
  params: {chain: 'polygon', include: 'metadata'},
  headers: {
    'Content-Type': 'application/json',
    Authorization: '63286490-55df-4b69-8967-4172eef39e9b'
  }
});

export async function search(query) {
  fetch(
    `https://api.nftport.xyz/text_search?text=${query}&chain=polygon&order_by=relevance&sort_order=asc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: apikey,
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
