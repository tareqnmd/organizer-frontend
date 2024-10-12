'use client';
import FormSelect from '@/components/common/input/Select';
import { useState } from 'react';
const WORKSPACES = [
	{
		id: 1,
		name: 'Workspace 1',
	},
	{
		id: 2,
		name: 'Workspace 2',
	},
];
const TaskModuleLayout = () => {
	const [workspaceId, setWorkspaceId] = useState<string>('');
	return (
		<FormSelect
			extraTriggerClassName="py-0 border-t-0 border-l-0 border-r-0 rounded-none overflow-hidden w-[200px] focus-visible:ring-0 focus-visible:outline-none
            focus:outline-none
            focus:ring-offset-0
            "
			input={{
				name: 'workspaceId',
				label: 'Workspace',
				placeholder: 'Select Workspace',
				staticOptions: WORKSPACES.map((workspace) => ({
					value: workspace.id,
					label: workspace.name,
				})),
			}}
			field={{
				value: workspaceId,
				onChange: (e: any) => {
					setWorkspaceId(e);
				},
			}}
		/>
	);
};

export default TaskModuleLayout;
