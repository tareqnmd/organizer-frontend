import { TagsEnum } from '@/store/enum';
import apiSlice from '../api';

export const optionsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOptions: builder.query({
			query: (url) => ({
				url: url,
			}),
			providesTags: (result, error, arg) => [TagsEnum.OPTIONS, arg],
		}),
	}),
});

export const { useGetOptionsQuery } = optionsApi;
