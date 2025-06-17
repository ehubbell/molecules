import { Fragment, useEffect, useState } from 'react';

import { toNumber } from '@ehubbell/utils';
import { Small } from '@playbooks/ui/fonts';
import {
	Pagination,
	PaginationBtn,
	PaginationFirst,
	PaginationLast,
	PaginationNext,
	PaginationPrev,
} from '@playbooks/ui/paginations';

const PagePagination = ({ meta, params, setParams }) => {
	const [pages, setPages] = useState([]);

	// Computed
	const page = meta?.page;
	const pageSize = meta?.pageSize;
	const totalRecords = meta?.totalRecords;
	const totalPages = Math.ceil(totalRecords / pageSize);

	// Hook
	useEffect(() => {
		if (totalPages >= 1) fetchPages();
	}, [meta]);

	// Methods
	const fetchPages = () => {
		const initialPage =
			page === 0 ? 1 : page < 3 ? 1 : totalPages < 3 ? 1 : page === totalPages ? totalPages - 2 : page - 1;
		const pages = [initialPage];
		const maxCount = totalPages < 5 ? totalPages : 5;
		while (pages.length < totalPages && pages.length < maxCount) {
			pages.push(pages[pages.length - 1] + 1);
		}
		setPages(pages);
	};

	// Render
	return (
		<Fragment>
			<Pagination>
				<PaginationFirst page={1} disabled={page === 0} onClick={() => setParams({ ...params, page: 0 })} />
				<PaginationPrev page={page - 1} disabled={page < 1} onClick={() => setParams({ ...params, page: page - 1 })} />
				{pages.map(value => (
					<PaginationBtn
						key={value}
						page={value}
						active={page + 1 === value}
						onClick={() => setParams({ ...params, page: value - 1 })}
					/>
				))}
				<PaginationNext
					page={page + 1}
					disabled={page >= totalPages - 1}
					onClick={() => setParams({ ...params, page: page + 1 })}
				/>
				<PaginationLast
					page={pages.length}
					disabled={page >= totalPages - 1}
					onClick={() => setParams({ ...params, page: totalPages - 1 })}
				/>
			</Pagination>
			<Small>{toNumber(meta.totalRecords)} records</Small>
		</Fragment>
	);
};

export { PagePagination };
