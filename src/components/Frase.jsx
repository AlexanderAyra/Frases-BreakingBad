import React from 'react'

const Frase = ({ frasex }) => {
	return (
		<div>
			<h1>{frasex.quote}</h1>
			<p>{frasex.author}</p>
		</div>
	)
}

export default Frase
