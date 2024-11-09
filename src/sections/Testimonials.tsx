import Image from 'next/image';

// ? Composant(s)
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

// ? Liste des témoignages clients
import { testimonials } from './../../data/testimonialsList';

export const TestimonialsSection = () => {
	return (
		<section className='pb-16 lg:p-y-24'>
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
				<div className='mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] '>
					<div className='flex gap-8 flex-none'>
						{testimonials?.map(({ id, clientName, position, text, avatar }) => (
							<Card key={id} className='max-w-xs md:max-w-md md:p-8'>
								<div className='flex gap-4 items-center'>
									{/* Avatar */}
									<div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
										<Image
											src={avatar}
											alt={clientName}
											className='max-h-full'
										/>
									</div>

									{/* Nom & profession du client */}
									<div>
										<div className='font-semibold'>{clientName}</div>
										<div className='text-sm text-white/40'>{position}</div>
									</div>
								</div>
								<p className='mt-4 md:mt-6 text-sm md:text-base'>{text}</p>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
