<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="max-w-2xl mx-auto px-4 py-12">
	<section class="mb-12 text-center">
		<h1 class="text-4xl md:text-3xl font-medium uppercase mb-4 tracking-tight">{title}</h1>
		<div class="text-slate-600 dark:text-slate-400 mb-8 text-sm tracking-wide uppercase">
			{date}
			{#if updated !== date}
				<span class="mx-2">•</span>
				Updated: {updated}
			{/if}
		</div>
		<img
			class="w-full rounded-lg shadow-lg mb-8"
			src={coverImage}
			alt=""
			style="aspect-ratio: {coverWidth} / {coverHeight};"
			width={coverWidth}
			height={coverHeight}
		/>
	</section>

	<main class="prose prose-slate mx-auto 
		prose-headings:font-medium prose-headings:tracking-tight
		prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
		prose-p:text-lg prose-p:leading-relaxed prose-p:my-6
		prose-img:rounded-md prose-img:shadow-md
		prose-blockquote:text-lg prose-blockquote:border-l-2 prose-blockquote:border-slate-300 prose-blockquote:pl-4
		prose-code:text-sm prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
		prose-pre:bg-slate-900
		prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800
		max-w-none
		dark:prose-invert dark:prose-blockquote:border-slate-700
		dark:prose-code:bg-slate-800">
		<svelte:component this={PostContent} />
	</main>

	{#if categories}
		<footer class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
			<div class="flex flex-wrap gap-2">
				{#each categories as category}
					<a
						href="/blog/category/{category}/"
						class="px-3 py-1 text-sm rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
					>
						{category}
					</a>
				{/each}
			</div>
		</footer>
	{/if}
</article>
