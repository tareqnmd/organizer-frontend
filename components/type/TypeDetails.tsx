'use client';
import { useGetTypesQuery } from '@/features/type/type-api';
import TypeList from './TypeList';

const TypeDetails = () => {
	const { data: types } = useGetTypesQuery({});
	return <TypeList types={types} />;
};

export default TypeDetails;
