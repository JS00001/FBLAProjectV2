import { useDispatch } from 'react-redux';
import filterActions from '../../redux/actions/filterActions';

export type SelectProps = React.HTMLAttributes<HTMLSelectElement> & {
	name: string;
	options: string[];
};

const Select: React.FC<SelectProps> = ({ name, options, ...props }) => {
	const dispatch = useDispatch();

	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = parseInt(e.target.value);
		dispatch(filterActions.addFilter(name, value));
	};

	return (
		<select
			onChange={onChange}
			className='button-secondary title text-base text-center py-1 rounded-full'
			{...props}
		>
			{options.map((option, index) => (
				<option key={index} value={index}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Select;
