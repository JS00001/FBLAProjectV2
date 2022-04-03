import usePageData from '../../hooks/usePageData';
import { Card as CardUI } from '@nextui-org/react';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
	location: Location;
	className?: string;
};

const Card: React.FC<CardProps> = ({ location, className = '', ...props }) => {
	const [_, setPageData] = usePageData();

	const onClick = () => {
		setPageData(location);
	};

	return (
		<div className={`${className}`} {...props}>
			<CardUI
				hoverable
				clickable
				shadow={false}
				className='main-border main-bg-secondary'
				onClick={onClick}
			>
				<CardUI.Body css={{ p: 12 }}>
					<CardUI.Image objectFit='cover' src={location.Image} />
					<p className='subtitle'>{location.Address}</p>
				</CardUI.Body>
				<CardUI.Footer className='flex justify-between' css={{ p: 12 }}>
					<p className='title'>{location.Title}</p>
					<p className='subtitle'>{location.Distance} miles away</p>
				</CardUI.Footer>
			</CardUI>
		</div>
	);
};

export default Card;
