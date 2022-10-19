import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { HeaderStyle, NavStyle } from '../styles/NavStyle'

export default function Nav() {
	return (
		<>
			<HeaderStyle>
				<Link href='/'>
					<a>Styled.</a>
				</Link>
				<NavStyle>
                <div>
					<FiShoppingBag />
					<h3>Cart</h3>
                </div>
				</NavStyle>
			</HeaderStyle>
		</>
	)
}
