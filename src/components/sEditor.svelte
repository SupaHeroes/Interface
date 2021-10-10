<script>
  import Sbutton from "@comp/sbutton.svelte";
  import {updateCampaignDetail} from "@lib/moralis";

  export let campaign;
  let files;
  let title;
  let shortdesc;
</script>

<form on:submit|preventDefault
  class="flex flex-col w-1/2  mx-auto my-6 px-6 mb-4 transition duration-500 ease-in-out transform lg:w-full "
>
  <!-- <label for="story">Choose a file as campaign story:</label>

  <input bind:files class="py-2" type="file" id="story" name="story" accept="text/x-markdown" /> -->
  <label for="image">Choose a featured image:</label>

  <input bind:files class=" py-2" type="file" id="image" name="image" accept="image/png, image/jpeg" />
  <div class="relative pt-4">
    <label for="title" class="text-base leading-7 text-gray-200">Title</label>
    <input
    bind:value={title}
      type="text"
      id="title"
      name="title"
      placeholder="Title"
      class="w-full px-4 py-2 mt-2 mr-4 text-base text-white transition duration-500 ease-in-out transform rounded-lg bg-supadark-dark border border-gray-700 focus:border-gray-500 focus:bg-supadark-light focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
    />
  </div>
  <div class="flex flex-wrap mt-4 mb-6 -mx-3">
    <div class="w-full px-3">
      <label class="text-base leading-7 text-gray-200" for="description">
        Short Description
      </label>
      <textarea
      bind:value={shortdesc}
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
    <Sbutton on:click={async () => await updateCampaignDetail(campaign, title, files, shortdesc)} class="w-full">Update</Sbutton>
    <button on:click={() => console.log(files)}>test</button>
  </div>
</form>
