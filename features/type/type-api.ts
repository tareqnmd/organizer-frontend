import apiSlice from '../api/api-slice';

export const typeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTypes: builder.query({
			query: () => ({
				url: '/type',
			}),
		}),
		getType: builder.query({
			query: (id) => ({
				url: `/type/${id}`,
			}),
		}),
		addType: builder.mutation({
			query: (payload) => ({
				url: '/type',
				method: 'POST',
				body: payload,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
					}
				} catch (error) {}
			},
		}),
		editType: builder.mutation({
			query: (payload) => ({
				url: `/type/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
					}
				} catch (error) {}
			},
		}),
		deleteType: builder.mutation({
			query: (id) => ({
				url: `/type/${id}`,
				method: 'DELETE',
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					console.log('data', data);
					if (data) {
					}
				} catch (error) {}
			},
		}),
	}),
});

export const {
	useGetTypeQuery,
	useGetTypesQuery,
	useAddTypeMutation,
	useEditTypeMutation,
	useDeleteTypeMutation,
} = typeApi;
