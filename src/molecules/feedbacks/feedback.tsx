import { ListFeedback, PageFeedback, PreviewFeedback, SearchFeedback, TableFeedback } from 'molecules/feedbacks';

interface Feedback {
	type: string;
	icon?: any;
	title?: string;
	text?: string;
	tailwind?: any;
	children?: any;
}

const Feedback = ({ type, icon, title, text, tailwind, children }: Feedback) => {
	const props = { icon, title, text, tailwind, children };
	switch (type) {
		case 'list':
			return <ListFeedback {...props} />;

		case 'page':
			return <PageFeedback {...props} />;

		case 'preview':
			return <PreviewFeedback {...props} />;

		case 'search':
			return <SearchFeedback {...props} />;

		case 'table':
			return <TableFeedback {...props} />;

		default:
			return <PageFeedback {...props} />;
	}
};

export { Feedback };
