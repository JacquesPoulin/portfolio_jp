// ! Composant qui gère le layout et le css des headers de chaque section du site
export const SectionHeader = ({
	citation,
	auteurCitation,
	titre,
	description,
}: {
	citation: string;
	auteurCitation: string;
	titre: string;
	description: string;
}) => {
	return (
		<>
			<div className='flex flex-col items-center lg:flex-row gap-2 md:gap-4 justify-center mb-12'>
				{/* CITATION */}
				<p className='text-xl sm:text-base sm:text-center italic md:text-xl font-semibold tracking-widest bg-gradient-to-r from-yellow-300 to-emerald-400 text-transparent bg-clip-text'>
					<q>{citation}</q>
				</p>
				<p className='text-xl sm:text-base sm:text-center md:text-xl font-semibold tracking-widest bg-gradient-to-r from-yellow-300 to-emerald-400 text-transparent bg-clip-text'>
					{auteurCitation}
				</p>
			</div>

			{/* TITRE */}
			<h2 className='font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide'>
				{titre}
			</h2>

			{/* DESCRIPTION */}
			<p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto'>
				{description}
			</p>
		</>
	);
};
