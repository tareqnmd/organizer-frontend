import apiSlice from '@/features/api/api-slice';
import themeSlice from '@/features/theme/theme-slice';
import transactionsSlice from '@/features/transactions/transactions-slice';
import userSlice from '@/features/user/user-slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
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
