export const load = async ({ url, fetch }) => {
	const postRes = await fetch(`${url.origin}/api/v1/blog`)
	const posts = await postRes.json()

	const totalRes = await fetch(`${url.origin}/api/v1/blog/count`)
	const total = await totalRes.json()
	
	return { posts, total }
}
