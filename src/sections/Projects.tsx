import Image from 'next/image';
import { portfolioProjects } from './../../data/projectsList';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ProjectsSection = () => {
	return (
		<section className='pb-16 lg:p-y-24'>
			<div className='container'>
				<div className='flex flex-col items-center lg:flex-row gap-2 md:gap-4 justify-center mb-12'>
					<p className='italic md:text-xl font-semibold tracking-widest bg-gradient-to-r from-yellow-300 to-emerald-400 text-transparent bg-clip-text'>
						"La simplicité est la condition sine qua non de la fiabilité"
					</p>
					<p className='italic md:text-xl font-semibold tracking-widest bg-gradient-to-r from-yellow-300 to-emerald-400 text-transparent bg-clip-text'>
						- Edsger W. Dijkstra -
					</p>
				</div>

				<h2 className='font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide'>
					MES PROJETS
				</h2>

				<p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto'>
					Un code propre, efficace & maintenable
				</p>

				{/* Container global CARTE */}
				<div className='mt-10 md:mt-20 flex flex-col gap-20'>
					{/* Liste de projets en carte */}
					{portfolioProjects?.map(
						({ id, company, year, title, results, link, image }) => (
							<div
								key={id}
								className='bg-grey-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[""] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20  after:pointer-events-none px-8 pt-8 md:pt-12 md:px10 lg:pt-16 lg:px-20'>
								{/* Fond à grain (transparence) */}
								<div
									className='absolute inset-0 -z-10 opacity-5'
									style={{
										backgroundImage: `url(${grainImage.src})`,
									}}></div>

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
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};
