<script>
	export let posts = [];
</script>

<ul class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
	{#each posts as post}
		{#if post.status === 'published'}
			<li>
				<article>
					<a href="/blog/{post.slug}">
						<img
							src={post.coverImage}
							alt=""
							width={post.coverWidth}
							height={post.coverHeight}
							style="aspect-ratio: 1514 / 1036"
							class="w-full h-full object-cover"
						/>
						<h2 class="text-xl md:text-2xl my-3 md:my-4">
							{post.title}
						</h2>
						<div>
							{post.date}
						</div>
					</a>
				</article>
				<p class="text-base md:text-lg text-slate-600 font-extralight">{post.excerpt}</p>
			</li>
		{/if}
	{/each}
</ul>
