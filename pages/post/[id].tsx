import Head from 'next/head'
import Link from 'next/link'
import parser from 'html-react-parser'
import getPost from '../../service/getPost'
import MainTitle from '../../layout/MainTitle'
import getPostSlugs from '../../service/getPostSlugs'
import MainContainer from '../../layout/MainContainer'
import getPreviewPosts from '../../service/getPreviewPosts'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Post from '../../components/Post'

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const queryClient = new QueryClient()
	const id = context?.params?.id as string

	await queryClient.prefetchQuery(['post'], () => getPost(id))
	await queryClient.prefetchQuery(['posts'], getPreviewPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			id: id
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = (await getPostSlugs()).allPosts.map((post) => {
		return {
			params: { id: post.slug }
		}
	})

	return {
		paths,
		fallback: false
	}
}

function PostPage(props: { id: string }) {
	const { data } = useQuery({ queryKey: ['post'], queryFn: () => getPost(props.id) })
	const { data: morePosts } = useQuery({ queryKey: ['posts'], queryFn: getPreviewPosts })

	return (
		<>
			<Head>
				<title>Post</title>
			</Head>
			<MainContainer>
				<Link href='/' className='block w-fit font-bold text-4xl my-20 transition hover:underline'>
					Blog.
				</Link>
				<MainTitle>{data?.post.title}</MainTitle>
				<div className='flex items-center gap-5 mb-10'>
					<img src={data?.post.author.picture.url} alt='Author image' className='w-12 h-12 rounded-full' />
					<p className='text-lg font-bold'>{data?.post.author.name}</p>
				</div>
				<img src={data?.post.coverImage.url} alt='Cover image' className='max-h-hero-image object-cover w-full mb-20' />
				<section className='post max-w-3xl mx-auto mb-20'>{parser(data?.post.content as string)}</section>
				<h2 className='text-center text-5xl font-bold mb-10 border-t pt-20 sm:text-left sm:text-7xl'>Mais Artigos</h2>
				<div className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
					{morePosts?.allPosts
						.filter((post) => post.slug !== props.id)
						.slice(0, 2)
						.map((post) => (
							<Post key={post.id} {...post} />
						))}
				</div>
			</MainContainer>
		</>
	)
}

export default PostPage
