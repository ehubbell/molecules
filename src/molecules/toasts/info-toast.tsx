import { useEffect, useState } from 'react';

import { Toast, ToastBody, ToastHeader, ToastIcon, ToastText, ToastTitle } from '@playbooks/ui/toasts';
import { sleep } from 'utils';

const InfoToast = ({ toast, onRemove }) => {
	const [open, setOpen] = useState(true);

	// Hooks
	useEffect(() => {
		sleep(3000)?.then(() => setOpen(false));
	}, []);

	// Render
	return (
		<Toast open={open} setOpen={setOpen} onRemove={() => onRemove(toast)}>
			<ToastHeader onRemove={() => onRemove(toast)} className='flex-start'>
				<ToastIcon icon='circle-info' color='text-primary dark:text-secondary-300' />
				<ToastTitle>{toast.title}</ToastTitle>
			</ToastHeader>
			{toast.message && (
				<ToastBody>
					<ToastText>{toast.message}</ToastText>
				</ToastBody>
			)}
		</Toast>
	);
};

export default InfoToast;
