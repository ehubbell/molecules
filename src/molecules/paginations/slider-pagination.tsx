import { useMemo } from 'react';

import { Span } from '@playbooks/ui/html';
import { Pagination, PaginationNext, PaginationPrev } from '@playbooks/ui/paginations';

const SliderPagination = ({ meta, params, setParams }) => {
	// Computed
	const page = useMemo(() => {
		return meta?.page || 0;
	}, [meta.page]);

	const totalPages = useMemo(() => {
		return Math.ceil(meta?.totalRecords / (meta?.pageSize || 10000000));
	}, [meta.totalRecords]);

	// Render
	if (totalPages === 0) return null;
	return (
		<Pagination border='' borderRadius='' divide='' display='flex-middle'>
			<PaginationPrev
				border=''
				borderRadius='rounded-md'
				page={page - 1}
				disabled={page < 1}
				onClick={() => setParams({ ...params, page: page - 1 })}
			/>
			<Span color='text-gray-500' fontSize='text-sm' fontWeight='font-medium' spacing='p-2'>
				{page + 1} of {totalPages}
			</Span>
			<PaginationNext
				border=''
				borderRadius='rounded-md'
				page={page + 1}
				disabled={page >= totalPages - 1}
				onClick={() => setParams({ ...params, page: page + 1 })}
			/>
		</Pagination>
	);
};

export { SliderPagination };
