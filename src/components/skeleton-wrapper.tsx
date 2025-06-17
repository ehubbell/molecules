import { useEffect, useState } from 'react';

import { Skeleton } from '@playbooks/ui/components';

const SkeletonWrapper = ({ theme = null, height = '100%', width = '100%', className = '', ...tailwind }) => {
	const [loaded, setLoaded] = useState(false);

	// Computed
	const color = 'dark:text-[#374151] text-[#e5e7eb]';
	const highlight = 'dark:text-[#4b5563] text-[#d1d5db]';
	const computed = { color, highlight, height, width, className };

	// Hooks
	useEffect(() => {
		setLoaded(true);
	}, []);

	return loaded ? <Skeleton {...computed} {...tailwind} /> : null;
};

export { SkeletonWrapper };

// Docs
// https://github.com/dvtng/react-loading-skeleton#readme
