import {
	Feedback,
	FeedbackActions,
	FeedbackBody,
	FeedbackHeader,
	FeedbackIcon,
	FeedbackText,
	FeedbackTitle,
} from '@playbooks/ui/feedbacks';

const ListFeedback = ({ icon, title, text, children, tailwind }) => {
	// Render
	return (
		<Feedback align='text-center' spacing='p-4' {...tailwind?.feedback}>
			<FeedbackHeader>
				<FeedbackIcon icon={icon} fontSize='text-3xl' {...tailwind?.icon} />
			</FeedbackHeader>
			<FeedbackBody>
				<FeedbackTitle>{title}</FeedbackTitle>
				<FeedbackText>{text}</FeedbackText>
				{children && <FeedbackActions display='flex-middle'>{children}</FeedbackActions>}
			</FeedbackBody>
		</Feedback>
	);
};

export { ListFeedback };
