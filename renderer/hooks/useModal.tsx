import type { modalState } from '../redux/reducers/modalReducer';
import modalAction from '../redux/actions/modalAction';
import { useDispatch, useSelector } from 'react-redux';

const useModal = (modalName: string) => {
	const dispatch = useDispatch();
	const isModalOpen = useSelector((state: { modal: modalState }) => state.modal === modalName);

	const closeModals = () => {
		dispatch(modalAction.closeModal());
	};

	return [isModalOpen, closeModals] as const;
};

export default useModal;
