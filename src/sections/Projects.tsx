'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// ? NEXT
import Image from 'next/image';

// ? DATA
import { portfolioProjects } from './../../data/projectsList';

// ? ASSETS
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

// ? COMPOSANTS
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { DescriptionModal } from '@/components/DescriptionModal';

export const ProjectsSection = () => {
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	const getButtonStyle = (isPersonalProject: boolean) => {
		const baseClasses = `
			absolute 
			top-4 
			right-4 
			w-8 h-8 
			rounded-full 
			transition-colors 
			flex 
			items-center 
			justify-center
		`;

		const projectTypeClasses = isPersonalProject
			? 'bg-gradient-to-r from-blue-800 to-emerald-600 text-white/90 hover:bg-slate-900'
			: 'bg-gradient-to-r from-emerald-300 to-yellow-400 text-gray-900';

		return `${baseClasses} ${projectTypeClasses}`;
	};

	return (
		<section id='projets' className='pb-16 lg:p-y-24 text-center'>
			<div className='container'>
				<SectionHeader
					citation='La simplicité est la condition sine qua non de la fiabilité'
					auteurCitation='- Edsger W. Dijkstra -'
					titre='MES PROJETS'
					description='Un code propre, efficace & maintenable'
				/>

				{/* Container global CARTE */}
				<div className='mt-10 md:mt-20 flex flex-col gap-20'>
					{/* Liste de projets en carte */}
					{portfolioProjects?.map(
						(
							{
								id,
								company,
								year,
								title,
								results,
								webSite,
								image,
								projetPerso,
								description,
							},
							index
						) => (
							<Card
								key={id}
								className='px-8 pt-8 pb-0 md:pt-12 md:px10 lg:pt-16 lg:px-20 relative overflow-hidden'
								style={{
									position: 'sticky',
									top: `${64 + index * 40}px`,
									backgroundColor: 'rgb(3 7 18)',
									zIndex: index,
								}}>
								{/* Bouton Info si description existe */}
								{description && (
									<button
										onClick={() => setSelectedProject(id)}
										className={getButtonStyle(projetPerso)}
										data-tooltip='EN SAVOIR PLUS'
										aria-label="Plus d'informations">
										<span className='text-lg leading-none'>+</span>
									</button>
								)}

								{/* Bandeau type de projet */}
								<div
									className={`
										absolute 
										-left-24 sm:-left-20 
										top-6 sm:top-8 
										rotate-[-45deg] 
										py-1 
										px-16 sm:px-24 
										text-[10px] sm:text-xs 
										font-semibold 
										tracking-wider

										${
											projetPerso
												? 'bg-gradient-to-r from-blue-800 to-emerald-600 text-white/90'
												: 'bg-gradient-to-r from-emerald-300 to-yellow-400 text-gray-900'
										}
									`}>
									{projetPerso ? 'projet perso' : 'CLIENT'}
								</div>
								{/* GRID à partir de la taille lg */}
								<div className='lg:grid lg:grid-cols-2 lg:gap-16 relative'>
									{/* GRID : colonne 1 */}
									<div className='lg:pb-16 relative z-40'>
										{/* Entreprise & année de création du projet */}
										<div>
											<div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
												<span>{company}</span>
												<span>&bull;</span>
												<span>{year}</span>
											</div>
										</div>
										{/* Titre du projet */}
										<h3 className='font-serif text-2xl mt-2 tracking-wider md:mt-5 md:text-4xl md:tracking-widest'>
											{title}
										</h3>
										{/* Ligne de séparation */}
										<hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
										{/* Liste des compétences acquises */}
										<ul className='flex flex-col gap-4 mt-4 md:mt-5'>
											{results?.map(({ title }, idx) => (
												<li
													key={idx}
													className='flex gap-2 text-sm text-white/50 md:text-base'>
													<CheckCircleIcon className='size-5 md:size-6' />
													<span>{title}</span>
												</li>
											))}
										</ul>
										{/* Bouton : CTA */}
										<a
											href={webSite}
											target='_blank'
											rel='noreferrer'
											className='relative z-50 block' // Ajout de relative et z-50
										>
											<button className='bg-white text-gray-950 h-12 w-full rounded-xl px-6 font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:animate-bounce md:[animation-duration:3s] hover:bg-gradient-to-r from-emerald-300 to-sky-400'>
												<span>Voir le projet</span>
												<ArrowUpRightIcon className='size-4 ' />
											</button>
										</a>
									</div>

									{/* GRID : colonne 2 */}
									<div className='relative z-30'>
										{image && (
											<Image
												src={image}
												alt={title}
												className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded'
												loading='eager'
												priority={false}
											/>
										)}
									</div>
								</div>
							</Card>
						)
					)}
				</div>

				{/* Modal */}
				<AnimatePresence>
					{selectedProject !== null && (
						<DescriptionModal
							isOpen={true}
							onClose={() => setSelectedProject(null)}
							description={
								portfolioProjects.find((p) => p.id === selectedProject)
									?.description || ''
							}
							company={
								portfolioProjects
									.find((p) => p.id === selectedProject)
									?.company.toUpperCase() || ''
							}
						/>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};
