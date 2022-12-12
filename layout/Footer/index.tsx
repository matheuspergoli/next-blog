import { FaGithub as GithubIcon, FaLinkedin as LinkedInIcon, FaUserCircle as UserIcon } from 'react-icons/fa'

function Footer() {
	return (
		<footer className='mt-20 flex h-60 flex-col items-center justify-around bg-footer-color text-white lg:flex-row'>
			<p className='text-center text-3xl font-bold sm:text-left'>Blog feito por Matheus Pergoli.</p>
			<div className='flex items-center gap-5'>
				<a
					href='https://matheuspergoli.vercel.app'
					target='_blank'
					rel='noreferrer'
					className='text-4xl underline'>
					<UserIcon title='Portfólio' className='transition hover:scale-110' />
				</a>
				<a
					href='https://www.linkedin.com/in/matheuspergoli/'
					target='_blank'
					rel='noreferrer'
					className='text-4xl underline'>
					<LinkedInIcon title='LinkedIn' className='transition hover:scale-110' />
				</a>
				<a href='https://github.com/matheuspergoli' target='_blank' rel='noreferrer' className='text-4xl'>
					<GithubIcon title='Github' className='transition hover:scale-110' />
				</a>
			</div>
		</footer>
	)
}

export default Footer
