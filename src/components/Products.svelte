<script>
    import urlSlug from "url-slug";
    import { pop } from "svelte-spa-router";
    import { Button } from "flowbite-svelte";
    import { format } from "timeago.js";
    import { products } from "../product";
    import NotFound from "../components/NotFound.svelte";
    export let params = {};
    let prdct;
    products.forEach((product, index) => {
      if (params.title === urlSlug(product.title)) {
        prdct = product;
      }
    });
  </script>
  
  {#if prdct}
    <div class="p-4">
      <h1 class="text-3xl dark:text-white mb-4">{prdct.title}</h1>
      <p class="text-lg dark:text-white">
        Published: {format(prdct.publishDate)}
      </p>
      <img src={prdct.image} alt="img" class="mx-auto m-4" />
      <p class="text-lg dark:text-white">{prdct.content}</p>
      <Button class="my-4" on:click={pop}>Back</Button>
    </div>
  {:else}
    <NotFound />
  {/if}
  