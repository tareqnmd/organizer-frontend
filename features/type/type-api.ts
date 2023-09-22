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
						dispatch(
							apiSlice.util.updateQueryData(
								'getTypes',
								{},
								(draft: any) => {
									console.log('data', data);
									draft.push(data);
								}
							)
						);
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
						dispatch(
							apiSlice.util.updateQueryData(
								'getType',
								data._id,
								(draft) => {
									Object.assign(draft, data);
								}
							)
						);
						dispatch(
							apiSlice.util.updateQueryData(
								'getTypes',
								{},
								(draft: any) => {
									const editTask: any = draft?.find(
										(type: any) =>
											String(type._id) === String(arg.id)
									);
									Object.assign(editTask, arg?.data);
								}
							)
						);
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
				const typeDelete = dispatch(
					apiSlice.util.updateQueryData(
						'getTypes',
						{},
						(draft: any) =>
							draft?.filter(
								(type: any) => String(type._id) !== String(arg)
							)
					)
				);
				try {
					await queryFulfilled;
				} catch (error) {
					typeDelete.undo();
				}
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
