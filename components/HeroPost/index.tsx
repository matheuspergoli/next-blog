import Link from 'next/link'

function HeroPost(props: PreviewPost) {
	return (
		<article className='mb-20'>
			<Link href={`/post/${props.slug}`}>
				<img src={props.coverImage.url} alt='Post cover' className='max-h-hero-image object-cover w-full mb-5' />
			</Link>
			<div className='grid grid-cols-1 px-3 gap-5 sm:p-0 lg:grid-cols-2 lg:gap-10'>
				<Link href={`/post/${props.slug}`} className='transition hover:underline'>
					<h1 className='text-4xl'>{props.title}</h1>
				</Link>
				<section>
					<p className='text-2xl mb-5'>{props.excerpt}</p>
					<div className='flex items-center gap-5'>
						<img src={props.author.picture.url} alt='Author image' className='w-12 h-12 rounded-full' />
						<p className='text-lg font-bold'>{props.author.name}</p>
					</div>
				</section>
			</div>
		</article>
	)
}

export default HeroPost
