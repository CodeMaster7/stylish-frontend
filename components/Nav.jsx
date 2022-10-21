import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { HeaderStyle, NavStyle } from '../styles/NavStyle'
import Cart from './Cart'
import { useStateContext } from '../lib/context'

export default function Nav() {
	const { showCart, setShowCart, totalQuantities } = useStateContext()

	return (
		<>
			<HeaderStyle>
				<Link href='/'>
					<a>Styled.</a>
				</Link>
				<NavStyle>
					<div onClick={() => setShowCart(true)}>
						{totalQuantities > 0 && <span>{totalQuantities}</span>}
						<FiShoppingBag />
						<h3>Cart</h3>
					</div>
				</NavStyle>
				{showCart && <Cart />}
			</HeaderStyle>
		</>
	)
}
