import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
	function middleware(req) {
		if (req?.nextauth?.token?.role !== 'admin') {
			return NextResponse.rewrite(new URL('/unauthorized', req.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
);

export const config = { matcher: ['/admin/:path*'] };
