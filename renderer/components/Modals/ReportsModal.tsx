import useModal from '../../hooks/useModal';
import { Modal } from '@nextui-org/react';
import useTheme from '../../hooks/useTheme';

const ReportsModal: React.FC = () => {
	const [theme] = useTheme();
	const [isOpen, closeModals] = useModal('REPORTS_MODAL');

	return (
		<Modal
			width='500px'
			open={isOpen}
			onClose={closeModals}
			closeButton
			css={{ ...(theme === 'dark' && { backgroundColor: '#232323', color: '#fff' }) }}
		>
			<Modal.Header>
				<span className='text-xl font-semibold'>Reports</span>
			</Modal.Header>
		</Modal>
	);
};

export default ReportsModal;
