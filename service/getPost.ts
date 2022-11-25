import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const query = gql`
	query ($eq: String!) {
		post(filter: { slug: { eq: $eq } }) {
			id
			title
			content(markdown: true)
			author {
				id
				name
				picture {
					url
				}
			}
			coverImage {
				url
			}
		}
	}
`

async function getPost(variables: string): Promise<Post> {
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
		}
	})
	return await graphQLClient.request(query, { eq: variables })
}

export default getPost
