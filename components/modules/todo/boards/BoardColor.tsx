import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { todoBoardBgOptions } from '@/lib/helper/todo';
import { useEffect, useState } from 'react';

const BoardColor = ({
	bg,
	setBg,
}: {
	bg: string;
	setBg: (value: string) => void;
}) => {
	const [bgImage, setBgImage] = useState<string>('');
	const [bgColor, setBgColor] = useState<string>('');

	useEffect(() => {
		if (bgColor) {
			setBg(bgColor);
		} else if (bgImage) {
			setBg(`url(${bgImage})`);
		}
	}, [bgColor, bgImage, setBg]);

	useEffect(() => {
		if (bg) {
			if (bg.includes('url')) {
				setBgImage(bg.split('(')[1].split(')')[0]);
			} else {
				setBgColor(bg);
			}
		}
	}, [bg]);

	return (
		<>
			<RadioGroup
				defaultValue="option-one"
				className="grid grid-cols-3"
				onValueChange={(value) => {
					setBgImage('');
					setBgColor(value);
				}}
			>
				{todoBoardBgOptions?.map((option) => (
					<div key={option.value} className="overflow-hidden">
						<RadioGroupItem
							hidden
							value={option.value}
							id={option.value}
						/>
						<Label
							htmlFor={option.value}
							className="flex min-h-[40px] min-w-[100px] cursor-pointer items-center justify-center rounded"
							style={{
								background: option.value,
							}}
						>
							{bg === option.value && (
								<span className="text-white">✔</span>
							)}
						</Label>
					</div>
				))}
			</RadioGroup>
			<Input
				placeholder="Select board image"
				value={bgImage}
				className="-mb-3"
				onChange={(e) => {
					setBgColor('');
					setBgImage(e.target.value);
				}}
			/>
		</>
	);
};

export default BoardColor;
