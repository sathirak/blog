import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params }) => {
	const collection = params.collection
	const page = params.page || 1
	const options = { collection, limit: -1 }
	const { posts } = await fetchPosts(options)

	return {
		posts,
		collection,
		page,
		total: posts.length
	}
}
