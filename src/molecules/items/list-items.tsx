import { Li, Span, Ul } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';
import { Skeleton } from 'molecules/skeletons';

export const ListItems = ({ keyName, loading, value, children, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-column' space='' spacing='py-4' {...tailwind?.li}>
			<Span display='flex-between' space='space-x-4' {...tailwind?.span}>
				<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			</Span>
			<Ul border='border' borderRadius='rounded-md' height='min-h-[20px]' spacing='px-4' {...tailwind?.ul}>
				{loading ? <Skeleton className='w-20' /> : children}
			</Ul>
		</Li>
	);
};
