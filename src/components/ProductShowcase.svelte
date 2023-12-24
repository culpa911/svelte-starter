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

<!-- Container for demo purpose -->
<div class="relative h-[700px] px-6"
data-te-spy="scroll"
data-te-target="#scrollspy1"
data-te-offset="200">
    <!-- Section: Design Block -->
    <section class="mt-16">
      <div class="flex flex-wrap">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div class="flex lg:py-12">
            <img src="https://source.unsplash.com/random/780x520/"
              class="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image"/>
          </div>
        </div>
  
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div
            class="flex h-full items-center rounded-lg bg-gradient-to-tr from-blue-700 to-blue-900 p-6 text-center text-white lg:pl-12 lg:text-left">
            <div class="lg:pl-12">
              <h2 class="mb-8 text-3xl font-bold">Let's Connect with us</h2>
              <p class="mb-8 pb-2 lg:pb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, sint, repellat vel quo quisquam accusamus in qui at
                ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                distinctio eum neque!
              </p>
  
              <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-2 h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Best team
                </p>
  
                <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-2 h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Best quality
                </p>
  
                <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-2 h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Best experience
                </p>
              </div>
  
              <p>
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                porta dui, sit amet rutrum enim massa in ante. Curabitur in
                justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                aliquam lectus. Vestibulum mattis felis quis ex pharetra
                luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
    <div class="py-8"></div>
      <!-- Container for demo purpose -->
      <div class="mx-auto">
        <!-- Section: Design Block -->
        <section class="mb-16 text-left">
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto">
              <div class="grid items-center gap-x-6 lg:grid-cols-2">
                <div class="mb-10 lg:mb-0">
                  <h2 class="text-3xl font-bold dark:text-white">
                    Do not miss any updates.
                    <br />
                    <span class="text-primary dark:text-primary-400">Subscribe to the newsletter</span>
                  </h2>
                </div>
      
                <div class="mb-6 flex-row md:mb-0 md:flex">
                  <div class="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96" data-te-input-wrapper-init>
                    <input type="text"
                      class="peer block min-h-[auto] w-full rounded border border-gray-700 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2" placeholder="Enter your email" />
                    <label for="exampleFormControlInput2"
                      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:bg-gray-50 peer-focus:px-2 peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                      your email
                    </label>
                  </div>
                  <button type="submit"
                    class="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init data-te-ripple-color="light">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section: Design Block -->
        </div>
      <!-- Container for demo purpose -->
  </div>