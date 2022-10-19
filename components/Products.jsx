import Image from 'next/image'
import { ProductStyle } from '../styles/ProductStyle'

export default function Product({ product }) {
	// Extract the info from props
	const { title, price, image } = product.attributes

	return (
		<ProductStyle>
			<div>
				<picture>
					<img
						src={image.data.attributes.formats.small.url}
						alt={title}
					/>
				</picture>
			</div>
			<h2>{title}</h2>
			<h3>${price}</h3>
		</ProductStyle>
	)
}
