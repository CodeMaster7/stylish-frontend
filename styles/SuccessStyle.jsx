import styled from 'styled-components'
//Animation
const { motion } = require('framer-motion')

export const Wrapper = styled.div`
	margin: 5rem 15rem;
`

export const Card = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: white;
	border-radius: 2rem;
	padding: 3rem 3rem;
	h1 {
		color: var(--primary);
		margin-bottom: 1rem;
	}
	h2 {
		color: var(--secondary);
		font-weight: 500;
	}
	button {
		background: var(--primary);
		color: white;
		font-weight: 500;
		font-size: 1.2rem;
		padding: 1rem 2rem;
		margin-top: 2rem;
		cursor: pointer;
	}
`
export const OrderSummary = styled.h2`
    margin-top: 2rem;
`

export const InfoWrapper = styled.div`
	margin-top: 0.5em;
	display: flex;
	gap: 5rem;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	background: #fff;
	padding: 1em;
`

export const Address = styled.div`
    font-size: 1rem;
    width: 100%;
`

export const OrderInfo = styled.div`
    font-size: 1rem;
    width: 100%;
    div {
        padding-bottom: 1rem;
    }
`
