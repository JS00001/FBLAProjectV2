import { useDispatch } from 'react-redux';
import { HiOutlineNewspaper, HiOutlineDocumentSearch, HiOutlineSun } from 'react-icons/hi';

import Button from '../Button/Button';
import useTheme from '../../hooks/useTheme';
import modalAction from '../../redux/actions/modalAction';

const Navbar: React.FC = () => {
	const dispatch = useDispatch();
	const [_, switchTheme] = useTheme();

	const onThemeClick = () => {
		switchTheme();
	};

	const onHelpClick = () => {
		dispatch(modalAction.setActiveModal('HELP_MODAL'));
	};

	const onReportsClick = () => {
		dispatch(modalAction.setActiveModal('REPORTS_MODAL'));
	};

	return (
		<div className='main-bg-primary main-border border-b p-5'>
			<div className='flex justify-between'>
				<div></div>
				<div className='flex gap-x-4'>
					<Button
						id='Theme'
						rounded='full'
						size='none'
						color='secondary'
						className='p-3'
						onClick={onThemeClick}
					>
						<HiOutlineSun size={28} className='header' />
					</Button>
					<Button
						id='Help'
						rounded='full'
						size='none'
						color='secondary'
						className='p-3'
						onClick={onHelpClick}
					>
						<HiOutlineDocumentSearch size={28} className='header' />
					</Button>
					<Button
						id='Reports'
						rounded='full'
						size='none'
						color='secondary'
						className='p-3'
						onClick={onReportsClick}
					>
						<HiOutlineNewspaper size={28} className='header' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
