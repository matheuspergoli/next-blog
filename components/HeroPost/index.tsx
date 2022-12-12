import Link from 'next/link'

//sm:max-h-hero-image

function HeroPost(props: PreviewPost) {
	return (
		<article className='mb-20'>
			<Link href={`/post/${props.slug}`}>
				<img
					src={props.coverImage.url}
					alt='Post cover'
					className='mb-5 max-h-60 w-full object-cover md:max-h-80 lg:max-h-96 xl:max-h-hero-image'
				/>
			</Link>
			<div className='grid grid-cols-1 gap-5 px-3 sm:p-0 lg:grid-cols-2 lg:gap-10'>
				<Link href={`/post/${props.slug}`} className='transition hover:underline'>
					<h1 className='text-4xl'>{props.title}</h1>
				</Link>
				<section>
					<p className='mb-5 text-2xl'>{props.excerpt}</p>
					<div className='flex items-center gap-4'>
						<img src={props.author.picture.url} alt='Author image' className='h-12 w-12 rounded-full' />
						<p className='text-lg font-bold'>{props.author.name}</p>
					</div>
				</section>
			</div>
		</article>
	)
}

export default HeroPost
