<script>
	export let post;
</script>

<img
	src="/images/blog/main/{post.slug}.png"
	alt=""
	width={post.coverWidth}
	height={post.coverHeight}
	style="aspect-ratio: 1514 / 1036"
	class="w-full h-full object-cover"
/>
<div class="text-sm text-slate-500 uppercase tracking-wider mt-4">
	{post.collection}
</div>
<h2 class="text-xl md:text-2xl mt-2 mb-3 md:mb-4">
	{post.title}
</h2>
<div>
	{post.date}
</div>
