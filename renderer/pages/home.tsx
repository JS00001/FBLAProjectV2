import React from 'react';
import Modals from '../components/Modals';
import Navbar from '../components/Navbar/Navbar';
import Page from '../components/Page/Page';
import Sidebar from '../components/Sidebar/Sidebar';

import useTheme from '../hooks/useTheme';

function Home() {
	const [theme] = useTheme();

	return (
		<html className={theme}>
			<div className='flex flex-col h-screen'>
				<Modals />
				<Navbar />
				<div className='flex flex-row h-full overflow-hidden'>
					<Sidebar />
					<Page />
				</div>
			</div>
		</html>
	);
}

export default Home;
