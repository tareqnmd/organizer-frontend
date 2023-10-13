import apiSlice from '@/features/api';
import transactionsSlice from '@/features/hisab/transactions/slice';
import themeSlice from '@/features/theme/slice';
import userSlice from '@/features/user/slice';
import storage from '@/utils/redux-persist/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';

const persistConfig = {
	key: 'hisab',
	version: 1,
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	[userSlice.name]: userSlice.reducer,
	[transactionsSlice.name]: transactionsSlice.reducer,
	[themeSlice.name]: themeSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(apiSlice.middleware),
});

const makeStore = () => store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
export default store;
