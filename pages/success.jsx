import { useRouter } from 'next/router'
import {
	Wrapper,
	Card,
	OrderSummary,
	InfoWrapper,
	Address,
	OrderInfo
} from '../styles/SuccessStyle'
import dog from '../public/success_dog.jpeg'
import Image from 'next/image'

// STRIPE_SECRET_KEY
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

export async function getServerSideProps(params) {
	const order = await stripe.checkout.sessions.retrieve(
		params.query.session_id,
		{
			expand: ['line_items']
		}
	)

	return { props: { order } }
}

export default function Success({ order }) {
	const route = useRouter()

	return (
		<Wrapper>
			<Card
				animate={{
					opacity: 1,
					scale: 1,
					transition: { duration: 0.75 }
				}}
				initial={{ opacity: 0, scale: 0.75 }}>
				<h1>Thank you for your purchase!</h1>
				<h2>A confirmation email has been sent to</h2>
				<h2>{order.customer_details.email}</h2>

				<OrderSummary>Order Summary</OrderSummary>

				<InfoWrapper>
					<Address>
						<h3>Address</h3>
						{Object.entries(order.customer_details.address).map(
							([key, val]) => (
								<p key={key}>
									{key}: {val}
								</p>
							)
						)}
					</Address>
					<OrderInfo>
						<h3>Products</h3>
						{order.line_items.data.map((item) => (
							<div key={item.id}>
								<p>Product: {item.description}</p>
								<p>Quantity: {item.quantity}</p>
								<p>
									Price: ${item.price.unit_amount.toFixed(2)}
								</p>
							</div>
						))}
					</OrderInfo>
				</InfoWrapper>
				<button onClick={() => route.push('/')}>
					Continue Shopping
				</button>
				<Image
					src={dog}
					alt='dog_success_page'
					width={300}
					height={230}
				/>
			</Card>
		</Wrapper>
	)
}
