import { FC } from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
			<div className='bg-white text-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 relative animate-fadeIn'>
				{/* Bouton fermeture */}
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'>
					✕
				</button>

				<h3 className='font-serif text-2xl mb-6'>Vous avez le choix 😄</h3>

				{/* Email */}
				<div className='mb-6'>
					<h4 className='text-sm text-gray-500 mb-2'>Email</h4>
					<a
						href='mailto:jacques.poulin64@gmail.com'
						className='flex items-center gap-2 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors'>
						<span className='text-xl'>📧</span>
						<div>
							<p className='font-medium'>jacques.poulin64@gmail.com</p>
							<p className='text-sm text-gray-500'>
								Envoyer un email
							</p>
						</div>
						<ArrowUpRightIcon className='size-4 ml-auto' />
					</a>
				</div>

				{/* Téléphone */}
				<div>
					<h4 className='text-sm text-gray-500 mb-2'>Téléphone</h4>
					<div className='space-y-2'>
						{/* Appel */}
						<a
							href='tel:+33679177158'
							className='flex items-center gap-2 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors'>
							<span className='text-xl'>📞</span>
							<div>
								<p className='font-medium'>+33 6 79 17 71 58</p>
								<p className='text-sm text-gray-500'>Appeler</p>
							</div>
							<ArrowUpRightIcon className='size-4 ml-auto' />
						</a>

						{/* SMS */}
						<a
							href='sms:+33679177158'
							className='flex items-center gap-2 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors'>
							<span className='text-xl'>💬</span>
							<div>
								<p className='font-medium'>+33 6 79 17 71 58</p>
								<p className='text-sm text-gray-500'>Envoyer un SMS</p>
							</div>
							<ArrowUpRightIcon className='size-4 ml-auto' />
						</a>

						{/* WhatsApp */}
						<a
							href='https://wa.me/33679177158'
							target='_blank'
							rel='noreferrer'
							className='flex items-center gap-2 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors'>
							<span className='text-xl'>📱</span>
							<div>
								<p className='font-medium'>WhatsApp</p>
								<p className='text-sm text-gray-500'>Discuter sur WhatsApp</p>
							</div>
							<ArrowUpRightIcon className='size-4 ml-auto' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
