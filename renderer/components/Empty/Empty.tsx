import useTheme from '../../hooks/useTheme';

export type EmptyProps = React.HTMLAttributes<HTMLDivElement> & {
	image: string;
	darkImage?: string;
	title: string;
	subtitle: string;
};

const Empty: React.FC<EmptyProps> = ({
	image,
	darkImage,
	title,
	subtitle,
	className = '',
	...props
}) => {
	const [theme] = useTheme();

	return (
		<div className={`flex justify-center items-center h-full flex-col`} {...props}>
			{theme === 'dark' && darkImage && <img src={darkImage} alt='dark-image' />}
			{theme === 'light' && <img src={image} alt='light-image' />}
			<p className='header text-4xl'>{title}</p>
			<p className='subtitle'>{subtitle}</p>
		</div>
	);
};

export default Empty;
