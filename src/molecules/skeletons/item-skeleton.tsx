import { Fragment } from 'react';

import { listBuilder } from '@ehubbell/utils';
import { Skeleton } from '@playbooks/ui/components';
import { Item } from 'molecules/items';

const ItemSkeleton = ({ count }) => (
	<Fragment>
		{listBuilder(count).map((v, i) => (
			<Item type='text' key={i} keyName={<Skeleton width='20%' />} value={<Skeleton width='20%' />} width='w-full' />
		))}
	</Fragment>
);

export { ItemSkeleton };

// Docs:
// https://github.com/dvtng/react-loading-s#readme
