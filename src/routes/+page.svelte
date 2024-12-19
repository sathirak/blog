<script>
	import { siteDescription } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Sathira's Grotto</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	<h1 class=" text-lg font-light tracking-wide text-gray-400">
		Hi there, it's me Sathira {'₍ᐢ.  ̫.ᐢ₎'}, and this is mein
		<span class=" italic font-medium">Grotto</span>
	</h1>
	<div class="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
		<article class="w-full md:w-2/3 h-full">
			<a href="/blog/{data.posts[0].slug}" class="h-full flex flex-col">
				<div class="flex-1">
					<img
						src="/images/blog/main/{data.posts[0].slug}.png"
						alt=""
						width={data.posts[0].coverWidth}
						height={data.posts[0].coverHeight}
						style="aspect-ratio: 1514 / 1036"
						class="w-full h-full object-cover rounded-lg md:rounded-r-none md:rounded-l-lg"
					/>
				</div>
				<h2 class="text-xl md:text-2xl mt-2 mb-3 md:mb-4">
					{data.posts[0].title}
				</h2>
			</a>
		</article>
		<article class="w-full md:w-1/3">
			<a href="/blog/{data.posts[1].slug}" class="h-full flex flex-col">
				<div class="flex-1">
					<img
						src="/images/blog/main/{data.posts[1].slug}.png"
						alt=""
						width={data.posts[1].coverWidth}
						height={data.posts[1].coverHeight}
						style="aspect-ratio: 1514 / 1036"
						class="w-full h-full object-cover rounded-lg md:rounded-l-none md:rounded-r-lg"
					/>
				</div>
				<h2 class="text-xl md:text-2xl mt-2 mb-3 md:mb-4">
					{data.posts[1].title}
				</h2>
			</a>
		</article>
	</div>
</section>
