import { BtnPagination, PagePagination, SliderPagination } from 'molecules/paginations';

const Pagination = ({ type = 'page', meta, params, setParams, taskRunning = false }) => {
	const props = { meta, params, setParams };
	// Render
	switch (type) {
		case 'btn':
			return <BtnPagination {...props} taskRunning={taskRunning} />;

		case 'page':
			return <PagePagination {...props} />;

		case 'slider':
			return <SliderPagination {...props} />;
	}
};

export { Pagination };
