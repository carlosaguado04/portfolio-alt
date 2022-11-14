<script>
  import {fly} from 'svelte/transition'
</script>

<div class="h-screen w-screen flex items-center justify-center">
  <div class="text-center text-white uppercase">
    <h1 in:fly={{y:100, duration:500, delay:500}} out:fly={{y:-100, duration:500}} class="text-5xl md:text-8xl font-bold">ABOUT ME</h1>
  </div>
</div>
