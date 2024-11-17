'use client';
import Link from 'next/link';

export const Curriculum = () => {
	return (
		<div className='container mx-auto px-4 py-8'>
			<Link
				href='/'
				className='text-blue-600 hover:text-blue-800 mb-4 inline-block cursor-pointer'>
				← Accueil
			</Link>

			<h1 className='text-3xl font-bold mb-6'>Mon CV</h1>
			{/* Ajoutez ici le contenu de votre CV */}
		</div>
	);
};
