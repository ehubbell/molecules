import { Li, Span } from '@playbooks/ui/html';
import { SectionSubtitle, SectionText } from '@playbooks/ui/sections';
import { Skeleton } from 'molecules/skeletons';

export const TextItem = ({ keyName, disclaimer, loading, value, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' width='w-full' {...tailwind?.li}>
			<Span display='flex-start' space='space-x-4'>
				<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
				<SectionSubtitle opacity='opacity-75' fontSize='text-sm'>
					{disclaimer}
				</SectionSubtitle>
			</Span>
			{loading ? (
				<Skeleton className='w-20' />
			) : (
				<SectionText fontSize='text-sm' {...tailwind?.value}>
					{value}
				</SectionText>
			)}
		</Li>
	);
};
