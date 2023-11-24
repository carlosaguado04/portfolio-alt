<script>
  import {fly} from 'svelte/transition'
</script>

<main class="absolute mt-32 ml-10 mr-10 -z-10" in:fly={{y:100, duration:100, delay:100}}>
  <h1 class="magic text-white text-5xl text-center select-none cursor-default">
    Projects
  </h1>
</main>
