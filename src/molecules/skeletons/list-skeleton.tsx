import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from '@playbooks/ui/cards';
import { Skeleton } from '@playbooks/ui/components';
import { Span } from '@playbooks/ui/html';

const ListSkeleton = ({ tailwind }) => (
	<Card border='border-b' borderRadius='' display='flex-between' space='space-x-4' spacing='py-4' {...tailwind?.card}>
		<Span display='flex-start' space='space-x-4' width='w-full'>
			<CardHeader aspect='aspect-[1/1]' borderRadius='rounded-md' bgColor='' width='w-20 lg:w-24' {...tailwind?.header}>
				<Skeleton leading='leading-[inherit]' />
			</CardHeader>
			<CardBody spacing='' width='w-full'>
				<CardTitle display='' {...tailwind?.title}>
					<Skeleton width='w-1/2' />
				</CardTitle>
				<CardSubtitle {...tailwind?.subtitle}>
					<Skeleton width='w-3/4' />
				</CardSubtitle>
			</CardBody>
		</Span>
		<Span aspect='aspect-[1/1]' flex='shrink-0' width='w-8'>
			<Skeleton />
		</Span>
	</Card>
);

export { ListSkeleton };
