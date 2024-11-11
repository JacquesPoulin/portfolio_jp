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

export const ProjectsSection = () => {
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
						({ id, company, year, title, results, link, image }, index) => (
							<Card
								key={id}
								className='px-8 pt-8 pb-0 md:pt-12 md:px10 lg:pt-16 lg:px-20 sticky'
								style={{
									position: 'sticky',
									top: `${64 + index * 40}px`,
									backgroundColor: 'rgb(3 7 18)',
									zIndex: index,
								}}>
								{/* GRID à partir de la taille lg */}
								<div className='lg:grid lg:grid-cols-2 lg:gap-16'>
									{/* GRID : colonne 1 */}
									<div className='lg:pb-16'>
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
											{results?.map(({ title }) => (
												<li className='flex gap-2 text-sm text-white/50 md:text-base'>
													<CheckCircleIcon className='size-5 md:size-6' />
													<span>{title}</span>
												</li>
											))}
										</ul>

										{/* Bouton : CTA */}
										<a href={link} target='_blank' rel='noreferrer'>
											<button className='bg-white text-gray-950 h-12 w-full rounded-xl px-6 font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto'>
												<span>Voir le projet</span>
												<ArrowUpRightIcon className='size-4' />
											</button>
										</a>
									</div>

									{/* GRID : colonne 2 */}
									<div className='relative'>
										<Image
											src={image}
											alt={title}
											className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
										/>
									</div>
								</div>
							</Card>
						)
					)}
				</div>
			</div>
		</section>
	);
};
