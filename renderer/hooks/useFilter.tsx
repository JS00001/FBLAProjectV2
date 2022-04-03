import type { filterState } from '../redux/reducers/filterReducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import locations from '../data/locations';

const useFilter = (): Location[] => {
	const filter = useSelector((state: { filter: filterState }) => state.filter);
	const [filteredLocations, setFilteredLocations] = useState(locations);

	useEffect(() => {
		setFilteredLocations(locations.filter(sortLocations));
	}, [filter]);

	const sortLocations = (location: Location): boolean => {
		let valid = true;

		Object.keys(filter).forEach((key) => {
			if (!valid) return;
			if (!filter[key]) return;
			if (key === 'Radius') valid = location.Radius <= filter[key];
			else valid = location[key] === filter[key];
		});

		return valid;
	};

	return filteredLocations as Location[];
};

export default useFilter;
