import { navlinks } from './../../data/navlinksList';

export const Header = () => {
	return (
		<header className='flex justify-center items-center fixed top-3 w-full z-10'>
			<nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
				{navlinks.map(({ id, path, title }) => (
					<a
						key={id}
						href={path}
						className={
							id != 1
								? 'nav-item'
								: 'nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
						}>
						{title}
					</a>
				))}
			</nav>
		</header>
	);
};
