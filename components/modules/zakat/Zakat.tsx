'use client';
import React, { useState } from 'react';
import { calculateZakat, ZakatFormItems } from './helper';

const Zakat: React.FC = () => {
	const [fields, setFields] = useState<Record<string, number>>({});
	const [zakatDue, setZakatDue] = useState<number>(0);

	return (
		<div className="grid h-full place-items-center">
			<div className="mx-auto max-w-md rounded-lg bg-white p-4 shadow-md">
				<h1 className="mb-4 text-center text-2xl font-bold">
					Zakat Calculator
				</h1>
				{ZakatFormItems.map((item) => (
					<div key={item.name}>
						<h2 className="text-lg font-semibold">{item.label}</h2>
						{item.children.map((child) => (
							<div key={child.name}>
								<label htmlFor={child.name}>
									{child.label}
								</label>
								<input
									value={fields[child.name] || ''}
									onChange={(e) =>
										setFields({
											...fields,
											[child.name]: Number(
												e.target.value,
											),
										})
									}
									placeholder={child.placeholder}
									className="mb-4 w-full rounded border border-gray-300 p-2"
								/>
							</div>
						))}
					</div>
				))}
				<button
					className="w-full rounded bg-blue-500 p-2 text-white transition hover:bg-blue-600"
					onClick={() => setZakatDue(calculateZakat(fields))}
				>
					Calculate Zakat
				</button>
				{zakatDue > 0 && (
					<div className="mt-4 text-green-600">
						Your Zakat due: {zakatDue.toFixed(2)}
					</div>
				)}
				{zakatDue === 0 && (
					<div className="mt-4 text-red-600">
						You do not meet the Nisab.
					</div>
				)}
			</div>
		</div>
	);
};

export default Zakat;
