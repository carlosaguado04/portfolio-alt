<script>
  import {fly} from 'svelte/transition'
</script>

<div class="h-screen w-screen flex items-center justify-center">
  <div class="text-center text-white uppercase">
    <h1 out:fly={{y:-100, duration:500}} class="text-5xl md:text-8xl font-bold">404</h1>
  </div>
</div>
