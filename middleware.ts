import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
	function middleware(req: any) {
		const role = req?.nextauth?.token?.user?.role;
		if (role && role !== 'admin') {
			return NextResponse.rewrite(new URL('/non-privileged', req.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	},
);

export const config = { matcher: ['/admin/:path*'] };
