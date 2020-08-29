import React from 'react'
import styled from 'styled-components'

const ContenedorFrase = styled.div`
	padding: 2.5rem;
	border-radius: 0.5rem;
	background-color: #fff;
	max-width: 700px;

	@media (min-width: 992px) {
		margin-top: 18rem;
	}

	h1 {
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		position: relative;
		padding-left: 4rem;

		&::before {
			content: open-quote;
			font-size: 8rem;
			color: black;
			position: absolute;
			left: -1rem;
			top: -2rem;
		}
	}

	p {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 1.4rem;
		font-weight: bold;
		text-align: right;
		color: #666;
		margin-top: 2rem;
	}
`

const Frase = ({ frasex }) => {
	if (Object.keys(frasex).length === 0) return null
	return (
		<ContenedorFrase>
			<h1>{frasex.quote}</h1>
			<p>{frasex.author}</p>
		</ContenedorFrase>
	)
}

export default Frase
