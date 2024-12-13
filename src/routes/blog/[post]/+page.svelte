<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import { fade, scale } from 'svelte/transition';
	
	export let data;
	let showImageModal = false;
	let currentImage = null;

	const { title, excerpt, date, updated, coverWidth, coverHeight, categories, slug } = data.meta;
	const { PostContent } = data;

	function handleImageClick(e) {
		if (e.target.tagName === 'IMG') {
			currentImage = {
				src: e.target.src,
				alt: e.target.alt
			};
			showImageModal = true;
		}
	}

	function closeModal() {
		showImageModal = false;
		currentImage = null;
	}
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

			{#each categories as category}
				<span class="mx-2">•</span>
				<a href="/blog/category/{category}/" class=" hover:underline underline-offset-2">
					{category}
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
		prose-a:relative prose-a:transition-transform prose-a:duration-200
		prose-a:mx-[0.7em]
		prose-a:before:content-['['] prose-a:before:absolute prose-a:before:left-[-0.7em] 
		prose-a:before:opacity-0 hover:prose-a:before:opacity-100
		prose-a:before:scale-0 hover:prose-a:before:scale-100
		prose-a:before:transition-all prose-a:before:duration-200
		prose-a:after:content-[']'] prose-a:after:absolute prose-a:after:right-[-0.7em] 
		prose-a:after:opacity-0 hover:prose-a:after:opacity-100
		prose-a:after:scale-0 hover:prose-a:after:scale-100
		prose-a:after:transition-all prose-a:after:duration-200
		max-w-none
		dark:prose-invert 
		dark:prose-blockquote:border-slate-700
		dark:prose-code:bg-slate-800
		dark:prose-code:text-slate-200
		dark:prose-pre:bg-slate-900
		dark:prose-pre:border-slate-600
		prose-img:cursor-pointer prose-img:hover:opacity-90"
		on:click={handleImageClick}
	>
		<svelte:component this={PostContent} />
	</main>

	<!-- Image Preview Modal -->
	{#if showImageModal && currentImage}
		<div
			transition:fade={{ duration: 200 }}
			class="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
			on:click={closeModal}
		>
			<div 
				class="relative max-w-[90vw] max-h-[90vh]"
				in:scale={{ duration: 300, start: 0.95 }}
				out:scale={{ duration: 200, start: 1 }}
			>
				<img
					src={currentImage.src}
					alt={currentImage.alt}
					class="object-contain max-w-full max-h-[90vh] rounded-lg"
				/>
				<button
					class="absolute top-4 right-4 text-white size-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
					on:click={closeModal}
				>
					✕
				</button>
			</div>
		</div>
	{/if}

	<footer class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"></footer>
</article>
