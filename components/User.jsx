import { FaUserCircle } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import styled from 'styled-components'

export default function User() {
	const route = useRouter()
	const { user, error, isLoading } = useUser()

	console.log('🚀 ~ user', user)

	if (!user)
		return (
			<div onClick={() => route.push(`/api/auth/login`)}>
				<FaUserCircle className='profile' />
				<h3>Login</h3>
			</div>
		)
        return (
            <Profile onClick={() => route.push(`/profile`)}>
                <picture>
                    <img
                        src={user.picture}
                        alt={user.name}
                    />
                </picture>
                <h3>{user.name}</h3>
            </Profile>
        )
}

const Profile = styled.div`
	img {
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
	}
`
