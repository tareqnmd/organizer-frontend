'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="default"
			className="p-1 h-[1.5rem]"
		>
			<Sun
				onClick={() => setTheme('dark')}
				className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				onClick={() => setTheme('light')}
				className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
		</Button>
	);
}
