import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
const BudgetTransactionsPdf = ({
	extraClassName,
}: {
	extraClassName?: string;
}) => {
	return (
		<Button className={cn('flex items-center gap-1', extraClassName)}>
			<FileText className="h-4 w-4" />
			Download PDF
		</Button>
	);
};

export default BudgetTransactionsPdf;
