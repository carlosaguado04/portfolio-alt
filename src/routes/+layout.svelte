<script>
	import '../app.postcss';
  import global from '../global.css'
  import Nav from '../components/Nav.svelte'
  import Ninja from '../components/Ninja.svelte'
</script>

<svelte:head>
  <title>Carlos Aguado - Portfolio</title>
</svelte:head>

<Nav/>
<Ninja/>
<slot />
