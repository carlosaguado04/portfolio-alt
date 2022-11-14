<script>
  import {fly} from 'svelte/transition'
</script>

<div class="h-screen w-screen flex flex-col items-center justify-center">
  <div class="text-center text-white uppercase">
    <h1 in:fly={{y:100, duration:500, delay:500}} out:fly={{y:-100, duration:500}} class="text-5xl md:text-8xl font-hubotSansXbold magic">Carlos Aguado</h1>
    <h3 in:fly={{y:100, duration:500, delay:700}} out:fly={{y:-100, duration:500, delay:300}} class="text-3xl mt-16 md:text-5xl">Front-end web developer</h3>
  </div>
  <div in:fly={{y:100, duration:500, delay: 900}} out:fly={{y:-100, duration:500, delay:500}} class="text-white flex flex-row items-center justify-center mt-16 text-[10px]">
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
    <p class="ml-2">+ K to continue</p>
  </div>
</div>
