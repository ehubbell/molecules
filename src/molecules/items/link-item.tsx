import { Fragment } from 'react';

import { Li, Span } from '@playbooks/ui/html';
import { AccentLink } from '@playbooks/ui/links';
import { SectionSubtitle } from '@playbooks/ui/sections';

export const LinkItem = ({ keyName, loading, value, display, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{value ? (
				<Fragment>
					<AccentLink
						size=''
						bgColor=''
						nextIcon='arrow-up-right'
						color='text-blue-500 dark:text-cyan-500'
						hover='h:underline'
						href={value}
						target='_blank'>
						{display ? display : 'View'}
					</AccentLink>
				</Fragment>
			) : (
				<Span color='text-gray-700 dark:text-gray-400'>--</Span>
			)}
		</Li>
	);
};
