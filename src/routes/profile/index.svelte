<script>
  import { goto } from "$app/navigation";

  import Sbutton from "@comp/sbutton.svelte";
  import Sprogress from "@comp/sprogress.svelte";
  import Time from "svelte-time";
  import { sUser, getCampaings } from "@lib/moralis";
  import { onMount } from "svelte";
import SEditor from "@comp/sEditor.svelte";

  let userAttr;
  let user = {
    avatar: "",
    name: "",
  };

  let campaigns = [];

  onMount(async () => {
    // @ts-ignore
    sUser.set(Moralis.User.current());
    sUser.subscribe((value) => {
      // @ts-ignore
      userAttr = value;
      console.log(value);
      user = {
        avatar: "https://ui-avatars.com/api/?name=Supa+pol",
        // @ts-ignore
        name: userAttr.get("username"),
      };
    });
    await getCampaings().then((val)=> {
      campaigns = val
      console.log(val[0]);
    })
  });

  const dummyCampaign = [
    {
      amount: 13,
      goal: 23,
      currency: "Eth",
      subtitle: "The Crypto Laptop",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Newton",
      ends_at: "2021-09-20T18:20:36+0000",
    },
  ];

  const tabs = ["Campaigns", "Pledges", "Medals"];
  let activeTab = "Campaigns";

  function changeTab(name) {
    activeTab = name;
    console.log(activeTab);
  }
</script>

<div class="w-11/12 max-w-7xl mx-auto pt-10 text-gray-200">
  <!-- Name -->
  <div class="flex flex-wrap space-x-4">
    <img
      class="rounded-full w-12 h-12"
      src={user["avatar"] ?? ""}
      alt="avatar"
    />
    <h1 class="text-3xl self-center flex-grow">{user["name" ?? ""]}</h1>
    <div>
      <Sbutton on:click={async () => await goto("/profile/start")}
        >Start a Campaign</Sbutton
      >
    </div>
  </div>

  <!-- Tabs -->
  <div class="flex flex-row w-full mt-4">
    {#each tabs as tab, i}
      <button
        on:click={() => changeTab(tabs[i])}
        class="{activeTab == tabs[i]
          ? 'underline text-supagreen-dark'
          : 'text-supagreen-light'} border text-center text-lg py-2  flex-grow border-supadark-light"
      >
        {tab}
      </button>
    {/each}
  </div>

  <!-- Body -->
  {#if activeTab == "Campaigns"}
    {#each campaigns as e}
      <div class="flex flex-wrap overflow-hidden lg:-mx-px xl:-mx-1 mt-4">
        <div
          class="w-full overflow-hidden lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-4 xl:w-1/2"
        >
       
          <h2 class=" pb-3 text-2xl">{e.get("title")}</h2>
          <!-- <Sprogress max={e["goal"]} value={e["amount"]} /> -->
          <!-- <div class="flex flex-row pb-3">
            <h3 class="">{e["amount"] + " " + e["currency"]}</h3>
            <div class="flex-grow" />
            <h3 class="">{e["goal"] + " " + e["currency"]}</h3>
          </div> -->
          <img
            class=" h-56  w-full rounded-2xl object-cover"
            src={e.get("image")}
            alt={e.get("title")}
          />
        </div>

        <div
          class="w-full overflow-hidden lg:px-px my-4 lg:w-full xl:my-1 xl:px-4 xl:w-1/2"
        >
          <div class="w-full bg-supadark-light h-full rounded-2xl flex">
            <SEditor campaign={e}></SEditor>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
