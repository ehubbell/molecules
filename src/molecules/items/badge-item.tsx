import { Badge } from '@playbooks/ui/badges';
import { Skeleton } from '@playbooks/ui/components';
import { Small } from '@playbooks/ui/fonts';
import { Li } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';

export const BadgeItem = ({ keyName, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{loading ? (
				<Skeleton className='w-20' />
			) : value ? (
				<Badge type={value} textTransform=''>
					{value}
				</Badge>
			) : (
				<Small>--</Small>
			)}
		</Li>
	);
};
