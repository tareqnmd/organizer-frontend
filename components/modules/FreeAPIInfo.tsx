import Link from 'next/link';

const FreeAPIInfo = ({
	apiName,
	apiLink,
}: {
	apiName: string;
	apiLink: string;
}) => {
	return (
		<div className="rounded border border-dashed p-2 text-center text-sm">
			Using the free API from{' '}
			<Link className="underline" target="_blank" href={apiLink}>
				{apiName}
			</Link>
		</div>
	);
};

export default FreeAPIInfo;
