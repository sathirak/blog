<script>
	import { postsPerPage } from '$lib/config'

	export let currentPage
	export let totalPosts
	export let path = '/blog/page'
	
	let pagesAvailable
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

	const isCurrentPage = (page) => page == currentPage

	const hasPreviousPage = () => currentPage > 1
    const hasNextPage = () => currentPage < pagesAvailable
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Pagination navigation" class="w-full">
			<ul class="flex gap-8 w-full justify-between">
				<li>
					<a 
						href="{path}/{currentPage - 1}" 
						aria-disabled="{!hasPreviousPage()}"
						class:disabled="{!hasPreviousPage()}"
					>
						{"< Newer Posts"}
					</a>
				</li>
				<li>
					<a 
						href="{path}/{currentPage + 1}" 
						aria-disabled="{!hasNextPage()}"
						class:disabled="{!hasNextPage()}"
					>
						{"Older Posts >"}
					</a>
				</li>
			</ul>
		</nav>
	{/if}
{/key}

<style>
    .disabled {
        opacity: 0.5;
        pointer-events: none;
    }
</style>