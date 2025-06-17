import { Card, CardBody, CardFooter, CardHeader, CardPretitle, CardSubtitle, CardTitle } from '@playbooks/ui/cards';
import { Skeleton } from '@playbooks/ui/components';
import { Span } from '@playbooks/ui/html';

const GridSkeleton = ({ tailwind }) => {
	// Render
	return (
		<Card border='border' display='flex-column' spacing='' {...tailwind?.card}>
			<CardHeader aspect='aspect-[16/9]' bgColor=''>
				<Skeleton className='w-full' />
			</CardHeader>
			<CardBody space='space-y-2' spacing='p-4'>
				<CardPretitle display=''>
					<Skeleton width='25%' />
				</CardPretitle>
				<CardTitle display=''>
					<Skeleton width='50%' />
				</CardTitle>
				<CardSubtitle>
					<Skeleton width='75%' />
				</CardSubtitle>
			</CardBody>
			<CardFooter border='' display='flex-between' space='space-x-4' spacing='p-4'>
				<Span display='flex-start' space='space-x-4'>
					<Span width='w-24'>
						<Skeleton />
					</Span>
					<Span width='w-24'>
						<Skeleton />
					</Span>
				</Span>
			</CardFooter>
		</Card>
	);
};

export { GridSkeleton };
