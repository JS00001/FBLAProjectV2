export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

const Badge: React.FC<BadgeProps> = ({ children, className = '', ...props }) => {
	return (
		<div
			className={`bg-primary rounded-full max-w-min py-1 px-4 text-white ${className}`}
			{...props}
		>
			{children}
		</div>
	);
};

export default Badge;
