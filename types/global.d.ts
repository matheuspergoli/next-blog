interface Post {
	post: {
		id: string
		title: string
		content: {
			value: any
			blocks: any
		}
		coverImage: {
			url: string
		}
		author: {
			id: string
			name: string
			picture: {
				url: string
			}
		}
	}
}

interface PreviewPost {
	id: string
	slug: string
	title: string
	excerpt: string
	coverImage: {
		url: string
	}
	author: {
		id: string
		name: string
		picture: {
			url: string
		}
	}
}

interface PreviewPosts {
	allPosts: Array<PreviewPost>
}

interface PostSlug {
	id: string
	slug: string
}

interface PostSlugs {
	allPosts: Array<PostSlug>
}
