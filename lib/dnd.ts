export const TASK_DATA = [
	{
		id: '1',
		title: 'List 1',
		sort: 0,
		cards: [
			{
				id: 'list_1_card_1',
				listId: '1',
				title: 'List 1 Card 1',
				sort: 0,
			},
			{
				id: 'list_1_card_2',
				listId: '1',
				title: 'List 1 Card 2',
				sort: 1,
			},
		],
	},
	{
		id: '2',
		title: 'List 2',
		sort: 1,
		cards: [
			{
				id: 'list_2_card_1',
				listId: '2',
				title: 'List 2 Card 1',
				sort: 0,
			},
			{
				id: 'list_2_card_2',
				listId: '2',
				title: 'List 2 Card 2',
				sort: 1,
			},
		],
	},
	{
		id: '3',
		title: 'List 3',
		sort: 2,
		cards: [
			{
				id: 'list_3_card_1',
				listId: '3',
				title: 'List 3 Card 1',
				sort: 0,
			},
			{
				id: 'list_3_card_2',
				listId: '3',
				title: 'List 3 Card 2',
				sort: 1,
			},
		],
	},
	{
		id: '4',
		title: 'List 4',
		sort: 3,
		cards: [
			{
				id: 'list_3_card_3',
				listId: '4',
				title: 'List 3 Card 3',
				sort: 0,
			},
			{
				id: 'list_4_card_1',
				listId: '4',
				title: 'List 4 Card 1',
				sort: 1,
			},
		],
	},
];

export const getListTaskData = (data = []) => {
	try {
		const listItems: any = [];
		const cardItems: any = [];
		data?.map((list: any) => {
			const { cards, ...rest } = list;
			listItems.push(rest);
			cards.map((card: any) => {
				cardItems.push(card);
			});
		});
		return { listItems, cardItems };
	} catch (error) {
		return { listItems: [], cardItems: [] };
	}
};
