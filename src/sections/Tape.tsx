import StarIcon from '@/assets/icons/star.svg';
import { words } from './../../data/wordsList';

export const TapeSection = () => {
	return (
		<section>
			<div className='py-16 lg:py-24 overflow-x-clip'>
				{/* <div className='bg-gradient-to-r from-yellow-300 to-emerald-400'> */}
				<div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
					<div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
						<div className='flex flex-none gap-4 py-3'>
							{words.map((word) => (
								<div
									key={word}
									className='inline-flex gap-4 md:gap-7 items-center'>
									<span className='text-gray-900 uppercase font-extrabold text-sm lg:text-lg'>
										{word}
									</span>
									<StarIcon className='size-6 text-gray-900 -rotate-12' />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
