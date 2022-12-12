import Head from 'next/head'
import Link from 'next/link'
import Post from '../../components/Post'
import getPost from '../../service/getPost'
import SubTitle from '../../layout/SubTitle'
import MainTitle from '../../layout/MainTitle'
import { StructuredText } from 'react-datocms'
import getPostSlugs from '../../service/getPostSlugs'
import MainContainer from '../../layout/MainContainer'
import getPreviewPosts from '../../service/getPreviewPosts'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const queryClient = new QueryClient()
	const id = context?.params?.id as string

	await queryClient.prefetchQuery(['post', id], () => getPost(id))
	await queryClient.prefetchQuery(['posts'], getPreviewPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			id: id
		},
		revalidate: 1
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
	const { data } = useQuery({ queryKey: ['post', props.id], queryFn: () => getPost(props.id) })
	const { data: morePosts } = useQuery({ queryKey: ['posts'], queryFn: getPreviewPosts })

	return (
		<>
			<Head>
				<title>Post</title>
			</Head>
			<MainContainer>
				<div className='px-3 sm:p-0'>
					<Link href='/' className='my-10 block w-fit text-4xl font-bold transition hover:underline sm:my-20'>
						Blog.
					</Link>
					<MainTitle>{data?.post.title}</MainTitle>
					<div className='mb-10 flex items-center gap-5'>
						<img src={data?.post.author.picture.url} alt='Author image' className='h-12 w-12 rounded-full' />
						<p className='text-lg font-bold'>{data?.post.author.name}</p>
					</div>
				</div>
				<img
					src={data?.post.coverImage.url}
					alt='Cover image'
					className='mb-10 max-h-hero-image w-full object-cover'
				/>
				<section className='prose prose-sm mx-auto mb-10 max-w-3xl px-3 sm:px-0 md:prose-base'>
					<StructuredText
						data={data?.post.content}
						renderBlock={({ record }: any) => <img src={record.image.url} alt={record.image.alt} />}
					/>
				</section>
				<SubTitle>Mais Artigos</SubTitle>
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
