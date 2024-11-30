'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const PrayerLocationSelect = ({
	city: initialCity,
	country: initialCountry,
}: {
	city: string;
	country: string;
}) => {
	const [city, setCity] = useState(initialCity);
	const [country, setCountry] = useState(initialCountry);
	const router = useRouter();
	const onNewLocation = () => {
		if (!city || !country) {
			toast.error('Please enter a city and country');
			return;
		}
		router.push(`/prayer-times?city=${city}&country=${country}`);
	};
	return (
		<div className="flex items-center justify-end gap-1">
			<Input
				className="max-w-[200px]"
				placeholder="Dhaka"
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<Input
				className="max-w-[200px]"
				placeholder="Bangladesh"
				value={country}
				onChange={(e) => setCountry(e.target.value)}
			/>
			<Button onClick={onNewLocation}>Search</Button>
		</div>
	);
};

export default PrayerLocationSelect;
