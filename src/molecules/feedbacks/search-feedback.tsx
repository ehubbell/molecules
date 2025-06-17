import { Feedback, FeedbackActions, FeedbackBody, FeedbackIcon, FeedbackText } from '@playbooks/ui/feedbacks';

const SearchFeedback = ({ icon, text, children, tailwind }) => {
	// Render
	return (
		<Feedback align='text-center' spacing='p-4' {...tailwind?.feedback}>
			<FeedbackBody>
				<FeedbackIcon icon={icon} {...tailwind?.icon} />
				<FeedbackText>{text}</FeedbackText>
				{children && <FeedbackActions display='flex-middle'>{children}</FeedbackActions>}
			</FeedbackBody>
		</Feedback>
	);
};

export { SearchFeedback };
