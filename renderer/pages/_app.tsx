import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</NextUIProvider>
	);
}

export default MyApp;
