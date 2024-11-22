import { authOptions } from '@/lib/auth-options';
import { AuthErrorEnum } from '@/lib/helper/auth/enums';
import NextAuth from 'next-auth';

const handler = async (req: any, res: any) => {
	const query = new URLSearchParams(req.url.split('?')[1]).get(
		AuthErrorEnum.FORCE_REFRESH_QUERY_PARAM,
	);
	return await NextAuth(
		req,
		res,
		authOptions(
			query
				? { [AuthErrorEnum.FORCE_REFRESH_QUERY_PARAM]: query }
				: undefined,
		),
	);
};

export { handler as GET, handler as POST };
