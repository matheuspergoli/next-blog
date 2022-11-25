import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const query = gql`
	query {
		allPosts {
			id
			slug
		}
	}
`

async function getPostSlugs(): Promise<PostSlugs> {
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
		}
	})
	return await graphQLClient.request(query)
}

export default getPostSlugs
