import jwt from 'jsonwebtoken';
import { cookies } from 'next/dist/client/components/headers';

const secret_key = process.env.JWT_SECRET;

type JwtValueType = {
	httpOnly: boolean;
	secure: boolean;
	sameSite: 'none' | 'strict';
	maxAge: number;
};

const jwt_default_value: JwtValueType = {
	httpOnly: true,
	secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
	sameSite:
		process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? 'none' : 'strict',
	maxAge: 30 * 24 * 60 * 60 * 1000,
};

export const generateToken = async (user: any) => {
	const token = jwt.sign(user, secret_key!, {
		expiresIn: '1d',
	});
	cookies().set('token', token, jwt_default_value);
};
