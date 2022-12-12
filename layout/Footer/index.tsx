function Footer() {
	return (
		<footer className='mt-20 flex h-60 flex-col items-center justify-around bg-footer-color text-white lg:flex-row'>
			<p className='text-center text-3xl font-bold sm:text-left'>Blog feito por Matheus Pergoli.</p>
			<div className='flex gap-5'>
				<a
					href='https://matheuspergoli.vercel.app'
					target='_blank'
					rel='noreferrer'
					className='text-2xl underline'>
					Portfólio
				</a>
				<a
					href='https://www.linkedin.com/in/matheuspergoli/'
					target='_blank'
					rel='noreferrer'
					className='text-2xl underline'>
					LinkedIn
				</a>
				<a
					href='https://github.com/matheuspergoli'
					target='_blank'
					rel='noreferrer'
					className='text-2xl underline'>
					Github
				</a>
			</div>
		</footer>
	)
}

export default Footer
