import { cn } from '@/lib/utils';

const Title = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <h1 className={cn('text-2xl font-bold', className)}>{children}</h1>;
};

export default Title;
