'use client';

import { motion } from 'framer-motion';

// Composant Modal pour les options de contact
export const ContactModalCV = ({
	isOpen,
	onClose,
	phoneNumber,
}: {
	isOpen: boolean;
	onClose: () => void;
	phoneNumber: string;
}) => {
	if (!isOpen) return null;

	const formattedPhone = phoneNumber.replace(/[^0-9+]/g, '');

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
				className='bg-gray-900 rounded-2xl w-full max-w-sm relative'
				onClick={(e) => e.stopPropagation()}>
				<div className='p-4 border-b border-white/10'>
					<h3 className='text-lg font-semibold'>Contactez-moi</h3>
					<button
						onClick={onClose}
						className='absolute top-4 right-4 text-white/60 hover:text-white'>
						✕
					</button>
				</div>

				<div className='p-4 space-y-3'>
					<a
						href={`tel:${formattedPhone}`}
						className='flex items-center gap-3 w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'>
						<span className='text-xl'>📞</span>
						<div>
							<p className='font-medium'>Appeler</p>
							<p className='text-sm text-white/60'>{phoneNumber}</p>
						</div>
					</a>

					<a
						href={`sms:${formattedPhone}`}
						className='flex items-center gap-3 w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'>
						<span className='text-xl'>💬</span>
						<div>
							<p className='font-medium'>Envoyer un SMS</p>
							<p className='text-sm text-white/60'>{phoneNumber}</p>
						</div>
					</a>

					<a
						href={`https://wa.me/${formattedPhone}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-3 w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'>
						<span className='text-xl'>📱</span>
						<div>
							<p className='font-medium'>WhatsApp</p>
							<p className='text-sm text-white/60'>{phoneNumber}</p>
						</div>
					</a>
				</div>
			</motion.div>
		</motion.div>
	);
};
