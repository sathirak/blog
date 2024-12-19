<!-- This page handles any error encountered by the site. -->
<script>
	import { page } from '$app/stores';
</script>

<section class="flex flex-col items-center justify-center min-h-screen px-4 text-center">
	<div class="max-w-2xl">
		<h1 class="text-4xl font-bold mb-4">
			{#if $page.status === 404}
				The page you're looking for can't be found.
			{:else}
				Something went wrong.
			{/if}
		</h1>

		<div class="mt-12">
			<p class="text-lg mb-6">Here are some helpful links:</p>
			<div class="flex gap-6 justify-center">
				<a href="/" class="text-blue-600 hover:text-blue-800 text-lg font-medium">Home</a>
				<a href="/blog" class="text-blue-600 hover:text-blue-800 text-lg font-medium">Blog</a>
			</div>
		</div>
	</div>
</section>
