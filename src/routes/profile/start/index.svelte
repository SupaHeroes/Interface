<script>
  import Sbutton from "@comp/sbutton.svelte";
  import Sinput from "@comp/sinput.svelte";

  let currentTab = "init";

  function changeTab(tab) {
    currentTab = tab;
  }
</script>

<!-- Init > Forms > Smart Contract > Publish -->
<!-- Init Tab -->
{#if currentTab == "init"}
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
        <div class=" self-start">
          <Sbutton on:click={() => changeTab("forms")}>Start Campaign</Sbutton>
        </div>
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
{:else if currentTab == "forms"}
  <div class="container items-center px-5 py-12 lg:px-20 mx-auto">
    <form
      class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform lg:w-1/2 "
    >
      <section class="flex flex-col w-full h-full p-1 overflow-auto">
        <header
          class="flex flex-col items-center justify-center py-12 text-base text-gray-500 transition duration-500 ease-in-out transform bg-supadark-light border border-dashed rounded-lg focus:border-supagreen-light focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
        >
          <p
            class="flex flex-wrap justify-center mb-3 text-base leading-7 text-gray-500"
          >
            <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
          </p>
          <button
            class="w-auto px-2 py-1 my-2 mr-2 text-gray-200 transition duration-500 ease-in-out transform border rounded-md hover:text-gray-600 text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-supagreen-dark"
          >
            Upload a file
          </button>
        </header>
      </section>
      <div class="relative pt-4">
        <label for="title" class="text-base leading-7 text-gray-200">Title</label
        >
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          class="w-full px-4 py-2 mt-2 mr-4 text-base text-white transition duration-500 ease-in-out transform rounded-lg bg-supadark-dark border border-gray-700 focus:border-gray-500 focus:bg-supadark-light focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
        />
      </div>
      <div class="relative mt-4">
        <label for="website" class="text-base leading-7 text-gray-200">Website</label>
        <input
          type="link"
          id="website"
          name="website"
          placeholder="http://supaheroes.io"
          class="w-full px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform rounded-lg border border-gray-700 bg-supadark-dark focus:border-gray-500 focus:bg-supadark-light focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
        />
      </div>
      <div class="flex flex-wrap mt-4 mb-6 -mx-3">
        <div class="w-full px-3">
          <label class="text-base leading-7 text-gray-200" for="description">
            Description
          </label>
          <textarea
            class="w-full h-32 px-4 py-2 mt-2 text-base text-gray-200 transition duration-500 ease-in-out transform border border-gray-700 bg-supadark-dark  rounded-lg focus:border-supagreen-light focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
            id="description"
            type="text"
            name="description"
            placeholder="Message..."
            required
          />
        </div>
      </div>

      <div class="pt-4">
        <Sbutton on:click={() => changeTab("init")} class="w-full"
          >Let's Go!</Sbutton
        >
      </div>
    </form>
  </div>
{/if}
