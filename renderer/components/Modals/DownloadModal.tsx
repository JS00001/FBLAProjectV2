import { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import useModal from '../../hooks/useModal';
import { Checkbox, Modal } from '@nextui-org/react';
import useTheme from '../../hooks/useTheme';
import options from '../../data/options';
import Button from '../Button/Button';
import fetch from 'node-fetch';
import useFilter from '../../hooks/useFilter';
import Store from 'electron-store';
import { useDispatch } from 'react-redux';
import modalAction from '../../redux/actions/modalAction';

const DownloadModal: React.FC = () => {
	const dispatch = useDispatch();
	const locations = useFilter();
	const [theme] = useTheme();
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<string[]>([]);
	const [isOpen, closeModals] = useModal('DOWNLOAD_MODAL');

	const onChange = (option: string) => {
		if (selected.includes(option)) {
			setSelected(selected.filter((item) => item !== option));
		} else {
			setSelected([...selected, option]);
		}
	};

	const onSubmit = () => {
		setLoading(true);

		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: locations,
				selected,
			}),
		};

		fetch('https://static.jsenyitko.tech/pdf', config).then(async (res) => {
			if (res.ok) {
				const store = new Store();
				const documentUrl = await res.text();
				setLoading(false);

				const storeDocument = {
					documentUrl,
					date: new Date().toLocaleString([], { timeStyle: 'short' }),
					pdfString: documentUrl.split('/').pop(),
				};

				if (store.get('documents')) {
					store.set('documents', [storeDocument, ...(store.get('documents') as any)]);
				} else {
					store.set('documents', [storeDocument]);
				}

				dispatch(modalAction.setActiveModal('REPORTS_MODAL'));
			}
		});
	};

	return (
		<Modal
			width='500px'
			open={isOpen}
			onClose={closeModals}
			closeButton
			css={{ ...(theme === 'dark' && { backgroundColor: '#232323', color: '#fff' }) }}
		>
			<Modal.Header>
				<span className='text-xl font-semibold'>Download Results</span>
			</Modal.Header>

			<Modal.Body>
				{!loading && (
					<>
						<div className='grid grid-cols-2'>
							{options.map((option, i) => (
								<Checkbox key={i} label={option.name} onChange={() => onChange(option.name)} />
							))}
						</div>
						<Button onClick={onSubmit}>Download</Button>
					</>
				)}

				{loading && (
					<div className='flex justify-center items-center'>
						<CgSpinner size={45} className='animate-spin' />
					</div>
				)}
			</Modal.Body>
		</Modal>
	);
};

export default DownloadModal;
