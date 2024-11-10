'use client';

import memojiImage from '@/assets/images/guy-using-laptop.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import HeroOrbit from '@/components/HeroOrbit';

import { scrollToSection } from '../../utils/functions';

// ! Composant de ma page Intro du site
export const HeroSection = () => {
	return (
		<main
			id='accueil'
			className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
			{/* Div "masque" avec effet transparent en haut et en bas*/}
			<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] z-0'>
				<div
					className='absolute inset-0 -z-30 opacity-5'
					style={{ backgroundImage: `url(${grainImage.src})` }}></div>
				{/* Cercles */}
				<div className='size-[620px] md:size-[720px] hero-ring'></div>
				<div className='size-[820px] md:size-[920px] hero-ring'></div>
				<div className='size-[1020px] md:size-[1120px] hero-ring'></div>
				<div className='size-[1220px] md:size-[1320px] hero-ring'></div>

				<HeroOrbit
					size={430}
					rotation={-14}
					shouldOrbit
					orbitDuration='32s'
					shouldSpin
					spinDuration='3s'>
					<SparkleIcon className='size-8 text-yellow-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={440}
					rotation={79}
					shouldOrbit
					orbitDuration='44s'
					shouldSpin
					spinDuration='3s'>
					<SparkleIcon className='size-5 text-yellow-300/20' />
				</HeroOrbit>
				<HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='46s'>
					<div className='size-2 rounded-full bg-yellow-200/20'></div>
				</HeroOrbit>
				<HeroOrbit
					size={530}
					rotation={178}
					shouldOrbit
					orbitDuration='48s'
					shouldSpin
					spinDuration='3s'>
					<SparkleIcon className='size-10 text-yellow-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={550}
					rotation={20}
					shouldOrbit
					orbitDuration='50s'
					shouldSpin
					spinDuration='6s'>
					<StarIcon className='size-12 text-yellow-300' />
				</HeroOrbit>
				<HeroOrbit
					size={590}
					rotation={98}
					shouldOrbit
					orbitDuration='52s'
					shouldSpin
					spinDuration='5s'>
					<StarIcon className='size-8 text-yellow-300' />
				</HeroOrbit>
				<HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='54s'>
					<div className='size-2 rounded-full bg-yellow-200/20'></div>
				</HeroOrbit>
				<HeroOrbit
					size={710}
					rotation={144}
					shouldOrbit
					orbitDuration='56s'
					shouldSpin
					spinDuration='3s'>
					<SparkleIcon className='size-14 text-yellow-300/20' />
				</HeroOrbit>
				<HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='58s'>
					<div className='size-3 rounded-full bg-yellow-200/20'></div>
				</HeroOrbit>
				<HeroOrbit
					size={800}
					rotation={-72}
					shouldOrbit
					orbitDuration='60s'
					shouldSpin
					spinDuration='10s'>
					<StarIcon className='size-28 text-yellow-300' />
				</HeroOrbit>
			</div>

			<section className='container relative z-10'>
				<div className='flex flex-col items-center'>
					{/* Avatar */}
					<Image
						src={memojiImage}
						className='size-[150px] md:size-[200px]'
						alt='avatar personne derrière un ordinateur portable'
					/>

					<div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
						<div className='bg-green-500 size-2.5 rounded-full relative'>
							<div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
						</div>

						<div className='text-sm font-medium'>
							<p>Disponible pour de nouveaux projets</p>
						</div>
					</div>

					<div className='max-w-lg mx-auto'>
						<h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
							JACQUES POULIN
						</h1>
						<h3 className='font-serif text-base md:text-xl text-center mt-2 tracking-wide'>
							Full-Stack developer
						</h3>
						<p className='mt-4 text-center text-white/60 md:text-lg'>
							Construire des expériences utilisateurs uniques
						</p>
					</div>
				</div>

				<div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-20'>
					<button
						onClick={() => scrollToSection('projets')}
						className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-colors relative'>
						<span className='font-semibold hover:text-yellow-400'>
							Découvrir mes projets
						</span>
						<ArrowDown className='size-4' />
					</button>

					{/* <a
						href='/contact'
						className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors relative'>
						<span className='animate-bounce'>👋</span>
						<span className='font-semibold'>Me contacter</span>
					</a> */}
					<button
						onClick={() => scrollToSection('contact')}
						className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors relative'>
						<span className='animate-bounce'>👋</span>
						<span className='font-semibold'>Me contacter</span>
					</button>
				</div>
			</section>
		</main>
	);
};
