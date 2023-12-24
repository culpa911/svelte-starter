<script>
    import Tabs from "./Tabs.svelte";
    import {
      Sticky,
      initTE,
      } from "tw-elements";
    import { onMount } from "svelte";

    onMount(() => {
      initTE({ Sticky });
       });
  </script>
  

<!--Tabs navigation-->
<div class="grid grid-cols-6 gap-8">
    <ul
      class="mr-4 list-none pl-0 col-span-1 bg-gradient-to-tr from-blue-500 to-blue-800 min-h-[800px] rounded-md"
      role="tablist"
      data-te-nav-ref>
      <li role="presentation" class="flex-grow text-left">
        <a
          href="#tabs-home03"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-bold uppercase leading-tight text-neutral-100 hover:scale-95 hover:isolate hover:border-transparent hover:bg-blue-500 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-blue-300 data-[te-nav-active]:font-bold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          data-te-toggle="pill"
          data-te-target="#tabs-home03"
          data-te-nav-active
          role="tab"
          aria-controls="tabs-home03"
          aria-selected="true"
          >Exploration</a
        >
      </li>
      <li role="presentation" class="flex-grow text-left">
        <a
          href="#tabs-profile03"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-bold uppercase leading-tight text-neutral-100 hover:scale-95 hover:isolate hover:border-transparent hover:bg-blue-500 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-blue-300 data-[te-nav-active]:font-bold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          data-te-toggle="pill"
          data-te-target="#tabs-profile03"
          role="tab"
          aria-controls="tabs-profile03"
          aria-selected="false"
          >Laboratory</a
        >
      </li>
      <li role="presentation" class="flex-grow text-left">
        <a
          href="#tabs-messages03"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-bold uppercase leading-tight text-neutral-100 hover:scale-95 hover:isolate hover:border-transparent hover:bg-blue-500 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-blue-300 data-[te-nav-active]:font-bold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          data-te-toggle="pill"
          data-te-target="#tabs-messages03"
          role="tab"
          aria-controls="tabs-messages03"
          aria-selected="false"
          >Software</a
        >
      </li>
      <li role="presentation" class="flex-grow text-left">
        <a
          href="#tabs-contact03"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-bold uppercase leading-tight text-neutral-100 hover:scale-95 hover:isolate hover:border-transparent hover:bg-blue-500 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-blue-300 data-[te-nav-active]:font-bold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          data-te-toggle="pill"
          data-te-target="#tabs-contact03"
          role="tab"
          aria-controls="tabs-contact03"
          aria-selected="false"
          >Services</a
        >
      </li>
    </ul>
    
    <!--Tabs content-->
    <div class="my-2 col-span-5 h-[800px]">
      <div
        class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="tabs-home03"
        role="tabpanel"
        aria-labelledby="tabs-home-tab03"
        data-te-tab-active>
        <Tabs/>
      </div>
      <div
        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="tabs-profile03"
        role="tabpanel"
        aria-labelledby="tabs-profile-tab03">
        Tab 2 content
      </div>
      <div
        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="tabs-messages03"
        role="tabpanel"
        aria-labelledby="tabs-profile-tab03">
        Tab 3 content
      </div>
      <div
        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="tabs-contact03"
        role="tabpanel"
        aria-labelledby="tabs-contact-tab03">
        Tab 4 content
      </div>
    </div>
    </div>