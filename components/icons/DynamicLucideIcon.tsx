import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

const DynamicIcon = ({ name, ...props }: IconProps) => {
	const Icon = dynamic(dynamicIconImports[name]);
	return <Icon {...props} />;
};

export default DynamicIcon;
