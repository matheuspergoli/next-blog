function Footer() {
	return (
		<footer className='flex flex-col items-center justify-around h-72 mt-40 lg:flex-row bg-footer-color text-white'>
			<p className='text-4xl font-bold text-center sm:text-left'>Blog feito por Matheus Pergoli.</p>
			<div className='flex gap-5'>
				<a href='https://matheuspergoli.vercel.app' target='_blank' rel='noreferrer' className='text-2xl underline'>
					Portfólio
				</a>
				<a href='https://www.linkedin.com/in/matheuspergoli/' target='_blank' rel='noreferrer' className='text-2xl underline'>
					LinkedIn
				</a>
				<a href='https://github.com/matheuspergoli' target='_blank' rel='noreferrer' className='text-2xl underline'>
					Github
				</a>
			</div>
		</footer>
	)
}

export default Footer
