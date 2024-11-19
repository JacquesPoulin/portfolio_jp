import Image from 'next/image';

// ? Composant(s)
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

// ? Liste des témoignages clients
import { testimonials } from './../../data/testimonialsList';
import { Fragment } from 'react';

export const TestimonialsSection = () => {
	return (
		<section id='temoignages' className='pb-16 lg:p-y-24'>
			{/* HEADER : citation, titre, description... */}
			<div className='container'>
				<SectionHeader
					// citation="Les clients mécontents sont la plus grande source d'apprentissage."
					// auteurCitation='- Bill Gates -'
					// citation='Faites de votre client le héros de votre histoire.'
					// auteurCitation='- Ann Handley -'
					citation='Quand le client passe en premier, le client reste.'
					auteurCitation='- Robert Half -'
					titre='TÉMOIGNAGES'
					description="Ils m'ont fait confiance..."
				/>
				{/* CARD : toutes les infos nécessaires */}
				<div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
					<div className='flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]'>
						{[...new Array(2)].fill(0).map((_, idx) => (
							<Fragment key={idx}>
								{testimonials?.map(
									({ id, clientName, position, text, avatar }) => (
										<Card
											key={id}
											className='max-w-xs md:max-w-md p-6 md:p-8 md:hover:-rotate-3 md:transition md:duration-300'>
											<div className='flex gap-4 items-center'>
												{/* Avatar */}
												<div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
													<Image
														src={avatar}
														alt={clientName}
														className='max-h-full'
														    loading="eager"
    priority={false}
													/>
												</div>

												{/* Nom & profession du client */}
												<div>
													<div className='font-semibold'>{clientName}</div>
													<div className='text-sm text-white/40'>
														{position}
													</div>
												</div>
											</div>
											<p className='mt-4 md:mt-6 text-sm md:text-base'>
												{text}
											</p>
										</Card>
									)
								)}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
