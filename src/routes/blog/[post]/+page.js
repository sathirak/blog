import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../../blogs/${params.post}.md`)

		// if (post.metadata.status !== 'published') {
		// 	error(404);
		// }
		console.log(" > ", post);
		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post }
		}
	} catch (err) {
		error(404, err);
	}
}
