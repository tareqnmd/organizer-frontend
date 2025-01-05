import apiSlice from '@/store/features/api';
import storage from '@/store/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import themeSlice from './features/theme/slice';
import boardSlice from './features/todo/card/slice';

const persistConfig = {
	key: 'organizer',
	version: 1,
	storage,
	whitelist: ['user', 'theme'],
};

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	[themeSlice.name]: themeSlice.reducer,
	[boardSlice.name]: boardSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({
			serializableCheck: false,
		}).concat(apiSlice.middleware),
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const persistor = persistStore(store);
export default store;
