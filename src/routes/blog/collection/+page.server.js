import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params }) => {
    const page = params.page || 1
    const options = { limit: -1 }
    const { posts } = await fetchPosts(options)

    return {
        posts,
        page,
        total: posts.length
    }
}
