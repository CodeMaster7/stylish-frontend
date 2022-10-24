import { useRouter } from 'next/router'
import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import {
	DetailStyle,
	ProductInfo,
	Quantity,
	Buy
} from '../../styles/ProductDetails'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useStateContext } from '../../lib/context'
import toast from 'react-hot-toast'
import { useEffect } from 'react'


export default function ProductDetails() {
    // Use State Context
    const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext()

    const resetQuantity = () => {
        setQty(1)
    }

	useEffect(() => {
		resetQuantity()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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

	//Create Toast
	const notify = () => {
		toast.success(`${title} added to your cart.`, {
			duration: 1500
		})
	}

	return (
		<>
			<DetailStyle>
				<picture>
					<img
						src={image.data.attributes.formats.medium.url}
						alt={title}
					/>
				</picture>
				<ProductInfo>
					<h1>{title}</h1>
					<p>{description}</p>
					<Quantity>
						<span>Quantity</span>
						<button>
							<AiFillMinusCircle onClick={decreaseQty} />
						</button>
						<p>{qty}</p>
						<button>
							<AiFillPlusCircle onClick={increaseQty} />
						</button>
					</Quantity>
					<Buy
						onClick={() => {
							onAdd(data.products.data[0].attributes, qty)
                             notify()
                        }}>
						Add to cart
					</Buy>
				</ProductInfo>
			</DetailStyle>
		</>
	)
}
