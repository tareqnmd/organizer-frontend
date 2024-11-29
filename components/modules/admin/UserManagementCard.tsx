import GoogleIcon from '@/components/icons/GoogleIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AdminUserType } from '@/lib/helper/admin';
import { Github, Mail } from 'lucide-react';

const UserManagementCard = ({ user }: { user: AdminUserType }) => {
	return (
		<Card className="flex flex-col gap-2 p-2.5 shadow shadow-light-shadow dark:shadow-dark-shadow">
			<div className="flex items-center gap-2">
				<Avatar>
					<AvatarImage src={user?.image} alt={user.name} />
					<AvatarFallback>{user.name[0]}</AvatarFallback>
				</Avatar>
				<div>
					<h3 className="text-md font-medium">{user.name}</h3>
					<p className="text-muted-foreground text-sm">
						{user.email}
					</p>
				</div>
			</div>
			<div className="flex gap-1">
				{user.googleLinked && (
					<Badge className="flex items-center gap-0.5 py-1.5">
						<GoogleIcon className="h-4 w-4" />
						Google
					</Badge>
				)}
				{user.githubLinked && (
					<Badge className="flex items-center gap-0.5 py-1.5">
						<Github className="h-4 w-4" />
						Github
					</Badge>
				)}
				{user.emailLinked && (
					<Badge className="flex items-center gap-0.5 py-1.5">
						<Mail className="h-4 w-4" />
						Email
					</Badge>
				)}
			</div>
		</Card>
	);
};

export default UserManagementCard;
