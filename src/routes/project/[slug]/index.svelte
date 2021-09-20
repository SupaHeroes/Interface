<script>
  import data from "@lib/dummy_project.json";
  import Sbutton from "@comp/sbutton.svelte";
  import Sprogress from "@comp/sprogress.svelte";
  import Time from "svelte-time";

  let project = data["data"];
  let tabs = ["Story", "Roadmap", "News"];
  let activeTab = "Story";

  function changeTab(name){
    activeTab = name;
    console.log(activeTab);
  }
</script>

<div class=" w-11/12 max-w-7xl mx-auto pt-10 text-gray-200 ">
  <!-- Image & Title -->
  <div class="flex flex-wrap border-b border-supadark-light pb-8">
    <img
      class="w-full lg:w-3/4 shadow-xl md:h-96 h-72 object-cover rounded-xl"
      src={project["image"]}
      alt="test"
    />
    <div class=" w-full lg:w-1/5 lg:ml-8 ml-0">
      <div class="py-3 text-center flex">
        <a
          href="/"
          class="block text-2xl font-bold text-gray-200 dark:text-white"
          >{project["amount"] + " " + project["currency"]}</a
        >
        <div class=" flex-grow" />
        <span class="self-end text-supagreen-light"
          >{project["goal"] + " " + project["currency"] + " goal"}</span
        >
      </div>
      <Sprogress max={project["goal"]} value={project["amount"]} />
      <h1 class=" text-2xl">
        {project["title"] + " | " + project["subtitle"]}
      </h1>

      <span class="text-sm text-supagreen-light dark:text-gray-200 self-end"
        >Ends <Time relative timestamp={project["ends_at"]} /></span
      >
    </div>
  </div>

  <!-- Body -->
  <main class="flex flex-wrap">
    <div class="lg:w-3/4 w-full">
      <div class="flex flex-row w-full">
        {#each tabs as tab, i}
          <button
          on:click={() =>changeTab(tabs[i])}
            class="{activeTab == tabs[i] ? "underline text-supagreen-dark" : "text-supagreen-light"} border-b border-l lg:border-r-0 border-r text-center text-lg py-2  flex-grow border-supadark-light"
          >
            {tab}
          </button>
        {/each}
      </div>
      <p class=" flex-grow pt-6 lg:pr-10 pr-0">{project[activeTab]}</p>
    </div>
    <div
      class=" px-7 py-5 space-y-4 lg:w-1/5 w-full flex-grow lg:border-l border-l-0 border-supadark-light"
    >
      {#each project["classes"] as e, i}
        <div
          class="p-5 {i == project['classes'].length - 1
            ? 'lg:border-b-0'
            : 'lg:border-b'} lg:border-0 border-supadark-light border"
        >
          <p class=" text-lg font-bold">{e["name"]}</p>

          <p class=" text-gray-400 font-light">{e["desc"]}</p>
          <button
            class="w-full text-sm bg-supagreen-dark text-supadark py-2 mt-3 rounded"
            ><p>{"Fund " + e["amount"] + " " + project["currency"]}</p></button
          >
        </div>
      {/each}
    </div>
  </main>
</div>

<style>
  button {
    outline: none;
}
</style>