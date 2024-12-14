<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const {
		PostContent,
		meta: { title, excerpt, date, updated, coverWidth, coverHeight, collections, slug }
	} = data;
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

			{#each collections as collection}
				<span class="mx-2">•</span>
				<a href="/blog/collection/{collection}/" class=" hover:underline underline-offset-2">
					{collection}
				</a>
			{/each}
			{#if updated !== date}
				<span class="mx-2">•</span>
				Updated: {updated}
			{/if}
		</div>
		<img
			class="w-full shadow-lg mb-8 object-cover"
			src="/images/blog/main/{slug}.png"
			alt=""
			style="aspect-ratio: 1 / 1;"
			width={coverWidth}
			height={coverHeight}
		/>
	</section>

	<main
		class="prose prose-slate mx-auto
		prose-headings:font-medium prose-headings:tracking-tight
		prose-h1:prose-a:hidden prose-h2:prose-a:hidden prose-h3:prose-a:hidden prose-h4:prose-a:hidden prose-h5:prose-a:hidden prose-h6:prose-a:hidden
		prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
		prose-p:text-lg prose-p:leading-relaxed prose-p:my-6
		prose-p:font-light
		prose-img: prose-img
		prose-blockquote:text-lg prose-blockquote:border-l-2 prose-blockquote:border-slate-300 prose-blockquote:pl-4
		prose-code:px-2 prose-code:py-0.5
		prose-code:bg-slate-100
		prose-code:text-slate-800
		prose-code:rounded-md
		prose-code:text-[0.9em]
		prose-code:font-normal
		prose-code:before:content-none prose-code:after:content-none
		prose-pre:bg-slate-900
		prose-pre:p-4
		prose-pre:rounded-lg
		prose-pre:shadow-lg
		prose-pre:border
		prose-pre:border-slate-700
		prose-pre:overflow-x-auto
		prose-pre:code:bg-transparent
		prose-pre:code:p-0
		prose-pre:code:text-slate-200
		prose-a:text-cyan-600 prose-a:font-normal prose-a:no-underline hover:prose-a:underline hover:prose-a:text-cyan-800
		max-w-none
		dark:prose-invert
		dark:prose-blockquote:border-slate-700
		dark:prose-code:bg-slate-800
		dark:prose-code:text-slate-200
		dark:prose-pre:bg-slate-900
		dark:prose-pre:border-slate-600"
	>
		<svelte:component this={PostContent} />
	</main>

	<footer class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"></footer>
</article>
