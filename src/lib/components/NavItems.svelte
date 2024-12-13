<script>
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<ul class=" flex items-center gap-4 ">
	{#each navItems as page}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
	{/each}
</ul>
