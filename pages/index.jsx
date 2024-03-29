import Head from 'next/head'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import Product from '../components/Products'
import { Gallery } from '../styles/Gallery'

export default function Home() {
	// Fetch products from Strapi
	const [results] = useQuery({ query: PRODUCT_QUERY })
	const { data, fetching, error } = results

	// Check for the data coming in
	if (fetching) return <div>Loading...</div>
	if (error) return <div>Oh no... {error.message}</div>

	const products = data.products.data

	return (
		<>
			<Head>
				<title>Styled Homepage</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<main>
				<h1>New Arrivals</h1>
				<Gallery>
					{products.map((product) => (
						<Product
							key={product.attributes.slug}
							product={product}
						/>
					))}
				</Gallery>
			</main>
		</>
	)
}
