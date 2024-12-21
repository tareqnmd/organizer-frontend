import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<GoogleTagManager gtmId="GTM-T3T6F947" />
			<GoogleAnalytics gaId="G-0C682R4368" />
			{children}
		</>
	);
};

export default AnalyticsProvider;
