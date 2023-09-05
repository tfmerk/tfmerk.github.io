<script>
  import "../app.postcss";
  import BackToTop from "$lib/BackToTop.svelte";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { page } from "$app/stores"
  import { base } from '$app/paths';
  $: activeUrl = $page.url.pathname;
</script>

<div>
  <Navbar let:hidden let:toggle style="border-bottom: 0.25px solid #ddd;">
    <NavBrand href="{base}/" class="Nav">
      <img src="{base}/logo.png" width="50px" height="50px" alt="Icon" style="margin-right: 10px;" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">tfmerk</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {activeUrl} {hidden}>
      <NavLi href="{base}/">Start</NavLi>
      <NavLi href="{base}/about">Über mich</NavLi>
    </NavUl>
  </Navbar>
  <div class="pb-16 px-8">
    <slot />
  </div>
  <BackToTop />
</div>

<style>
  :global(h1, h2, h3, h4, h5, h6) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  :global(h1) {
    font-size: xx-large;
  }
  :global(h2) {
    font-size: x-large;
    margin-top: 1em;
  }
  :global(h3) {
    font-size: large;
    margin-top: 1em;
  }
  :global(p, li) {
    color: theme('colors.stone.700');
  }
</style>