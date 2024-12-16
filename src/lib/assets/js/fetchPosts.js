import { postsPerPage } from '$lib/config'

const fetchPosts = async ({ offset = 0, limit = postsPerPage, collection = '' } = {}) => {

	const posts = await Promise.all(
		Object.entries(import.meta.glob('../../../../storage/blogs/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
	
	if (collection) {
		sortedPosts = sortedPosts.filter(post => post.collections.includes(collection))
	}
  
	if (offset) {
		sortedPosts = sortedPosts.slice(offset)
	}
	
	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit)
	}

	sortedPosts = sortedPosts
		.filter(post => post.status === 'published')
		.map(post => ({
			title: post.title,
			slug: post.slug,
			excerpt: post.excerpt,
			coverWidth: post.coverWidth, 
			coverHeight: post.coverHeight,
			date: post.date,
			collections: post.collections,
		}))

	return {
		posts: sortedPosts
	}
}

export default fetchPosts