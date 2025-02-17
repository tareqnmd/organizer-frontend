'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import {
	calculateZakatDue,
	ZakatCalculationType,
	ZakatField,
	ZakatResult,
} from '../helper';
import Assets from './Assets';
import Liabilities from './Liabilities';
import Nisab from './Nisab';
import ZakatCalculationResult from './ZakatCalculationResult';

const Zakat: React.FC = () => {
	const [fields, setFields] = useState<ZakatField[]>([]);
	const [result, setResult] = useState<ZakatResult | null>(null);

	const updateFields = (
		type: ZakatCalculationType,
		name: string,
		value: number,
	) => {
		setFields((prev) => {
			const existingField = prev.find((f) => f.name === name);
			if (existingField) {
				return prev.map((f) => (f.name === name ? { ...f, value } : f));
			}
			return [...prev, { name, value, type }];
		});
	};

	const calculateZakat = () => {
		const zakatResult = calculateZakatDue(fields);
		setResult(zakatResult);
	};

	return (
		<div className="container py-2">
			<div className="rounded-lg dark:bg-dark">
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					<Nisab updateFields={updateFields} />
					<Assets updateFields={updateFields} />
					<Liabilities updateFields={updateFields} />
					<ZakatCalculationResult result={result} />
					<Button onClick={calculateZakat} className="col-span-full">
						Calculate Zakat
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Zakat;
