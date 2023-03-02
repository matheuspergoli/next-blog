import React from 'react'

function MainTitle(props: { children: React.ReactNode }) {
	return (
		<h1 className='mb-10 text-center text-2xl font-bold sm:text-left sm:text-4xl'>
			{props.children}
		</h1>
	)
}

export default MainTitle
