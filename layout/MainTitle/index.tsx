import React from 'react'

function MainTitle(props: { children: React.ReactNode }) {
	return <h1 className='text-8xl font-bold mb-10'>{props.children}</h1>
}

export default MainTitle
