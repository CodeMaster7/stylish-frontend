import { useRouter } from 'next/router'
import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import { DetailStyle, ProductInfo, Quantity, Buy } from '../../styles/ProductDetails'
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

export default function ProductDetails() {
	// Fetch Slug
	const { query } = useRouter()

	// Fetch products from Strapi
	const [results] = useQuery({
		query: GET_PRODUCT_QUERY,
		variables: { slug: query.slug }
	})

	const { data, fetching, error } = results

	// Check for the data coming in
	if (fetching) return <div>Loading...</div>
	if (error) return <div>Oh no... {error.message}</div>

	// Extract the data
	const { title, description, image } = data.products.data[0].attributes

	return (
		<>
			<h1>Details Page</h1>
			<DetailStyle>
				<picture>
					<img
						src={image.data.attributes.formats.medium.url}
						alt={title}
					/>
				</picture>
				<ProductInfo>
					<h3>{title}</h3>
					<p>{description}</p>
					<Quantity>
						<span>Quantity</span>
						<button>
							<AiFillMinusCircle />
						</button>
						<p>0</p>
						<button>
							<AiFillPlusCircle />
						</button>
					</Quantity>
					<Buy>Add to cart</Buy>
				</ProductInfo>
			</DetailStyle>
		</>
	)
}
