<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>SathiraK</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	<h1 class=" text-lg font-light tracking-wide text-gray-400">Hi there, it's me Sathira {"₍ᐢ.  ̫.ᐢ₎"}</h1>
	<h2>RECENT BLOGS</h2>

	<PostsList posts={data.posts} />

	<Pagination currentPage={1} totalPosts={data.total} />
</section>
