<script>
  import Sbutton from "@comp/sbutton.svelte";
  import "../app.postcss";
</script>

<!-- Navbar -->
<div class="items-center bg-supadark text-white antialiased">
  <div
    class="items-center pt-4 justify-between w-full px-5 overflow-y-auto tflex whitespace-nowrap scroll-hidden "
  >
    <div class="flex flex-col flex-wrap mx-auto md:items-center md:flex-row">
      <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div class="inline-flex items-center">
          <h2
            class="block p-2 text-2xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-supagreen-dark to-supagreen transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"
          >
            Supaheroes
          </h2>
          <p>|</p>
        </div>
      </a>
      <nav class="flex flex-wrap items-center justify-start text-base ">
        <ul class="items-center inline-block list-none lg:inline-flex">
          <li>
            <a
              href="/"
              class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
              >How It Works</a
            >
          </li>
          <li>
            <a
              href="/"
              class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
              >Medals</a
            >
          </li>
          <li>
            <a
              href="/"
              class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
              >Heroes</a
            >
          </li>
          <li>
            <a
              href="/"
              class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
              >Start a Campaign</a
            >
          </li>
        </ul>
      </nav>
      <Sbutton>Connect Wallet</Sbutton>
    </div>
  </div>
</div>

<div class="min-h-screen bg-supadark">
  <slot />
</div>

<!-- Footer -->
<div class="items-center ">
  <footer class="text-gray-200 transition duration-500 ease-in-out transform bg-supadark">
    <div class="flex flex-col flex-wrap justify-center p-5 md:flex-row">
      <nav class="flex flex-wrap items-center justify-center w-full mx-auto mb-6 text-base nprd">
        <a href="/" class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Pricing</a>
        <a href="/" class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Contact</a>
        <a href="/" class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Services</a>
        <a href="/" class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Now</a>
      </nav>
      <span class="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0">
        <a class="text-supagreen hover:text-black" href="/">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-supagreen hover:text-black" href="/">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
            </path>
          </svg>
        </a>
        <a class="ml-3 text-supagreen hover:text-black" href="/">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-supagreen hover:text-black" href="/">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
            </path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  
      
        <p class="mx-auto pb-10 text-sm text-center text-gray-200  "> © 2021 </p>
     
  </footer>
</div>