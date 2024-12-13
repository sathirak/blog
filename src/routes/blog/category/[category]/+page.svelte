<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { postsPerPage } from '$lib/config';

	export let data;

	const { page, posts, category, total } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, total);
</script>

<svelte:head>
	<!-- <title>Category: {category}</title> -->
</svelte:head>

<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	<h1 class=" uppercase">{category}</h1>
	{#if posts.length}
		<PostsList {posts} />
		<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
	{:else}
		<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

		<p><a href="/blog">Back to blog</a></p>
	{/if}
</section>
