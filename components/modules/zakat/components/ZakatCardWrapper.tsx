import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const ZakatCardWrapper = ({
	children,
	headerTitle,
	extraClass,
}: {
	children: React.ReactNode;
	headerTitle: string;
	extraClass?: string;
}) => {
	return (
		<div
			className={cn(
				`flex flex-col gap-4 overflow-hidden rounded-md border border-dark/20 p-4 dark:border-light/20`,
				extraClass,
			)}
		>
			<Label className="w-full border-b-4 border-dark/20 pb-1 text-lg font-medium dark:border-light/20">
				{headerTitle}
			</Label>
			{children}
		</div>
	);
};

export default ZakatCardWrapper;
