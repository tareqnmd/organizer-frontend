import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';

const BoardListTitle = ({ title }: { title: string }) => {
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	return isEditing ? (
		<Input
			ref={inputRef}
			type="text"
			value={title}
			onChange={titleChangeHandler}
			onBlur={() => setIsEditing(false)}
			className="text-md h-auto rounded-none border-0 border-b !bg-transparent p-0 font-bold shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
		/>
	) : (
		<span
			className="text-md border-b border-b-[#00000000] font-bold"
			onClick={() => {
				setIsEditing(true);
				inputRef.current?.focus();
			}}
		>
			{title}
		</span>
	);
};

export default BoardListTitle;
