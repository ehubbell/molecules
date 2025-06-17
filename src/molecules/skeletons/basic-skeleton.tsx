import { Skeleton } from '@playbooks/ui/components';

export const BasicSkeleton = ({ theme, className, tailwind = {} }) => {
	return <Skeleton theme={theme} className={className} {...tailwind} />;
};
