<script>
  import data from "@lib/dummy_project.json";
  import Sbutton from "@comp/sbutton.svelte";
  import Time from "svelte-time";
  let project = data["data"];
</script>

<div class=" w-11/12 max-w-7xl mx-auto pt-10 text-gray-200 ">
  <!-- Image & Title -->
  <div class="flex flex-wrap ">
    <img
      class="w-full lg:w-3/4 shadow-xl md:h-96 h-72 object-cover rounded-xl"
      src={project["image"]}
      alt="test"
    />
    <div class=" w-full lg:w-1/5 lg:ml-8 ml-0 flex-grow">
      <div class="py-3 text-center flex">
        <a
          href="/"
          class="block text-2xl font-bold text-gray-200 dark:text-white"
          >{project["amount"] + " " + project["currency"]}</a
        >
        <div class=" flex-grow" />
        <span class="text-sm text-gray-300 dark:text-gray-200 self-end"
          ><Time relative timestamp={project["ends_at"]} /></span
        >
      </div>
      <div class=" bg-gray-600 rounded-full mb-2">
        <div
          class="bg-supagreen py-1 rounded-full"
          style="width: {((project['amount'] / project['goal']) * 100).toFixed(
            2
          ) + '%'};"
        />
      </div>
      <h1 class=" text-2xl">
        {project["title"] + " | " + project["subtitle"]}
      </h1>
    </div>
  </div>

  <!-- Body -->
  <main class="mt-8 flex flex-wrap ">
    <p class="lg:w-3/4 w-full flex-grow">{project["desc"]}</p>
    <div class=" px-7 py-5 space-y-4 lg:w-1/5 w-full lg:ml-8 ml-0 flex-grow border-l border-supadark-light">
      {#each project["classes"] as e}
        <div class="rounded-2xl p-5">
          
            <p class=" text-lg font-bold">{e["name"]}</p>
            <p>{e["amount"] + " " + project["currency"]}</p>
          

          <p>{e["desc"]}</p>
        </div>
      {/each}
    </div>
  </main>
</div>
