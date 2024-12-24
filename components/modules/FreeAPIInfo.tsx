import Link from 'next/link';

const FreeAPIInfo = ({
	apiName,
	apiLink,
}: {
	apiName: string;
	apiLink: string;
}) => {
	return (
		<div className="rounded border border-dashed border-light-border/80 p-2 text-center text-xs text-dark/80 dark:border-dark-border/80 dark:text-light/80 md:text-sm">
			Using the free API from{' '}
			<Link className="underline" target="_blank" href={apiLink}>
				{apiName}
			</Link>
		</div>
	);
};

export default FreeAPIInfo;
