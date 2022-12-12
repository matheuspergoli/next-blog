import Link from 'next/link'

function Post(props: PreviewPost) {
	return (
		<section className='w-full'>
			<Link href={`/post/${props.slug}`}>
				<img src={props.coverImage.url} alt='Post image' className='mb-5 h-72 w-full object-cover' />
			</Link>
			<div className='px-3 sm:p-0'>
				<Link href={`/post/${props.slug}`}>
					<h2 className='mb-3 text-2xl font-medium transition hover:underline'>{props.title}</h2>
				</Link>
				<h3 className='mb-3 text-base font-normal'>{props.excerpt}</h3>
				<div className='flex items-center gap-4'>
					<img src={props.author.picture.url} alt='Author image' className='h-12 w-12 rounded-full' />
					<p className='text-lg font-bold'>{props.author.name}</p>
				</div>
			</div>
		</section>
	)
}

export default Post
