<script>
  import Sprogress from "@comp/sprogress.svelte";
  import Time from "svelte-time";
  export let project;
</script>

<div
  class="overflow-hidden bg-supadark-light rounded-3xl shadow-lg dark:bg-gray-800"
>
  <img
    class="object-cover w-full rounded-3xl h-80"
    src={project["image"]}
    alt="supaheroe project"
  />

  <div class="px-4 text-gray-200 ">
    <div class="py-3 text-center flex">
        <a href="/" class="block text-2xl font-bold text-gray-200 dark:text-white"
          >{project["amount"] + " " + project["currency"]}</a
        >
        <div class=" flex-grow" />
        <span class="text-sm text-gray-300 dark:text-gray-200 self-end"
          ><Time relative timestamp="{project['ends_at']}"/></span
        >
      </div>
      <Sprogress max={project['goal']} value={project['amount']}></Sprogress>
      <h1 class=" py-3 font-bold">{project['title']} | {project['subtitle']}</h1>
      <p class=" text-gray-400 font-light truncate">{project['desc']}</p>
      <button class="py-4 w-full text-center" on:click>Read More</button>
  </div>
  
</div>
