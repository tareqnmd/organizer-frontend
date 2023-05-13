import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import theme from './app/theme';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
