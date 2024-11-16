import { cn } from '@/lib/utils';

const SubTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h2 className={cn('text-lg font-semibold', className)}>{children}</h2>
	);
};

export default SubTitle;
