<script>
	import { fly } from 'svelte/transition';
	import Burger from '../components/Burger.svelte';
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/click_outside.js';

	export let open = false;
	export let onClick = () => {
		open = !open;
	};
	import Footer from '../components/Footer.svelte';
</script>

<nav
	class="h-14 w-screen fixed flex font-hubotSansXbold"
	use:clickOutside
	on:outclick={() => (open = false)}
>
	<div class="w-full flex items-center justify-center">
		<a href="/"
			><svg
				class="fill-white stroke-white hover:fill-purple-300 hover:stroke-purple-300"
				width="65"
				height="46"
				viewBox="0 0 65 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M24.6258 44.6007L24.6174 44.5982L24.6089 44.5961C22.4982 44.0723 21.2045 41.9305 21.7276 39.8215C21.7276 39.8212 21.7277 39.821 21.7277 39.8208L30.6143 4.27454C30.6144 4.27414 30.6145 4.27373 30.6146 4.27333C31.1543 2.16361 33.2955 0.883186 35.4078 1.3901C37.5176 1.931 38.7952 4.07237 38.2717 6.18245C38.2717 6.18256 38.2716 6.18267 38.2716 6.18277L29.3844 41.7315C28.9377 43.5184 27.3357 44.7203 25.5647 44.7203C25.2501 44.7203 24.9341 44.6887 24.6258 44.6007Z"
				/>
				<path
					d="M51.2637 24.4888L50.9105 24.1349L50.5566 24.488L44.8045 30.2271C43.2622 31.7659 40.7668 31.763 39.2279 30.2207C37.6891 28.6784 37.692 26.183 39.2343 24.6442L48.1317 15.7669C49.674 14.228 52.1695 14.2309 53.7083 15.7732L62.5856 24.6706L62.9396 24.3175L62.5856 24.6706C63.3555 25.4423 63.739 26.4424 63.7379 27.4602C63.7367 28.4781 63.351 29.4773 62.5793 30.2472L62.9324 30.6012L62.5793 30.2472C61.037 31.786 58.5415 31.7832 57.0027 30.2409L51.2637 24.4888Z"
				/>
				<path
					d="M10.575 22.6484L10.2214 23.002L10.575 23.3555L16.3205 29.1011C17.8611 30.6417 17.8611 33.1371 16.3205 34.6777C15.5497 35.4485 14.5501 35.8331 13.5323 35.8331C12.5144 35.8331 11.5148 35.4485 10.744 34.6777L1.85659 25.7903C0.316033 24.2497 0.316033 21.7543 1.85659 20.2137L10.744 11.3263C12.2845 9.78576 14.78 9.78576 16.3205 11.3263C17.8611 12.8669 17.8611 15.3623 16.3205 16.9029L10.575 22.6484Z"
				/>
			</svg>
		</a>
	</div>
	<div class="burger">
		<Burger {open} {onClick} />
	</div>
	{#if open}
		<ul
			in:fly={{ x: 100, duration: 500 }}
			out:fly={{ x: 100, duration: 500 }}
			class="bg-transparent backdrop-blur-xl h-screen w-screen absolute flex flex-col items-center justify-evenly text-white text-2xl right-0 md:w-1/3"
		>
			<li class="border-b-2 border-transparent p-3" class:active={$page.url.pathname === '/'}>
				<a on:click={onClick} on:keyup={onClick} href="/">HOME</a>
			</li>
			<li class="border-b-2 border-transparent p-3" class:active={$page.url.pathname === '/about'}>
				<a on:click={onClick} on:keyup={onClick} href="/about">ABOUT ME</a>
			</li>
			<li
				class="border-b-2 border-transparent p-3"
				class:active={$page.url.pathname === '/projects'}
			>
				<a on:click={onClick} on:keyup={onClick} href="/projects">PROJECTS</a>
			</li>
			<li
				class="border-b-2 border-transparent p-3"
				class:active={$page.url.pathname === '/contact'}
			>
				<a on:click={onClick} on:keyup={onClick} href="/contact">CONTACT ME</a>
			</li>
			<li class="border-b-2 border-transparent p-3" class:active={$page.url.pathname === '/tools'}>
				<a on:click={onClick} on:keyup={onClick} href="/tools">WHAT I USE</a>
			</li>
			<Footer />
		</ul>
	{/if}
</nav>
