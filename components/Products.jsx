import Image from 'next/image'
import { ProductStyle } from '../styles/ProductStyle'
import Link from 'next/link'

export default function Product({ product }) {
	// Extract the info from props
	const { title, price, image, slug } = product.attributes

	return (
		<ProductStyle>
			<Link href={`/product/${slug}`}>
				<picture>
					<img
						src={image.data.attributes.formats.small.url}
						alt={title}
					/>
				</picture>
			</Link>
			<h2>{title}</h2>
			<h3>${price}</h3>
		</ProductStyle>
	)
}
