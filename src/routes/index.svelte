<script>
  import Sbutton from "@comp/sbutton.svelte";
</script>

<!-- Hero Section -->
<section class=" text-gray-200 ">
  <div
    class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28"
  >
    <div
      class="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 "
    >
      <h1 class="mb-8 text-2xl font-bold text-left  lg:text-4xl">
        The Trustless <b
          class="text-transparent bg-clip-text bg-gradient-to-r from-supagreen-dark to-supagreen transition duration-500 ease-in-out transform"
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
            fill="currentColor"
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
        </span> Get bonus funds from yield farms
      </p>
      <p class="flex items-center mb-2  ">
        <span
          class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
        >
          <svg
            fill="currentColor"
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
            fill="currentColor"
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
      <div class=" items-start"><Sbutton>Become a Hero</Sbutton></div>
    </div>
    <div class="w-full lg:w-5/6 lg:max-w-xl md:w-1/2">
      <img
        class="object-cover object-center rounded-lg "
        alt="hero"
        src="https://dummyimage.com/720x600/F3F4F7/8693ac"
      />
    </div>
  </div>
</section>

