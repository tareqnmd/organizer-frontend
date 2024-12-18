'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant="outline"
			className="h-max border-none p-0 hover:!bg-transparent"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<Sun className="h-[1.3rem] w-[1.3rem] transition-all active:scale-90" />
			) : (
				<Moon className="h-[1.3rem] w-[1.3rem] transition-all active:scale-90" />
			)}
		</Button>
	);
}
