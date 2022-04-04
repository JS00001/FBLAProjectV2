import DownloadModal from './DownloadModal';
import HelpModal from './HelpModal';
import ReportsModal from './ReportsModal';

const Modals: React.FC = () => {
	return (
		<>
			<HelpModal />
			<DownloadModal />
			<ReportsModal />
		</>
	);
};

export default Modals;
