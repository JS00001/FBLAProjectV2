import React from 'react';
import { RiLoader3Line } from 'react-icons/ri';

const colorClasses = {
	primary: 'button-primary text-white',
	secondary: 'button-secondary text-white',
};

const sizeClasses = {
	none: '',
	sm: 'px-4 py-1',
	md: 'px-8 py-2',
	lg: 'px-16 py-3',
};

const roundedClasses = {
	sm: 'rounded-sm',
	md: 'rounded',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full',
};

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	color?: keyof typeof colorClasses;
	size?: keyof typeof sizeClasses;
	rounded?: keyof typeof roundedClasses;
	icon?: React.ReactNode;
	disabled?: boolean;
	loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	className = '',
	color = 'primary',
	rounded = 'md',
	size = 'lg',
	loading,
	children,
	disabled,
	...props
}) => {
	const buttonClasses = `${colorClasses[color]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`;

	return (
		<button className={`${buttonClasses} font-medium text-sm`} {...props}>
			{loading ? <RiLoader3Line className='animate-spin' size={20} /> : children}
		</button>
	);
};

export default Button;
