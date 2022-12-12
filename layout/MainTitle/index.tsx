import React from 'react'

function MainTitle(props: { children: React.ReactNode }) {
	return (
		<h1 className='mb-10 text-center text-5xl font-bold sm:text-left sm:text-7xl lg:text-8xl'>
			{props.children}
		</h1>
	)
}

export default MainTitle
