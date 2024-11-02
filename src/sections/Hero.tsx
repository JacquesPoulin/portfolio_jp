import memojiImage from '@/assets/images/guy-using-laptop.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import HeroOrbit from '@/components/HeroOrbit';

// ! Composant de ma page Intro du site
export const HeroSection = () => {
	return (
		<main className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
			{/* Div "masque" avec effet transparent en haut et en bas*/}
			<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
				<div
					className='absolute inset-0 -z-30 opacity-5'
					style={{ backgroundImage: `url(${grainImage.src})` }}></div>

				{/* Cercles */}
				<div className='size-[620px] md:size-[720px] hero-ring'></div>
				<div className='size-[820px] md:size-[920px] hero-ring'></div>
				<div className='size-[1020px] md:size-[1120px] hero-ring'></div>
				<div className='size-[1220px] md:size-[1320px] hero-ring'></div>

				{/* Positionnement des étoiles */}
				<HeroOrbit size={800} rotation={-72}>
					<StarIcon className='size-28 text-yellow-300' />
				</HeroOrbit>
				<HeroOrbit size={550} rotation={20}>
					<StarIcon className='size-12 text-yellow-300' />
				</HeroOrbit>
				<HeroOrbit size={590} rotation={98}>
					<StarIcon className='size-8 text-yellow-300' />
				</HeroOrbit>

				{/* Positionnement des scintillements */}
				<HeroOrbit size={430} rotation={-14}>
					<SparkleIcon className='size-8 text-yellow-300/20' />
				</HeroOrbit>
				<HeroOrbit size={440} rotation={79}>
					<SparkleIcon className='size-5 text-yellow-300/20' />
				</HeroOrbit>
				<HeroOrbit size={530} rotation={178}>
					<SparkleIcon className='size-10 text-yellow-300/20' />
				</HeroOrbit>
				<HeroOrbit size={710} rotation={144}>
					<SparkleIcon className='size-14 text-yellow-300/20' />
				</HeroOrbit>

				{/* Positionnement des cercles de lumière */}
				<HeroOrbit size={720} rotation={85}>
					<div className='size-3 rounded-full bg-yellow-200/20'></div>
				</HeroOrbit>
				<HeroOrbit size={520} rotation={-41}>
					<div className='size-2 rounded-full bg-yellow-200/20'></div>
				</HeroOrbit>
				<HeroOrbit size={650} rotation={-5}>
					<div className='size-2 rounded-full bg-yellow-200/20'></div>
				</HeroOrbit>
			</div>

			<section className='container'>
				<div className='flex flex-col items-center'>
					{/* Avatar */}
					<Image
						src={memojiImage}
						className='size-[150px] md:size-[200px]'
						alt='avatar personne derrière un ordinateur portable'
					/>

					<div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
						<div className='bg-green-500 size-2.5 rounded-full animate-pulse'></div>

						<div className='text-sm font-medium'>
							<p>En recherche de nouveaux défis</p>
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

				<div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
					<button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer'>
						<span className='font-semibold hover:text-yellow-400 cursor-pointer'>
							Découvrir mes projets
						</span>
						<ArrowDown className='size-4' />
					</button>

					<button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer'>
						<span className='animate-bounce'>👋</span>
						<span className='font-semibold cursor-pointer'>Me contacter</span>
					</button>
				</div>
			</section>
		</main>
	);
};
