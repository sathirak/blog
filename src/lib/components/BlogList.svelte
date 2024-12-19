<script>
	import PostCard from './BlogCard.svelte';
	export let posts = [];
</script>

<ul class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<PostCard {post} />
				</a>
			</article>
		</li>
	{/each}
</ul>
