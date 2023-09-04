<script>
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />
  
<div class="back-to-top" on:click={goTop} class:hidden>
  <svg width="50px" height="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" xml:space="preserve" class="fill-arrow"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="1" y="1" class="fill-inside" width="52" height="52"></rect> <path class="fill-outline" d="M54,54H0V0h54V54z M2,52h50V2H2V52z"></path> </g> <path style="fill:#FFFFFF;" d="M44,36c-0.256,0-0.512-0.098-0.707-0.293L27,19.414L10.707,35.707c-0.391,0.391-1.023,0.391-1.414,0 s-0.391-1.023,0-1.414L27,16.586l17.707,17.707c0.391,0.391,0.391,1.023,0,1.414C44.512,35.902,44.256,36,44,36z"></path> </g> </g></svg>
</div>

<style>
.back-to-top {
  opacity: 1;
  transition: opacity 0.5s, visibility 0.5s;
  position: fixed;
  z-index: 99;
  right: 20px;
  user-select: none;
  bottom: 20px;
}
.back-to-top.hidden {
  opacity: 0;
  visibility: hidden;
}
.fill-arrow {
  fill: white;
}
.fill-inside {
  fill: theme('colors.primary.500');
}
.fill-outline {
  fill: theme('colors.primary.500');
}
</style>