'use client';
import { navlinks } from './../../data/navlinksList';
import { scrollToSection } from '../../utils/functions';
import { useState, useEffect } from 'react';

export const Header = () => {
	const [activeSection, setActiveSection] = useState('accueil');
	const [isVisible, setIsVisible] = useState(true);
	const [isAtTop, setIsAtTop] = useState(true);
	let timeoutId: NodeJS.Timeout;

	// * * *  Gestion du srcoll de la page * * *
	useEffect(() => {
		const handleScroll = () => {
			// Vérifie si on est en haut de la page
			const isTop = window.scrollY < 100;
			setIsAtTop(isTop);

			// Montre la navbar à chaque scroll
			setIsVisible(true);

			// Clear le timeout existant
			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			// Cache la navbar après 2 secondes si on n'est pas en haut de la page
			if (!isTop) {
				timeoutId = setTimeout(() => {
					setIsVisible(false);
				}, 2000);
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup
		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, []);

	// * * *  Montre la navbar quand la souris bouge * * *
	const handleMouseMove = () => {
		setIsVisible(true);

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (!isAtTop) {
			timeoutId = setTimeout(() => {
				setIsVisible(false);
			}, 3000);
		}
	};

	// * * * Gère la navigation dans le site * * *
	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		path: string
	) => {
		e.preventDefault();
		const sectionId = path.replace('#', '');
		setActiveSection(sectionId);
		scrollToSection(sectionId);
	};

	return (
		<header
			onMouseMove={handleMouseMove}
			className={`
        fixed top-3 w-full z-10 flex justify-center items-center
        transition-all duration-300
        ${
					!isVisible && !isAtTop
						? 'opacity-0 translate-y-[-100%]'
						: 'opacity-100 translate-y-0'
				}
      `}>
			<nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
				{navlinks.map(({ id, path, title }) => {
					const sectionId = path.replace('#', '');
					const isActive = activeSection === sectionId;

					return (
						<a
							key={id}
							href={path}
							onClick={(e) => handleNavClick(e, path)}
							className='nav-item hover:bg-white/70 hover:text-gray-900'>
							{title}
						</a>
					);
				})}
			</nav>
		</header>
	);
};
