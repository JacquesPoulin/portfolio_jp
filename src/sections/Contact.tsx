// components/ContactSection.tsx
'use client';
import { useState } from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { ContactModal } from '@/components/ContactModal';

export const ContactSection = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<section id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
			<div className='container'>
				<div className='relative bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden z-0'>
					<div
						className='absolute inset-0 -z-10 opacity-5'
						style={{
							backgroundImage: `url(${grainImage.src})`,
						}}
					/>
					<div className='flex flex-col md:flex-row md:justify-between lg:justify-around gap-8 md:gap-16 items-center z-50'>
						<div>
							<h2 className='font-serif text-2xl md:text-3xl'>
								Vous avez un projet ?
							</h2>
							<p className='text-sm md:text-base mt-2'>
								Discutons-en afin de lui donner vie !
							</p>
						</div>
						<div>
							<button
								onClick={() => setIsModalOpen(true)}
								className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors'>
								<span className='font-semibold'>Me contacter</span>
								<ArrowUpRightIcon className='size-4' />
							</button>
						</div>
					</div>
				</div>
			</div>

			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</section>
	);
};
