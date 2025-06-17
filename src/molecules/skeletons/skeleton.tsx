import {
	BasicSkeleton,
	GridSkeleton,
	ItemSkeleton,
	ListSkeleton,
	SearchSkeleton,
	TableSkeleton,
} from 'molecules/skeletons';

export const Skeleton = props => {
	switch (props.type) {
		case 'grid':
			return <GridSkeleton {...props} />;

		case 'item':
			return <ItemSkeleton {...props} />;

		case 'list':
			return <ListSkeleton {...props} />;

		case 'search':
			return <SearchSkeleton {...props} />;

		case 'table':
			return <TableSkeleton {...props} />;

		default:
			return <BasicSkeleton {...props} />;
	}
};

// Docs:
// https://github.com/dvtng/react-loading-s#readme
