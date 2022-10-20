import { useStateContext } from '../lib/context'
import {
	CartWrapper,
	CartStyle,
	Card,
	CardInfo,
	EmptyStyle
} from '../styles/CartStyle'
import { Quantity } from '../styles/ProductDetails'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

export default function Cart() {
	const { cartItems, setShowCart, onAdd, onRemove } = useStateContext()

	return (
		<CartWrapper onClick={() => setShowCart(false)}>
			<CartStyle onClick={(e) => e.stopPropagation()}>
				{cartItems.length < 1 && (
					<EmptyStyle>
						<h1>You have more shopping to do 😉</h1>
						<FaShoppingCart />
					</EmptyStyle>
				)}
				{cartItems.length >= 1 &&
					cartItems.map((item) => {
						return (
							<Card key={item.slug}>
								<picture>
									<img
										src={
											item.image.data.attributes.formats
												.thumbnail.url
										}
										alt={item.title}
									/>
								</picture>
								<CardInfo>
									<h2>{item.title}</h2>
									<h3>${item.price}</h3>
									<Quantity>
										<span>Quantity</span>
										<button onClick={() => onRemove(item)}>
											<AiFillMinusCircle />
										</button>
										<p>{item.quantity}</p>
										<button onClick={() => onAdd(item, 1)}>
											<AiFillPlusCircle />
										</button>
									</Quantity>
								</CardInfo>
							</Card>
						)
					})}
			</CartStyle>
		</CartWrapper>
	)
}
