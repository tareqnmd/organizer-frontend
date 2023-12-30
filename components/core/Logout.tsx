'use client';

import { signOut } from 'next-auth/react';

const Logout = () => {
	return (
		<button
			className="transition hover:underline"
			onClick={() =>
				signOut({
					redirect: true,
					callbackUrl: '/',
				})
			}
		>
			Logout
		</button>
	);
};

export default Logout;
