'use client';

import { useRef } from 'react';
import Image from 'next/image';
import bookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/map.png';
import memojiImage from '@/assets/images/guy-using-laptop.png';

// ? DATA
import { technos } from './../../data/stackList';
import { hobbies } from './../../data/hobbiesList';

// ? Composant(s)
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { TechnosItems } from '@/components/TechnosItems';

// ? Library
import { motion } from 'framer-motion';

export const AboutSection = () => {
	const constrainRef = useRef(null);

	return (
		<section id='presentation' className='py-20 lg:py-28'>
			<div className='container'>
				{/* HEADER : citation, titre, description... */}
				<SectionHeader
					citation='Je fais de mon mieux dans le respect de moi-même.'
					auteurCitation=''
					titre='QUI SUIS-JE ?'
					description='Bienvenue dans mon monde !'
				/>

				{/* CARDS */}
				<div className='mt-20 flex flex-col gap-8'>
					{/* Bento grid 1*/}
					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
						{/* CARD 1 : Mes lectures */}
						<Card className='h-[320px] md:col-span-2 lg:col-span-1'>
							<div className='flex flex-col'>
								<CardHeader
									title='Lectures'
									description='En recherche permanente de montée en compétence'
								/>
							</div>
							<div className='w-40 mx-auto mt-2 md:mt-0'>
								{/* Image de livre */}
								<Image
									src={bookImage}
									className=''
									alt="Image de la couverture d'un livre"
								/>
							</div>
						</Card>

						{/* CARD 2 : Technos & outils */}
						<Card className='h-[320px] md:col-span-3 lg:col-span-2'>
							<CardHeader
								title='Technos & Outils'
								description="Découvrez les technologies & outils que j'utilise au quotidien"
								className=''
							/>
							{/* Icones & titre des technos */}
							<TechnosItems
								technos={technos}
								className=''
								itemsWrapperClassName='animate-move-left [animation-duration:50s]'
							/>
							<TechnosItems
								technos={technos}
								className='mt-6'
								itemsWrapperClassName='animate-move-right [animation-duration:40s]'
							/>
						</Card>
					</div>

					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
						{/* CARD 3 : Passions & Hobbies */}
						<Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
							<div className='flex flex-col'>
								<CardHeader
									title='Au-delà du code...'
									description='Découvrez mes hobbies & passions.'
									className='px-6 pt-6'
								/>
							</div>

							{/* Icones & titre des hobbies */}
							<div className='relative flex-1' ref={constrainRef}>
								{hobbies?.map(({ id, title, emoji, left, top }) => (
									<motion.div
										key={id}
										className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-move'
										style={{ left: left, top: top }}
										drag
										dragConstraints={constrainRef}>
										<span className='font-medium text-gray-950'>{title}</span>
										<span>{emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>

						{/* CARD 4 : Plan & adresse */}
						<Card className='h-[320px] p-0 md:col-span-2 lg:col-span-1'>
							<Image
								src={mapImage}
								alt='Carte du pays basque'
								className='w-full h-full object-cover object-left-top'
							/>

							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-800 to-emerald-600 -z-20 animate-ping [animation-duration:2s]'></div>
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-800 to-emerald-600 -z-10'></div>

								<Image
									src={memojiImage}
									alt="Mémoji d'un homme avec son ordinateur portable"
									className='size-20'
								/>
							</div>
						</Card>
					</div>
					{/* CARD 3 : mes hobbies */}
				</div>
			</div>
		</section>
	);
};
