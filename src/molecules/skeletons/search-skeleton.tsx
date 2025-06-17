import { Card, CardBody, CardHeader, CardTitle } from '@playbooks/ui/cards';
import { Skeleton } from '@playbooks/ui/components';
import { Span } from '@playbooks/ui/html';

const SearchSkeleton = ({ tailwind }) => (
	<Card border='border-b' borderRadius='' display='flex-between' space='space-x-4' spacing='p-4' {...tailwind?.card}>
		<Span display='flex-start' flex='grow' space='space-x-4' {...tailwind?.span}>
			<CardHeader aspect='aspect-[1/1]' borderRadius='rounded-md' bgColor='' width='w-10' {...tailwind?.header}>
				<Skeleton leading='leading-[inherit]' />
			</CardHeader>
			<CardBody space='space-y-2' spacing='' width='w-full'>
				<CardTitle display='' className='w-1/2'>
					<Skeleton />
				</CardTitle>
			</CardBody>
		</Span>
		<Span aspect='aspect-[1/1]' width='w-8'>
			<Skeleton />
		</Span>
	</Card>
);

export { SearchSkeleton };

// Docs:
// https://github.com/dvtng/react-loading-s#readme
