import {
	HiOutlineLocationMarker,
	HiOutlineGlobe,
	HiOutlineStar,
	HiOutlinePresentationChartLine,
	HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import Badge from '../Badge/Badge';
import Empty from '../Empty/Empty';
import IconData from '../IconData/IconData';
import usePageData from '../../hooks/usePageData';

const Page: React.FC = () => {
	const [pageData] = usePageData();

	if (!pageData)
		return (
			<div className='main-bg-primary flex-grow'>
				<Empty
					image='/empty-location.png'
					darkImage='/dark-empty-location.png'
					title='Nothing to See Here'
					subtitle='Select a location to view more'
				/>
			</div>
		);

	return (
		<div className='main-bg-primary flex-grow py-44 px-64'>
			<div className='flex justify-between mb-24'>
				<div className=''>
					<Badge className='mb-10'>{pageData.Category}</Badge>
					<h1 className='header text-5xl mb-4'>{pageData.Title}</h1>
					<span className='flex flex-row subtitle'>
						<HiOutlineLocationMarker size={22} />
						{pageData.Address}
					</span>
				</div>
				<div>
					<img
						src={pageData.Image}
						className='rounded-xl h-56 border main-border'
						alt={pageData.Title}
					/>
				</div>
			</div>
			<div className='grid grid-cols-4 gap-6'>
				<IconData
					icon={<HiOutlineGlobe className='subtitle' size={30} />}
					title='Distance'
					subtitle={pageData.Distance + ' mile(s)'}
				/>
				<IconData
					icon={<HiOutlineStar className='subtitle' size={30} />}
					title='Rating'
					subtitle={pageData.Rating}
				/>
				<IconData
					icon={<HiOutlinePresentationChartLine className='subtitle' size={30} />}
					title='Popularity'
					subtitle={pageData.Popularity}
				/>
				<IconData
					icon={<HiOutlineCurrencyDollar className='subtitle' size={30} />}
					title='Price'
					subtitle={pageData.Price}
				/>
			</div>
		</div>
	);
};

export default Page;
