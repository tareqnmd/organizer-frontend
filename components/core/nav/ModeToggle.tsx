'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant="outline"
			className="h-max !border-light-border/60 p-1 hover:!bg-transparent dark:!border-dark-border/60"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<Sun className="h-[1rem] w-[1rem] transition-all active:scale-90" />
			) : (
				<Moon className="h-[1rem] w-[1rem] transition-all active:scale-90" />
			)}
		</Button>
	);
}
