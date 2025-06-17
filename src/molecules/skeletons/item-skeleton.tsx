import { Fragment } from 'react';

import { listBuilder } from '@ehubbell/utils';
import { Skeleton } from '@playbooks/ui/components';
import { Item } from 'molecules/items';

const ItemSkeleton = ({ count }) => (
	<Fragment>
		{listBuilder(count).map((v, i) => (
			<Item
				type='text'
				key={i}
				keyName={<Skeleton width='w-1/4' />}
				value={<Skeleton width='w-1/4' />}
				width='w-full'
			/>
		))}
	</Fragment>
);

export { ItemSkeleton };

// Docs:
// https://github.com/dvtng/react-loading-s#readme
