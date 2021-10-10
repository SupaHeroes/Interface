<script>
  import Sbutton from "@comp/sbutton.svelte";
  import Sinput from "@comp/sinput.svelte";
  import { createCampaign } from "@lib/moralis.js";

  let currentTab = "init";

  let projectName;
  let campaignGoal;
  let projectContract;
  let loading = false;

  async function create() {
    loading = true;
    let myDate = new Date();
    let goalDate = myDate.setMonth(myDate.getMonth() + 1).valueOf();
    console.log(goalDate);
    await createCampaign(projectName, campaignGoal, goalDate).then((val) => {
      projectContract = val.events.OwnershipTransferred.address;
      loading = false;
      currentTab = "form1";
    });
  }
</script>

<!-- Init > Forms > Smart Contract > Publish -->
<!-- Init Tab -->
{#if loading}
<div class=" flex h-screen">
  <div class=" mx-auto my-auto rounded-full animate-pulse bg-supagreen-dark">
    <p class=" text-white text-xl animate-pulse text-center p-32">
      Creating...
    </p>
  </div>
</div>
  
{:else if currentTab == "init"}
  <section class="text-gray-200">
    <div
      class="container flex flex-col items-center px-5 pt-20 mx-auto  md:flex-row lg:px-28"
    >
      <div
        class="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0"
      >
        <h1
          class="mb-8 text-2xl font-black tracking-tighter text-supagreen-dark  md:text-5xl title-font"
        >
          The Superheroes are out there waiting for you.
        </h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-200">
          Deploy your campaign in minutes, link your blogs and files with ease.
        </p>
        <div class="flex flex-col w-full gap-2 md:justify-start md:flex-row">
          <Sinput placeholder="Project name" bind:value={projectName} />
        </div>
        <div class="flex flex-col w-full gap-2 md:justify-start md:flex-row">
          <input
            type="number"
            id="goal"
            name="goal"
            bind:value={campaignGoal}
            placeholder="Project Goal"
            class="w-full px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform rounded-lg border border-gray-700 bg-supadark-dark focus:border-gray-500 focus:bg-supadark-light focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <p class="w-full mt-2 mb-8 text-sm text-left text-gray-500">
          Let's make your dream a reality
        </p>
        <div class=" self-start">
          <Sbutton on:click={async () => await create()}>Start Campaign</Sbutton
          >
        </div>
      </div>

      <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
        <img
          class="object-cover object-center rounded-lg"
          alt="hero"
          src="https://bafybeib36fvt62cdf4ub43eckm7krnftxcjdc2mcuve2ft2wgn4dahalh4.ipfs.dweb.link/"
        />
      </div>
    </div>
  </section>
{:else if currentTab == "form1"}
  <div class="container items-center px-5 py-12 lg:px-20 mx-auto">
    <h1 class="text-white text-center text-xl">congratulation! You have your campaign running, here is your smart contract <a href="https://kovan.etherscan.io/address/{projectContract}">link</a> </h1>
  </div>
{/if}
