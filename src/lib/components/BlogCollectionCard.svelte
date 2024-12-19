<script>
    export let posts;
    export let collection;
</script>

<article>
    <h2 class="text-xl uppercase">{collection}</h2>
    <a href="/blog/collection/{collection}">
        <div class="w-full" style="aspect-ratio: 1514 / 1036">
            {#if posts.length > 1}
                <div class="grid grid-cols-2 gap-2 h-full">
                    {#each posts.slice(0, 2) as post, i}
                        <img
                            src="/images/blog/main/{post.slug}.png"
                            alt=""
                            width={post.coverWidth}
                            height={post.coverHeight}
                            class="w-full h-full object-cover {i === 0 ? 'rounded-l-lg' : 'rounded-r-lg'}"
                        />
                    {/each}
                </div>
            {:else}
                <img
                    src="/images/blog/main/{posts[0].slug}.png"
                    alt=""
                    width={posts[0].coverWidth}
                    height={posts[0].coverHeight}
                    class="w-full h-full object-cover rounded-lg"
                />
            {/if}
        </div>
    </a>
</article>
