import styled from 'styled-components'

export const CartWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 100;
	display: flex;
	justify-content: flex-end;
`
export const CartStyle = styled.div`
	width: 30%;
	background: #f1f1f1;
	padding: 1em;
	overflow-y: scroll;
	position: relative;
`

export const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 1rem;
	overflow: hidden;
	background: #fff;
	padding: 0.5em;
	margin: 1em;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

	img {
		width: 5rem;
	}
`

export const CardInfo = styled.div`
	width: 50%;

	div {
		display: flex;
		flex-direction: space-between;
	}
`

export const EmptyStyle = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;

	h1 {
		font-size: 1.5rem;
		padding: 1em;
	}

	svg {
		font-size: 5rem;
		color: var(--secondary);
	}
`

export const Checkout = styled.div`
    width: 90%;
    margin: 0 auto;
	button {
		background: var(--primary);
		padding: 0.5em 1em;
		margin: 1em 0em;
		width: 100%;
		color: white;
		font-size: 1.5rem;
		font-weight: medium;
        border: none;
		cursor: pointer;
	}
`