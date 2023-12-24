<script>
  import { format } from "timeago.js";
  import Carousel from "./Carousel.svelte";
  import Navbar from "./Navbar.svelte";
  import Tabs from "./Tabs.svelte";
  import {
    Sticky,
    initTE,
    } from "tw-elements";
  import { onMount } from "svelte";
  import Content from "./Content.svelte";
  import PageContent from "./PageContent.svelte";
  import Footer from "./Footer.svelte";

  onMount(() => {
    initTE({ Sticky });
     });
</script>

<Navbar/>
<Carousel/>
<div class="py-8"></div>
<PageContent/>
<Footer/>