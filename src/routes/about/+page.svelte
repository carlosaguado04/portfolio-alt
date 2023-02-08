<script>
	import { fly } from 'svelte/transition';
</script>

<main class="absolute mt-32 ml-10 mr-10 -z-10" in:fly={{y:100, duration:100, delay:100}}>
	<h1 class="text-white text-5xl text-center select-none cursor-default">
		Hi! I'm <span class="magic">Carlos</span>
	</h1>
	<p class="text-white text-3xl mt-14 leading-loose cursor-default select-none text-center">
		I'm a mexican front-end web developer currently living in Istanbul I love to build things, turn
		stuff apart and put them back together. Always trying to design and personalize every <a
			href="/tools"><span class="magic2">tool</span></a
		>
		I use! When I'm not in my job or coding I love to travel (25 countries so far), listen music and
		be with my family.
	</p>
</main>
