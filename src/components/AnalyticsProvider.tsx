'use client';

import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

export default function AnalyticsProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useGoogleAnalytics();
	return <>{children}</>;
}
