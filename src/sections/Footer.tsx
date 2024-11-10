import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

import { footerLinks } from '../../data/footerLinks';
export const Footer = () => {
	// ! ****** VARIABLES ******
	// ? l'année actuelle
	const currentYear = new Date().getFullYear();

	return (
		<footer className='relative overflow-x-clip'>
			{/* Fond décoratif */}
			<div className='absolute w-[1600px] h-[400px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none'></div>

			{/* Contenu du footer */}
			<div className='container relative z-10'>
				<div className='border-t border-white/15 py-6 text-sm flex flex-col items-center md:flex-row md:justify-between gap-8'>
					<div className='text-white/40'>
						&copy; {currentYear}. Tous droits réservés.
					</div>

					<nav className='flex flex-col md:flex-row items-center gap-8'>
						{footerLinks?.map(({ id, title, path }) => (
							<a
								key={id}
								href={path}
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-2 hover:text-emerald-300 transition-colors'>
								<span className='font-semibold'>{title}</span>
								<ArrowUpRightIcon className='size-4' />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
