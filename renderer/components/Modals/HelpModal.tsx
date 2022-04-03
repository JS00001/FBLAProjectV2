import useModal from '../../hooks/useModal';
import { Modal } from '@nextui-org/react';
import useTheme from '../../hooks/useTheme';

const HelpModal: React.FC = () => {
	const [theme] = useTheme();
	const [isOpen, closeModals] = useModal('HELP_MODAL');

	return (
		<Modal
			width='500px'
			open={isOpen}
			onClose={closeModals}
			closeButton
			css={{ ...(theme === 'dark' && { backgroundColor: '#232323', color: '#fff' }) }}
		>
			<Modal.Header>
				<span className='text-xl font-semibold'>Help</span>
			</Modal.Header>
		</Modal>
	);
};

export default HelpModal;
