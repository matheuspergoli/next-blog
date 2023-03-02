import React from 'react'

function SubTitle(props: { children: React.ReactNode }) {
	return (
		<h2 className='mb-10 border-t pt-10 text-center text-2xl font-bold sm:text-left sm:text-4xl'>
			{props.children}
		</h2>
	)
}

export default SubTitle
