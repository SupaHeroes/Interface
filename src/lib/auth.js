// @ts-nocheck
import { writable } from 'svelte/store';

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
};

export async function logout() {
  await Moralis.User.logOut();
  sUser.set(Moralis.User.current());
};