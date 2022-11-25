import Head from 'next/head'
import Post from '../components/Post'
import { GetStaticProps } from 'next'
import MainTitle from '../layout/MainTitle'
import HeroPost from '../components/HeroPost'
import MainContainer from '../layout/MainContainer'
import getPreviewPosts from '../service/getPreviewPosts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['posts'], getPreviewPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 1
	}
}

function Home() {
	const { data } = useQuery({ queryKey: ['posts'], queryFn: getPreviewPosts })

	const heroPost = data?.allPosts[0]
	const morePosts = data?.allPosts.slice(1)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<MainContainer>
				<MainTitle>Blog.</MainTitle>
				{heroPost ? <HeroPost {...heroPost} /> : null}
				<h2 className='text-center text-5xl font-bold mb-10 sm:text-left sm:text-7xl'>Mais artigos</h2>
				<div className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
					{morePosts?.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</div>
			</MainContainer>
		</>
	)
}

export default Home
