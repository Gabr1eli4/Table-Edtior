import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { hideToast } from '../slices/toastSlice';

interface ToastType {
	message: string;
	duration: number;
}

const Toast = ({message, duration = 3000}: ToastType) => {
	const { updateStatus, updateError } = useAppSelector(state => state.data);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(hideToast());
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [duration, hideToast])

	return (
		<div className={`toast show ${updateStatus === "rejected" ? 'error' : 'success'}`}>
			<div className="toast-message">{updateError ? updateError : "Success"}</div>
		</div>
	)
}

export { Toast };