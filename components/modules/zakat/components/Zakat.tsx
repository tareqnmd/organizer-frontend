'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import {
	calculateZakatDue,
	validateZakatFields,
	ZakatCalculationType,
	ZakatField,
	ZakatResult,
} from '../helper';
import Assets from './Assets';
import Liabilities from './Liabilities';
import Nisab from './Nisab';
import ZakatCalculationResult from './ZakatCalculationResult';

const Zakat: React.FC = () => {
	const [advanceMode, setAdvanceMode] = useState(false);
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
		const isValid = validateZakatFields(fields);
		if (!isValid) return;
		const zakatResult = calculateZakatDue(fields);
		setResult(zakatResult);
		setFields([]);
	};

	const advanceModeChange = (checked: boolean) => {
		setFields([]);
		setAdvanceMode(checked);
	};

	return (
		<div className="container py-2">
			<div className="flex flex-col gap-3">
				<Label className="ml-auto flex w-max cursor-pointer items-center gap-1">
					<Checkbox
						checked={advanceMode}
						onCheckedChange={advanceModeChange}
					/>
					Advance Mode
				</Label>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					<Nisab updateFields={updateFields} />
					<Assets
						advanceMode={advanceMode}
						updateFields={updateFields}
					/>
					<Liabilities
						advanceMode={advanceMode}
						updateFields={updateFields}
					/>
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
