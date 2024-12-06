'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useGoogleAnalytics = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (pathname && window.gtag) {
			window.gtag('event', 'page_view', {
				page_path:
					pathname +
					(searchParams.toString() ? `?${searchParams.toString()}` : ''),
			});
		}
	}, [pathname, searchParams]);
};
