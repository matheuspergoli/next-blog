import React from 'react'

function SubTitle(props: { children: React.ReactNode }) {
	return <h2 className='text-center text-3xl font-bold mb-10 sm:text-left sm:text-4xl'>{props.children}</h2>
}

export default SubTitle
