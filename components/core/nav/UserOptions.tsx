import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import Logout from './LogoutButton';

export function UserOptions({
	user,
}: {
	user: { image: string; name: string };
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="cursor-pointer h-6 w-6 select-none">
					<AvatarImage src={user?.image} />
					<AvatarFallback>{user?.name[0]}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem asChild>
					<Link
						className="w-full cursor-pointer transition hover:font-semibold"
						href="/profile"
					>
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Logout extraClass="w-full text-left" />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
