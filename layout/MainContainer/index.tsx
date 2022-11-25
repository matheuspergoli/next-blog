import React from 'react'

function MainContainer(props: { children: React.ReactNode }) {
	return <main className='mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl'>{props.children}</main>
}

export default MainContainer
