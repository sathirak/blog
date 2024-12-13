<script>
	import { isMenuOpen } from '../assets/js/store';
	import NavItems from './NavItems.svelte';
</script>

<nav class=" flex items-center " class:open={$isMenuOpen}>
	<NavItems />
</nav>
