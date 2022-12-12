import React from 'react'

function MainTitle(props: { children: React.ReactNode }) {
	return (
		<h1 className='text-center text-5xl font-bold mb-10 sm:text-left sm:text-7xl lg:text-8xl'>
			{props.children}
		</h1>
	)
}

export default MainTitle
