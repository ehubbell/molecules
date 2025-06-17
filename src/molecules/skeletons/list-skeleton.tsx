import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from '@playbooks/ui/cards';
import { Skeleton } from '@playbooks/ui/components';
import { Span } from '@playbooks/ui/html';

const ListSkeleton = ({ tailwind }) => (
	<Card border='border-b' borderRadius='' display='flex-between' space='space-x-4' spacing='py-4' {...tailwind?.card}>
		<Span display='flex-start' space='space-x-4' width='w-full'>
			<CardHeader aspect='aspect-[1/1]' borderRadius='rounded-md' bgColor='' width='w-20 lg:w-24' {...tailwind?.header}>
				<Skeleton />
			</CardHeader>
			<CardBody spacing='' width='w-full'>
				<CardTitle display='' {...tailwind?.title}>
					<Skeleton width='50%' />
				</CardTitle>
				<CardSubtitle {...tailwind?.subtitle}>
					<Skeleton width='75%' />
				</CardSubtitle>
			</CardBody>
		</Span>
		<Span aspect='aspect-[1/1]' flex='shrink-0' width='w-8'>
			<Skeleton />
		</Span>
	</Card>
);

export { ListSkeleton };
