<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';

	export let data;
	const { page, totalPosts, posts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Blog category - page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	{#if posts.length}
		<Pagination currentPage={page} {totalPosts} />

		<PostsList {posts} />

		<Pagination currentPage={page} {totalPosts} />
	{:else}
		<h1>Oops!</h1>

		<p>Sorry, no posts to show here.</p>

		<a href="/blog">Back to blog</a>
	{/if}
</section>
