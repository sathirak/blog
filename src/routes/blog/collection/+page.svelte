<!-- Renders any page at /blog/category/* -->
<script>
	import PostCollectionCard from '$lib/components/BlogCollectionCard.svelte';
	export let data;
	const { posts } = data;

	const collectionPosts = posts.reduce((acc, post) => {
		post.collections.forEach((collection) => {
			if (!acc[collection]) {
				acc[collection] = [];
			}
			acc[collection].push({ ...post, collection });
		});
		return acc;
	}, {});

	const collectionPostMapped = Object.entries(collectionPosts).map(([collection, posts]) => ({
		collection,
		posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date))
	}));
</script>

<svelte:head>
	<title>Sathira's Blog Collections</title>
</svelte:head>

<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	<div>
		<a href="/blog/collection"><h1 class="uppercase text-gray-400 hover:underline underline-offset-2">Collections</h1></a>
	</div>

	{#if collectionPostMapped.length}
		<ul class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
			{#each collectionPostMapped as { collection, posts }}
				<li>
					<PostCollectionCard {collection} {posts} />
				</li>
			{/each}
		</ul>
	{:else}
		<p><strong>Ope!</strong> Sorry, couldn't find any posts in collections.</p>
		<p><a href="/blog">Back to blog</a></p>
	{/if}
</section>
