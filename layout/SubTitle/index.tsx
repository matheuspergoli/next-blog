import React from 'react'

function SubTitle(props: { children: React.ReactNode }) {
	return <h2 className='text-center text-5xl font-bold mb-10 border-t pt-10 sm:text-left'>{props.children}</h2>
}

export default SubTitle
