'use client';

import { signOut } from 'next-auth/react';

const Logout = () => {
	return (
		<button
			className="transition hover:underline"
			onClick={() =>
				signOut({
					callbackUrl: `${window.location.origin}/login`,
				})
			}
		>
			Logout
		</button>
	);
};

export default Logout;
