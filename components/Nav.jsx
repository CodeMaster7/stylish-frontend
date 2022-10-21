import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { HeaderStyle, NavStyle } from '../styles/NavStyle'
import Cart from './Cart'
import { useStateContext } from '../lib/context'

const { AnimatePresence, motion } = require('framer-motion')

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
						{totalQuantities > 0 && (
							<motion.span
								animate={{ scale: 1 }}
								initial={{ scale: 0 }}>
								{totalQuantities}
							</motion.span>
						)}
						<FiShoppingBag />
						<h3>Cart</h3>
					</div>
				</NavStyle>
				<AnimatePresence>{showCart && <Cart />}</AnimatePresence>
			</HeaderStyle>
		</>
	)
}
