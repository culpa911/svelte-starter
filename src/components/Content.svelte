<script>
    import { onMount } from "svelte";

    // Initialization for ES Users
    import {
    ScrollSpy,
    initTE,
    } from "tw-elements";

    onMount(() =>{
        initTE({ScrollSpy})
    });
</script>

<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
<div class="grid grid-cols-5 gap-4">
    <div class="col-span-4">
      <div
        data-te-spy="scroll"
        data-te-target="#scrollspy1"
        data-te-offset="200"
        class="relative h-[700px] overflow-auto px-2">
        <section id="example-1">
          <!-- Container for demo purpose -->
          <div class="container my-4 mx-auto md:px-6">
            <!-- Section: Design Block -->
            <section class="mb-12">
              <img src="https://source.unsplash.com/random/1600x500"
              class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />

              <h1 class="mb-4 text-3xl font-bold">
                Exploration for Oil and Gas Industry
              </h1>

              <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>Exploration
              </p>

              <p class="mb-6">
                Exploration Division as one of the divisions at PT Geoservices, has started a fully integrated exploration services since the company was founded in 1971. We offer several services in geology, geophysics, mapping surveys, downhole measurements and borehole drilling including for:
              </p>

              <p
              class="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
              <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio odit consequatur porro sequi ab distinctio
              modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
              illum saepe mollitia ut voluptatum.
              </p>

            </section>
            <!-- Section: Design Block -->
          </div>
          <!-- Container for demo purpose -->
        </section>
        <section class="container my-4 mx-auto md:px-6 text-justify">
          <section id="example-3">
            <h3 class="pb-3 pt-5 text-xl font-semibold">Petroleum Exploration</h3>
            <p>     
              Participation in various stages of hydrocarbon exploration by PT GEOSERVICES started in 1977 in Eastern Indonesia. In addition to offer the services of Indonesian geologists, from our own staff as well as those from professional associates, we are also in a position to recruit overseas specialists to meet our Clients’ requirements.
            </p>
          </section>
            <section id="scope-works">
              <h3 class="pt-4 text-xl font-semibold">Scope of Works</h3>
              <p class="pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt similique eaque dicta possimus maiores perferendis quisquam optio nostrum, quibusdam dignissimos blanditiis officia? Non nemo mollitia, a distinctio ab cum eligendi error nobis repellendus ipsam, laudantium, ipsum qui quos ex eveniet iure quia harum rerum quam maxime ratione id ut voluptate!</p>
              
              <ol class="ml-8 list-decimal pt-4">
                <li>Data Processing</li>
                <li>Drilling Services</li>
                <li>Geological Services</li>
                <li>Geophysical Services</li>
                <li>Geophysical Logging</li>
                <li>Geodesy/Topographical Services</li>
              </ol>
            </section>
        </section>

      </div>
    </div>
  
    <div>
      <!-- Scrollspy -->
      <div id="scrollspy1" class="sticky-top pl-3 text-sm" >
        <ul data-te-nav-list-ref>
          <li class="py-1">
            <a
              data-te-nav-link-ref
              data-te-nav-link-active
              class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
              href="#example-1"
              >Section 1</a
            >
          </li>
          <li class="py-1">
            <a
              data-te-nav-link-ref
              class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
              href="#example-2"
              >Section 2</a
            >
            <ul data-te-nav-list-ref class="pl-3">
              <li class="py-1">
                <a
                  data-te-nav-link-ref
                  class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                  href="#example-sub-A"
                  >Subsection A</a
                >
              </li>
              <li>
                <a
                  data-te-nav-link-ref
                  class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                  href="#example-sub-B"
                  >Subsection B</a
                >
              </li>
            </ul>
          </li>
          <li class="py-1">
            <a
              data-te-nav-link-ref
              class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
              href="#example-3"
              >Section 3</a
            >
            <ul data-te-nav-list-ref class="pl-3">
              <li class="py-1">
                <a
                  data-te-nav-link-ref
                  class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                  href="#example-sub-A2"
                  >Subsection A</a
                >
              </li>
              <li>
                <a
                  data-te-nav-link-ref
                  class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                  href="#example-sub-B2"
                  >Subsection B</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Scrollspy -->
    </div>
  </div>