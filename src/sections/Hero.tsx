import memojiImage from '@/assets/images/guy-using-laptop.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<main className='py-32 md:py-40'>
			<section className='container'>
				<div className='flex flex-col items-center'>
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
							Full-Stack web developer
						</h3>
						<p className='mt-4 text-center text-white/60 md:text-lg'>
							Construire des expériences utilisateurs uniques
						</p>
					</div>
				</div>

				<div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
					<button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
						<span className='font-semibold'>Découvrir mes projets</span>
						<ArrowDown className='size-4' />
					</button>

					<button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
						<span className='animate-bounce'>👋</span>
						<span className='font-semibold'>Me contacter</span>
					</button>
				</div>
			</section>
		</main>
	);
};
