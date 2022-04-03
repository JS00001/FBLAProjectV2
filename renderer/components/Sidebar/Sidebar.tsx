import React from 'react';

import useFilter from '../../hooks/useFilter';
import options from '../../data/options';
import Select from '../Select/Select';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Sidebar: React.FC = () => {
	const locations = useFilter();

	return (
		<aside className='main-bg-primary w-96 border-r main-border flex-shrink-0 overflow-y-auto'>
			<div className='p-8'>
				<h1 className='header'>Filters</h1>
				<div className='grid grid-cols-2 gap-2 pb-10'>
					{options.map((option, i) => (
						<Select key={i} name={option.name} options={option.options} />
					))}
				</div>
				<h1 className='header'>{locations.length} Result(s)</h1>
				<Button className='w-full' rounded='md'>
					Download Results
				</Button>
				<div>
					{locations.map((location, i) => (
						<Card key={i} className='my-5' location={location} />
					))}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
