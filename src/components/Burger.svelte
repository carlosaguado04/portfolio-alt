<script>
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
	export let ariaLabel = 'toggle menu';
	export let width = 50;
</script>

<button
	class="stroke-white bg-transparent flex items-center overflow-hidden absolute top-0 right-0 border-none z-20 hover:stroke-purple-300"
	on:click={onClick}
	aria-expanded={open}
	aria-label={ariaLabel}
>
	<svg class:open viewBox="0 0 100 100" fill="none" stroke-width="7" {width}>
		<path
			class="top"
			d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
		/>
		<path class="middle" d="m 30,50 h 40" />
		<path
			class="bottom"
			d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
		/>
	</svg>
</button>
