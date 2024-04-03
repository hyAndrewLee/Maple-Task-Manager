const linkStyle = 'py-2';
const liStyle = 'py-6';

const Navbar: React.FC = () => {
	return (
		<nav className='sticky bg-gray-300 top-0 flex items-center border h-16 px-4'>
			<a href='/'>MTM</a>
			<div className='border h-4/6 mx-4'></div>
			<ul className='flex items-center h-16 gap-4'>
				{/* <li>
					<a className={linkStyle} href='/timer'>
						Timer
					</a>
				</li> */}
				<li>
					<a className={linkStyle} href='/dailies'>
						Dailies
					</a>
				</li>
				<li>
					<a className={linkStyle} href='/weeklies'>
						Weeklies
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
