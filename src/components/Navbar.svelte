<script>
  import { onMount } from "svelte";
    import {
  Collapse,
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";

onMount (() => {
    initTE({Collapse, Dropdown, Ripple})
})
</script>

<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
<nav
  class="relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 lg:flex-wrap lg:justify-start"
  data-te-navbar-ref>
  <div data-te-nav-item-ref>
    <a
      class="block py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
      href="#!"
      data-te-ripple-init
      data-te-ripple-color="light"
      ><img src="public/geos-logo.png" alt="" class="w-36"></a
    >
  </div>
  <div class="px-6">
    <button
      class="leading-nonetransition-shadow border-0 bg-transparent py-3 text-xl duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContentU"
      aria-controls="navbarSupportedContentU"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="[&>svg]:w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
    </button>
    <div
      class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContentU"
      data-te-collapse-item>
      <ul class="mr-auto flex flex-row" data-te-navbar-nav-ref>
        <li class="static" data-te-nav-item-ref data-te-dropdown-ref>
          <a
            class="flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            id="dropdownMenuButtonU"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-nav-link-ref
            >Mega menu
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          <div
            class="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-700 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonU"
            data-te-dropdown-menu-ref>
            <div class="px-6 py-5 lg:px-8">
              <div class="grid gap-6 md:grid-cols-3">
                <div>
                  <p class="block w-full pt-2 font-semibold uppercase">
                    Oil and Gas
                  </p>
                  <div
                    class="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <img
                      src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                      class="w-full rounded-md shadow-lg dark:shadow-black/10"
                      alt="Louvre" />
                    <a href="#!">
                      <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-md bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                        style="background-color: rgba(251, 251, 251, 0.2)"></div>
                    </a>
                  </div>
                  <div
                    class="mb-3 mt-1 flex items-center justify-between">
                    <p
                      class="flex items-center text-primary dark:text-primary-400">
                      <span class="mr-2 w-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-5 w-5">
                          <path
                            d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                        </svg>
                      </span>
                      Travels
                    </p>
                    <p><u>15.07.2021</u></p>
                  </div>
                  <a href="#!">
                    <h5 class="mb-2 text-xl font-semibold">
                      This is title of the news
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Odit, iste aliquid. Sed id nihil magni, sint
                      vero provident esse numquam perferendis ducimus
                      dicta adipisci iusto nam temporibus modi animi
                      laboriosam.
                    </p>
                  </a>
                </div>
                <div>
                  <p class="block w-full pt-2 font-semibold uppercase">
                    Coal and Minerals
                  </p>
                  <div
                    class="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <img
                      src="https://tecdn.b-cdn.net/img/new/fluid/city/011.webp"
                      class="w-full rounded-md shadow-lg dark:shadow-black/10"
                      alt="Louvre" />
                    <a href="#!">
                      <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-md bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                        style="background-color: rgba(251, 251, 251, 0.2)"></div>
                    </a>
                  </div>
                  <div
                    class="mb-3 mt-1 flex items-center justify-between">
                    <p
                      class="flex items-center text-danger dark:text-danger-400">
                      <span class="mr-2 w-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-5 w-5">
                          <path
                            fill-rule="evenodd"
                            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                            clip-rule="evenodd" />
                          <path
                            fill-rule="evenodd"
                            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                            clip-rule="evenodd" />
                        </svg>
                      </span>
                      Business
                    </p>
                    <p><u>15.07.2021</u></p>
                  </div>
                  <a href="#!">
                    <h5 class="mb-2 text-xl font-semibold">
                      This is title of the news
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Odit, iste aliquid. Sed id nihil magni, sint
                      vero provident esse numquam perferendis ducimus
                      dicta adipisci iusto nam temporibus modi animi
                      laboriosam.
                    </p>
                  </a>
                </div>
                <div>
                  <p class="block w-full pt-2 font-semibold uppercase">
                    Geothermal
                  </p>
                  <div
                    class="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <img
                      src="https://tecdn.b-cdn.net/img/new/fluid/city/018.webp"
                      class="w-full rounded-md shadow-lg dark:shadow-black/10"
                      alt="Louvre" />
                    <a href="#!">
                      <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-md bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                        style="background-color: rgba(251, 251, 251, 0.2)"></div>
                    </a>
                  </div>
                  <div
                    class="mb-3 mt-1 flex items-center justify-between">
                    <p class="flex items-center text-warning">
                      <span class="mr-2 w-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-5 w-5">
                          <path
                            fill-rule="evenodd"
                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                            clip-rule="evenodd" />
                        </svg>
                      </span>
                      Technology
                    </p>
                    <p><u>15.07.2021</u></p>
                  </div>
                  <a href="#!">
                    <h5 class="mb-2 text-xl font-semibold">
                      This is title of the news
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Odit, iste aliquid. Sed id nihil magni, sint
                      vero provident esse numquam perferendis ducimus
                      dicta adipisci iusto nam temporibus modi animi
                      laboriosam.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>