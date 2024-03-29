import styled from 'styled-components'

export const DetailStyle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5em;
	margin: 0rem 10%;
`

export const ProductInfo = styled.div`
	width: 45%;

    button {
        font-size: 1.5rem;
        font-weight: medium;
        padding: 0.5em 1em;
        border: none;
        cursor: pointer;
    }
`

export const Quantity = styled.div`
	display: flex;
	align-items: center;
	margin: 1em 0em;

	button {
		background-color: transparent;
		background-repeat: no-repeat;
		border: none;
		display: flex;
		font-size: 1.2rem;
		padding:  0em 0.5rem;
		overflow: hidden;
		outline: none;
        cursor: pointer;
	}

	p {
		width: 1rem;
		text-align: center;
	}

	span {
		color: var(--secondary);
	}

	svg {
		color: #494949;
	}
`

export const Buy = styled.button`
	width: 100%;
    background: var(--primary);
    color: #fff;
    font-weight: 500;
`