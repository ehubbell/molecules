import { ErrorToast, InfoToast, SuccessToast } from 'molecules/toasts';

export const Toast = props => {
	switch (props.type) {
		case 'error':
			return <ErrorToast {...props} />;

		case 'info':
			return <InfoToast {...props} />;

		case 'success':
			return <SuccessToast {...props} />;

		default:
			return <SuccessToast {...props} />;
	}
};
