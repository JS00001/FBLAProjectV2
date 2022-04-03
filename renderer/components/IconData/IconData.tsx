export type IconDataProps = React.HTMLAttributes<HTMLDivElement> & {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
};

const IconData = ({ icon, title, subtitle, className = '', ...props }) => {
	return (
		<div
			className={`border main-border-secondary p-6 rounded-md flex flex-row items-center gap-3 ${className}`}
			{...props}
		>
			{icon}
			<div className='leading-tight'>
				<h5 className='header text-2xl m-0'>{title}</h5>
				<h4 className='subtitle m-0'>{subtitle}</h4>
			</div>
		</div>
	);
};

export default IconData;
