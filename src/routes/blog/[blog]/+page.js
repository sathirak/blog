import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../../storage/blogs/${params.blog}.md`)

		console.log(" > ", post);
		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.blog }
		}
	} catch (err) {
		error(404, err);
	}
}
