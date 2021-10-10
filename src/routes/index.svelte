<script>
import { goto } from "$app/navigation";

  import Sbutton from "@comp/sbutton.svelte";
</script>

<!-- Hero Section -->
<section class=" text-gray-300  min-h-screen mb-20">
  <div
    class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28"
  >
    <div
      class="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 "
    >
      <h1 class="mb-8 text-2xl font-bold text-left text-gray-50  lg:text-4xl">
        The Trustless <b
          class="text-transparent bg-clip-text bg-gradient-to-r from-supagreen-dark to-supagreen transition duration-1000 ease-in-out transform"
        >
          Crowdfunding
      </b>
         Platform Is Here!
      </h1>
      <p class="mb-8 text-base leading-relaxed text-left  ">
        Leverage the power and security of Ethereum’s Smart Contract to provide
        a safe crowdfunding ecosystem.
      </p>
      <p class="flex items-center mb-2  ">
        <span
          class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
        >
          <svg
            fill="cyan"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
            />
          </svg>
        </span> Gain easy access to decentralized finance
      </p>
      <p class="flex items-center mb-2  ">
        <span
          class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
        >
          <svg          
            fill="cyan"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
            />
          </svg>
        </span> become a hero & back a project using cryptocurrencies
      </p>
      <p class="flex items-center mb-6 ">
        <span
          class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
        >
          <svg
            fill="cyan"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
            />
          </svg>
        </span> receive NFT rewards, and more!
      </p>
      <div class=" items-start"><Sbutton on:click={async () => await goto("/discover")}>Become a Hero</Sbutton></div>
    </div>
    <div class="w-full lg:w-5/6 lg:max-w-xl md:w-1/2 static">
      <div class="bg-supagreen-dark blur-2xl absolute h-56 rounded-full w-44 hidden md:block"></div>
      <div class="bg-supagreen-dark blur-3xl absolute h-80 right-80 rounded-full bottom-0 w-44 hidden lg:block"></div>
      <img
      width="450px"
        class="object-cover object-center rounded-lg mx-auto relative z-0"
        alt="hero"
        src="https://ipfs.io/ipfs/QmajXoAwU26wkoMzwoT4wNN8B4QK8Bqz5xrsQBbJSDZp9h"
      />
      
    </div>
    
  </div>
</section>

<div class="w-3/4 border-b opacity-20 border-gray-500 mx-auto rounded-full my-10"></div>

<section class="text-gray-300 bg-supadark min-h-screen">
  <div class="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
    <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
      <img class="object-cover object-center rounded" alt="hero" loading="lazy" src="https://bafybeifi3lbwevb3hwrigxcddabhlxccktbspca4a5mey6snytgj5zj4d4.ipfs.dweb.link/">
    </div>
    <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
      <h2 class="mb-8 text-xs font-semibold tracking-widest text-gray-50 uppercase title-font">Build your own</h2>
      <h1 class="mb-8 text-2xl font-bold tracking-tighter text-left text-gray-50 lg:text-5xl title-font"> Using <b class="text-transparent bg-clip-text bg-gradient-to-r from-supagreen-dark to-supagreen transition duration-1000 ease-in-out transform">SupaProtocol</b></h1>
      <p class="mb-8 text-base leading-relaxed text-left">Use our protocol to easily do Crowdfunding on your platform. Do crowdfunding without the middleman and get the most of Defi.</p>
      <div class="flex flex-col justify-left lg:flex-row">
        <Sbutton>Become a Supadev</Sbutton>
        <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> Try now <br class="hidden lg:block">
          <a href="/" class="inline-flex items-center font-semibold text-supagreen md:mb-2 lg:mb-0 hover:text-black " title="read more"> Check out our docs » </a>
        </p>
      </div>
    </div>
  </div>
</section>


