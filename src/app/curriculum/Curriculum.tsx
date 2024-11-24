'use client';
import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import profilImage from '@/assets/images/profil.png';

import { AnimatePresence } from 'framer-motion';
import { ContactModalCV } from './components/ContactModalCV';

export const Curriculum = () => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const phoneNumber = '(+33) 679177158';

	// ? Fonction pour gérer le clic sur le numéro de téléphone
	const handlePhoneClick = (e: React.MouseEvent) => {
		// * Vérifie si on est sur mobile
		if (window.innerWidth < 768) {
			e.preventDefault();
			setIsContactModalOpen(true);
		}
	};

	// ? Fonction pour gérer le téléchargement du CV
	const handleDownloadCV = () => {
		// Chemin vers le fichier PDF
		const cvPath = '/CV_JACQUES_POULIN_2025.pdf';

		// Création d'un lien temporaire pour le téléchargement
		const link = document.createElement('a');
		link.href = cvPath;
		link.download = 'CV_JACQUES_POULIN_2025.pdf'; // Nom du fichier lors du téléchargement
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className='min-h-screen bg-gray-950'>
			{/* Navigation avec bouton de téléchargement */}
			<nav className='container mx-auto px-4 py-8 flex justify-between items-center'>
				<Link
					href='/'
					className='cursor-pointer bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text hover:opacity-80 transition-opacity'>
					← Accueil
				</Link>

				<button
					onClick={handleDownloadCV}
					className='flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold hover:opacity-50 transition-opacity animate-pulse [animate-duration: 10s] hover:animate-none'>
					<span>📄</span>
					Télécharger CV
				</button>
			</nav>

			{/* En-tête du CV */}
			<header className='container mx-auto px-4 py-12'>
				<div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
					{/* Photo - visible uniquement en desktop */}
					<div className='hidden md:block relative group'>
						{/* Cercle animé autour de la photo */}
						<div className='absolute -inset-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full opacity-20 group-hover:opacity-100 blur transition-opacity'></div>
						<Image
							src={profilImage}
							alt='Photo de profile de Jacques Poulin'
							width={200}
							height={200}
							className='
								rounded-full 
								border-4 
								relative
								transition-all 
								duration-500
								group-hover:scale-105
								hover:border-transparent
								animate-[borderRotate_6s_linear_infinite]
								hover:animate-[pulseGlow_2s_infinite]
								bg-gray-900
    '
							loading='eager'
							priority={false}
						/>

						{/* Effet de rotation autour de la photo */}
						<div
							className='
							absolute 
							inset-0 
							border-4 
							border-transparent 
							border-t-emerald-300/20 
							rounded-full 
							group-hover:animate-spin 
							[animation-duration:3s]'></div>
					</div>

					{/* Informations */}
					<div className='text-center md:text-left flex-1'>
						<h1 className='text-4xl md:text-5xl font-serif mb-4'>
							Jacques Poulin
						</h1>
						<h2 className='text-xl md:text-2xl text-white/60 mb-6'>
							Développeur Full Stack
						</h2>

						{/* Coordonnées */}
						<div className='space-y-2 mb-6 text-white/70'>
							<a
								href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
								onClick={handlePhoneClick}
								className='hover:text-white transition-colors'>
								<p>📞 {phoneNumber}</p>
							</a>
							<a
								href='mailto:jacques.poulin64@gmail.com'
								className='hover:text-white transition-colors'>
								<p className='mt-2'>📧 jacques.poulin64@gmail.com</p>
							</a>
							<p>📍 Ustaritz</p>
						</div>

						{/* Modal */}
						<AnimatePresence>
							{isContactModalOpen && (
								<ContactModalCV
									isOpen={isContactModalOpen}
									onClose={() => setIsContactModalOpen(false)}
									phoneNumber={phoneNumber}
								/>
							)}
						</AnimatePresence>

						{/* Liens */}
						<div className='flex flex-wrap gap-4 justify-center md:justify-start'>
							<a
								href='https://linkedin.com/in/jacquespoulin'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors'>
								<span>💼</span> LinkedIn
							</a>
							<a
								href='https://github.com/JacquesPoulin'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors'>
								<span>👨‍💻</span> GitHub
							</a>
							<a
								href='/'
								className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors'>
								<span>🎨</span> Portfolio
							</a>
						</div>
					</div>
				</div>
			</header>

			{/* Contenu principal */}
			<main className='container mx-auto px-4 py-12'>
				{/* Profil */}
				<section className='mb-16'>
					<h2 className='text-2xl font-serif mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
						Profil
					</h2>
					<p className='text-white/70 text-justify leading-relaxed max-w-3xl'>
						Développeur Full-Stack doté de 2 ans et demi d'expérience en
						entreprise dans la gestion de base de données, de logiciels et de
						création web. Langages utilisés au quotidien : React/Node.js et
						Python/Django avec comme missions le développement de solutions
						digitales et logiciels efficaces, scalables et maintenables.
					</p>
				</section>

				{/* Expérience */}
				<section className='mb-16'>
					<h2 className='text-2xl font-serif mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
						Expérience professionnelle
					</h2>
					<div className='space-y-8'>
						<div className='p-6 rounded-xl bg-white/5'>
							<div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
								<div>
									<h3 className='font-semibold text-xl'>
										Développeur Full Stack - SCANIA
									</h3>
									<p className='text-white/60'>2022 - Présent</p>
								</div>
							</div>

							{/* Responsabilités principales */}
							<div className='space-y-6 mt-6'>
								{/* Logiciel d'Entreprise */}
								<div className='space-y-2'>
									<h4 className='flex items-center gap-2 text-emerald-300 font-semibold'>
										<span>🚀</span> Architecture & Développement Logiciel
									</h4>
									<ul className='space-y-2 text-white/70 list-disc pl-4'>
										<li>
											Développement et optimisation d'une application
											d'entreprise avec Python/Django et React
										</li>
										<li>
											Amélioration continue des performances et de l&apos;expérience
											utilisateur
										</li>
									</ul>
								</div>

								{/* Base de données */}
								<div className='space-y-2'>
									<h4 className='flex items-center gap-2 text-emerald-300 font-semibold'>
										<span>🗃️</span> Gestion & Optimisation de Bases de Données
									</h4>
									<ul className='space-y-2 text-white/70 list-disc pl-4'>
										<li>Administration et sécurisation de bases PostgreSQL</li>
										<li>
											Optimisation des requêtes via l&apos;ORM Django pour des
											performances accrues
										</li>
										<li>Mise en place de stratégies de caching avec Redis</li>
									</ul>
								</div>

								{/* Développement Web */}
								<div className='space-y-2'>
									<h4 className='flex items-center gap-2 text-emerald-300 font-semibold'>
										<span>🌐</span> Développement Web Full-Stack
									</h4>
									<ul className='space-y-2 text-white/70 list-disc pl-4'>
										<li>
											Architecture et développement du nouveau site web de
											l&apos;entreprise (en cours)
										</li>
										<li>Implémentation de fonctionnalités full-stack</li>
										<li>Intégration d'APIs RESTful sécurisées</li>
									</ul>
								</div>

								{/* Compétences techniques */}
								<div className='space-y-2'>
									<h4 className='flex items-center gap-2 text-emerald-300 font-semibold'>
										<span>💻</span> Stack Technique & Compétences
									</h4>
									<div className='flex flex-wrap gap-2 mt-2'>
										{[
											'React.js',
											'Python',
											'Django',
											'PostgreSQL',
											'Redis',
											'SASS',
											'Tailwind',
										].map((skill) => (
											<span
												key={skill}
												className='px-3 py-1 rounded-full bg-white/5 text-sm text-white/70'>
												{skill}
											</span>
										))}
									</div>
								</div>

								{/* Soft Skills */}
								<div className='space-y-2'>
									<h4 className='flex items-center gap-2 text-emerald-300 font-semibold'>
										<span>🤝</span> Soft Skills
									</h4>
									<ul className='space-y-2 text-white/70 list-disc pl-4'>
										<li>
											Collaboration active au sein d'une équipe
											pluridisciplinaire
										</li>
										<li>
											Adaptabilité rapide aux nouvelles technologies et défis de
											l&apos;entreprise
										</li>
										<li>Communication efficace avec les parties prenantes</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Formation */}
				<section className='mb-16'>
					<h2 className='text-2xl font-serif mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
						Formation
					</h2>
					<div className='space-y-8'>
						<div className='p-6 rounded-xl bg-white/5'>
							<div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
								<div>
									<h3 className='font-semibold'>WILDCODE SCHOOL ACADEMY</h3>
									<p className='text-white/60'>École de code européenne</p>
								</div>
								<span className='text-white/40'>2022</span>
							</div>
						</div>
						<div className='p-6 rounded-xl bg-white/5'>
							<div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
								<div>
									<h3 className='font-semibold'>BBA INSEEC (ECE)</h3>
									<p className='text-white/60'>École de commerce européenne</p>
								</div>
								<span className='text-white/40'>2007 - 2010</span>
							</div>
						</div>
					</div>
				</section>

				{/* Projets */}
				<section className='mb-16'>
					<h2 className='text-2xl font-serif mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
						Projets
					</h2>

					{/* Projets Professionnels */}
					<h3 className='text-xl mb-4 text-white/80'>Projets Professionnels</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 transition-all duration-300'>
						<a
							href='https://aerialpaysbasque.com'
							target='_blank'
							rel='noreferrer'
							className='p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:text-emerald-300 transition-colors'>
							<h4 className='font-semibold'>Aerial Pays Basque</h4>
							<p className='text-white/60'>
								Site vitrine école de cerceau aérien
							</p>
						</a>
						<a
							href='https://poledanceanglet.fr'
							target='_blank'
							rel='noreferrer'
							className='p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:text-emerald-300 transition-colors'>
							<h4 className='font-semibold'>Pole Dance Anglet</h4>
							<p className='text-white/60'>Site vitrine école de pole dance</p>
						</a>
						<a
							href='https://familiybudget.com'
							target='_blank'
							rel='noreferrer'
							className='p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:text-emerald-300 transition-colors'>
							<h4 className='font-semibold'>Family Budget</h4>
							<p className='text-white/60'>Application de gestion de budget</p>
						</a>
					</div>

					{/* Projets Personnels */}
					<h3 className='text-xl mb-4 text-white/80'>Projets Personnels</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<a
							href='https://promptopia-zeta-sage.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden'>
							<div className='relative z-10'>
								<h4 className='font-semibold group-hover:text-emerald-300 transition-colors'>
									Promptopia
								</h4>
								<p className='text-white/60'>
									Plateforme de partage de prompts IA
								</p>
							</div>
							<div className='absolute inset-0 bg-gradient-to-r from-emerald-300/0 to-sky-400/0 group-hover:from-emerald-300/5 group-hover:to-sky-400/5 transition-all duration-300'></div>
						</a>

						<a
							href='https://star-tour-agency.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden'>
							<div className='relative z-10'>
								<h4 className='font-semibold group-hover:text-emerald-300 transition-colors'>
									Star Tour Agency
								</h4>
								<p className='text-white/60'>Site d'agence de voyage spatial</p>
							</div>
							<div className='absolute inset-0 bg-gradient-to-r from-emerald-300/0 to-sky-400/0 group-hover:from-emerald-300/5 group-hover:to-sky-400/5 transition-all duration-300'></div>
						</a>

						<a
							href='https://landarea.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden'>
							<div className='relative z-10'>
								<h4 className='font-semibold group-hover:text-emerald-300 transition-colors'>
									Landarea
								</h4>
								<p className='text-white/60'>
									Site e-commerce de plantes (Mobile First)
								</p>
							</div>
							<div className='absolute inset-0 bg-gradient-to-r from-emerald-300/0 to-sky-400/0 group-hover:from-emerald-300/5 group-hover:to-sky-400/5 transition-all duration-300'></div>
						</a>

						<a
							href='https://findthemovie.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden'>
							<div className='relative z-10'>
								<h4 className='font-semibold group-hover:text-emerald-300 transition-colors'>
									Find the Movie
								</h4>
								<p className='text-white/60'>
									Bibliothèque de films interactive
								</p>
							</div>
							<div className='absolute inset-0 bg-gradient-to-r from-emerald-300/0 to-sky-400/0 group-hover:from-emerald-300/5 group-hover:to-sky-400/5 transition-all duration-300'></div>
						</a>
					</div>
				</section>
			</main>
		</div>
	);
};
