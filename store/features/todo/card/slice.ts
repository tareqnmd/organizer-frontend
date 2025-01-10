import {
	BoardItemsType,
	BoardSliceType,
	CardType,
	ListType,
} from '@/lib/helper/todo';
import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: BoardSliceType = {
	lists: [],
	cards: [],
	items: {},
	containers: [],
	boardId: '',
	getBoardContainer: (id: string) => {
		return initialState.lists.find((item) => item.id === id) ?? null;
	},
	getBoardCard: (id: string) => {
		return initialState.cards.find((item) => item.id === id) ?? null;
	},
};

const makeBoardItems = (lists: ListType[], cards: CardType[]) => {
	return lists.reduce((acc: BoardItemsType, list: ListType) => {
		acc[list.id] = cards
			.filter((card: CardType) => card.listId === list.id)
			.map((item: CardType) => item.id);
		return acc;
	}, {} as BoardItemsType);
};

const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		setInitialBoard: (state, action) => {
			state.lists = action.payload.lists;
			state.cards = action.payload.cards;
			state.items = makeBoardItems(
				action.payload.lists,
				action.payload.cards,
			);
			state.getBoardContainer = (id: string) =>
				action.payload.lists.find((item: ListType) => item.id === id) ??
				null;
			state.getBoardCard = (id: string) =>
				action.payload.cards.find((item: CardType) => item.id === id) ??
				null;
			state.boardId = action.payload.boardId;
			state.containers = Object.keys(state.items);
		},
		setBoardItems: (state, action) => {
			state.items = action.payload;
		},
		setContainers: (state, action) => {
			state.containers = action.payload;
		},
	},
});

export const { setInitialBoard, setBoardItems, setContainers } =
	boardSlice.actions;
export const getBoardState = (state: RootState): typeof initialState =>
	state.board;
export default boardSlice;
