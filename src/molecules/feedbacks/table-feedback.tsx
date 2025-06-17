import { Feedback, FeedbackBody, FeedbackIcon, FeedbackText, FeedbackTitle } from '@playbooks/ui/feedbacks';

const TableFeedback = ({ icon, title, text, tailwind }) => {
	// Render
	return (
		<Feedback align='text-center' borderRadius='' spacing='p-4' {...tailwind?.feedback}>
			<FeedbackBody>
				<FeedbackIcon icon={icon} {...tailwind?.icon} />
				<FeedbackTitle>{title}</FeedbackTitle>
				<FeedbackText>{text}</FeedbackText>
			</FeedbackBody>
		</Feedback>
	);
};

export { TableFeedback };
