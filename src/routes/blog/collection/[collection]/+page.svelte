<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { postsPerPage } from '$lib/config';

	export let data;

	const { page, posts, collection, total } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, total);
</script>

<svelte:head>
	<title>Sathira's Blog Collections | {collection.toLocaleUpperCase()}</title>
</svelte:head>

<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	{#if posts.length}
		<div>
			<a href="/blog/collection"
				><h2 class="uppercase text-gray-400 hover:underline underline-offset-2">Collections</h2></a
			>
			<h1 class="uppercase ml-8">{collection}</h1>
		</div>
		<PostsList {posts} />
		<Pagination currentPage={page} totalPosts={total} path="/blog/collection/{collection}/page" />
	{:else}
		<p><strong>Ope!</strong> Sorry, couldn't find any posts in the collection "{collection}".</p>

		<p><a href="/blog">Back to blog</a></p>
	{/if}
</section>
