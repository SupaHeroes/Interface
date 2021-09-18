<script>
  import dummy from "@lib/dummy.json";
  import Scard from "@comp/scard.svelte";
import { goto } from "$app/navigation";

  const data = dummy["data"];

  async function handleReadMore(path){
      await goto('/project/' + path)
  }
</script>

<div class="w-5/6 mx-auto pt-20">
  <!-- Search Section -->
  <h1 class=" text-gray-200 pb-4">Discover Interesting Projects</h1>
  <div
    class="  h-10 pl-3 pr-2 bg-supadark-dark border border-gray-700 rounded-md flex justify-between items-center relative"
  >
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search"
      class="appearance-none text-white px-3 bg-supadark-dark w-full outline-none focus:outline-none active:outline-none"
    />
    <button
      type="submit"
      class="ml-1 text-gray-300 outline-none focus:outline-none active:outline-none"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="w-6 h-6"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
  <h2 class=" text-gray-500 pt-4">
    Become a hero to others & collect medal of honors
  </h2>

  <!-- Projects section -->
  <div class="flex flex-wrap overflow-hidden  pt-6 space-x-8">
    {#each data as e}
      <div class="w-full overflow-hidden  py-4 xl:w-1/3">
        <Scard project={e} on:click={async () => await handleReadMore(e['title'])} />
      </div>
    {/each}
  </div>
</div>
