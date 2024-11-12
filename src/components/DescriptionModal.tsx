// components/DescriptionModal.tsx
import { motion } from 'framer-motion';

interface DescriptionModalProps {
	isOpen: boolean;
	onClose: () => void;
	description: string;
	company: string;
}

export const DescriptionModal = ({
	isOpen,
	onClose,
	description,
	company,
}: DescriptionModalProps) => {
	if (!isOpen) return null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4'
			onClick={onClose}>
			<motion.div
				initial={{ scale: 0.95, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.95, opacity: 0 }}
				className='bg-gray-900 rounded-2xl relative w-full max-w-3xl max-h-[80vh] flex flex-col'
				onClick={(e) => e.stopPropagation()}>
				{/* Header fixe */}
				<div className='p-6 border-b border-white/10'>
					<button
						onClick={onClose}
						className='absolute top-4 right-4 text-white/60 hover:text-white'>
						✕
					</button>
					<h3 className='font-serif text-2xl'>{company}</h3>
				</div>

				{/* Contenu scrollable */}
				<div className='p-6 overflow-y-auto custom-scrollbar'>
					<div
						className='prose prose-invert max-w-none'
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};
