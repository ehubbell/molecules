import {
	Feedback,
	FeedbackActions,
	FeedbackBody,
	FeedbackHeader,
	FeedbackIcon,
	FeedbackText,
	FeedbackTitle,
} from '@playbooks/ui/feedbacks';

const PageFeedback = ({ icon, title, text, children, tailwind }) => {
	// Render
	return (
		<Feedback align='text-left' border='border' spacing='py-8 px-4' {...tailwind?.feedback}>
			<FeedbackHeader>
				<FeedbackIcon icon={icon} fontSize='text-4xl' {...tailwind?.icon} />
			</FeedbackHeader>
			<FeedbackBody>
				<FeedbackTitle>{title}</FeedbackTitle>
				<FeedbackText>{text}</FeedbackText>
			</FeedbackBody>
			{children && <FeedbackActions display='flex-start'>{children}</FeedbackActions>}
		</Feedback>
	);
};

export { PageFeedback };
