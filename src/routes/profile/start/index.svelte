<script>
  import Sbutton from "@comp/sbutton.svelte";
  import Sinput from "@comp/sinput.svelte";

  
  let currentTab = "init";

  function changeTab(tab){
      currentTab = tab;
  }
</script>

<!-- Init > Forms > Smart Contract > Publish -->
<!-- Init Tab -->
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
        <Sinput placeholder="Project name" value="" />
      </div>
      <p class="w-full mt-2 mb-8 text-sm text-left text-gray-500">
        Let's make your dream a reality
      </p>
      <div class=" self-start"><Sbutton on:click={() => changeTab("forms")}>Start Campaign</Sbutton></div>
    </div>

    <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
      <img
        class="object-cover object-center rounded-lg"
        alt="hero"
        src="https://dummyimage.com/720x600/F3F4F7/8693ac"
      />
    </div>
  </div>
</section>
