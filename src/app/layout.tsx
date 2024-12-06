import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

import GoogleAnalytics from '@/app/curriculum/components/GoogleAnalytics';
import AnalyticsProvider from '@/components/AnalyticsProvider';

const GA_MEASUREMENT_ID = 'G-28JSX95MW7';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
});

type RootLayoutProps = {
	children: React.ReactNode;
};

// Métadonnées par défaut
const defaultMetadata: Metadata = {
	title: {
		template: '%s | Jacques Poulin',
		default: 'Jacques Poulin - Développeur Full-Stack',
	},
	description:
		'Développeur Full-Stack basé à Ustaritz [React / Node / Python / Django]',
	keywords: [
		'développeur full-stack',
		'React',
		'Node',
		'Python',
		'Django',
		'développement web',
		'Pays Basque',
	],
	authors: [{ name: 'Jacques Poulin' }],
	creator: 'Jacques Poulin',
	metadataBase: new URL('https://jacquespoulin.com'),
	alternates: {
		canonical: 'https://jacquespoulin.com',
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: 'https://jacquespoulin.com',
		siteName: 'Jacques Poulin - Développeur Full-Stack',
		title: 'Jacques Poulin - Développeur Full-Stack',
		description:
			'Développeur Full-Stack basé à Ustaritz [React / Node / Python / Django]',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jacques Poulin - Développeur Full-Stack',
			},
		],
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: 'Jacques Poulin - Développeur Full-Stack',
	// 	description: 'Développeur Full-Stack passionné basé à Ustaritz',
	// 	creator: '@votretwitter',
	// 	images: ['/og-image.jpg'],
	// },
	icons: {
		icon: [
			{
				url: '/layout/favicon/favicon.svg',
				type: 'image/svg+xml',
			},
			{
				url: '/layout/favicon/favicon-96x96.png',
				sizes: '96x96',
				type: 'image/png',
			},
			{
				url: '/layout/favicon/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				url: '/layout/favicon/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
		],
		shortcut: [{ url: '/layout/favicon/favicon.ico' }],
		apple: [{ url: '/layout/favicon/apple-touch-icon.png', sizes: '180x180' }],
		other: [
			{
				rel: 'mask-icon',
				url: '/layout/favicon/favicon.svg',
				color: '#5bbad5',
			},
		],
	},
	manifest: '/layout/favicon/site.webmanifest',
	appleWebApp: {
		title: 'Jacques Poulin',
		statusBarStyle: 'black-translucent',
		capable: true,
		startupImage: ['/layout/favicon/apple-touch-icon.png'],
	},
};

export const metadata = defaultMetadata;

// export async function generateMetadata({
// 	params,
// }: {
// 	params: Partial<MetadataParams>;
// }): Promise<Metadata> {
// 	const customMetadata: Metadata = {
// 		title: params.title ?? defaultMetadata.title,
// 		description: params.description ?? defaultMetadata.description,
// 		openGraph: {
// 			...(defaultMetadata.openGraph as OpenGraphMetadata),
// 			title:
// 				(params.title as string) ??
// 				(defaultMetadata.openGraph?.title as string),
// 			description: params.description ?? defaultMetadata.openGraph?.description,
// 		},
// 	};

// 	return customMetadata;
// }

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang='fr'>
			<head>
				<GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
			</head>
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					'bg-gray-900 text-white antialiased font-sans'
				)}>
				<AnalyticsProvider>{children}</AnalyticsProvider>
			</body>
		</html>
	);
}
