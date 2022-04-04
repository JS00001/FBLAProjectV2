import { useDispatch, useSelector } from 'react-redux';
import pageAction from '../redux/actions/pageActions';
import translate from '../data/translate';

const usePageData = () => {
	const dispatch = useDispatch();
	const pageData = useSelector((state: { page: Location }) => state.page);

	const setPageData = (pageData: Location) => {
		dispatch(pageAction(pageData));
	};

	const translatedPageData = !pageData
		? null
		: {
				...pageData,
				Radius: translate.Radius[pageData.Radius],
				Rating: translate.Rating[pageData.Rating],
				Price: translate.Price[pageData.Price],
				Popularity: translate.Popularity[pageData.Popularity],
				Category: translate.Category[pageData.Category],
				Open: translate.Open[pageData.Open],
		  };

	return [translatedPageData, setPageData] as const;
};

export default usePageData;
