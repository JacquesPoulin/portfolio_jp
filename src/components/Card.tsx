import grainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithRef, PropsWithChildren } from 'react';

export const Card = ({
	className,
	children,
	...other
}: ComponentPropsWithRef<'div'>) => {
	return (
		<div
			className={twMerge(
				'bg-grey-800 rounded-3xl relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none',
				className
			)}
			{...other}>
			{/* Fond à grain (transparence) */}
			<div
				className='absolute inset-0 opacity-5'
				style={{
					backgroundImage: `url(${grainImage.src})`,
				}}
			/>
			{children}
		</div>
	);
};
