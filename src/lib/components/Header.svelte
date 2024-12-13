<script>
	import MainNav from './MainNav.svelte';
</script>

<header class=" flex items-center py-4">
	<a href="/" class=" flex items-center mx-8 gap-4">
		<img src="/images/logo.png" alt="sathirak logo" class=" size-10" />
		<h1 class=" text-xl font-semibold tracking-wide">SathiraK</h1>
	</a>
	<MainNav />

	<div class="flex items-center ml-auto mr-8">
		<a href="https://github.com/sathirak" class="mr-8">
			<img src="/images/github.png" alt="Github Logo" class=" size-8" />
		</a>

		<a href="https://linkedin.com/in/sathirak" class="mr-8">
			<img src="/images/linkedin.png" alt="LinkedIn Logo" class=" size-8" />
		</a>
	</div>
</header>
