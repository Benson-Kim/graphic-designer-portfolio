import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<nav className='text-white shadow-lg bg-primary-blue'>
			<div className='max-w-6xl px-4 mx-auto'>
				<div className='flex justify-between'>
					<div>
						{/* <!-- Website Logo --> */}
						<Link to='/' className='flex items-center px-2 py-4'>
							<img
								src={Logo}
								alt='Logo'
								className='w-8 h-8 mr-2'
							/>
							<span className='text-base font-light text-white capitalize'>
								user experience designer
							</span>
						</Link>
					</div>
					{/* <!-- Primary Navbar items --> */}
					<div className='items-center hidden py-4 space-x-1 font-semibold text-white md:flex'>
						<NavLink
							to='/'
							className='px-2 font-semibold border-b-4 text-neutral-50 border-neutral-500 '
						>
							Work
						</NavLink>

						<NavLink
							to='/new'
							className='px-2 font-semibold border-b-4 text-neutral-50 border-neutral-500 '
						>
							New
						</NavLink>

						<NavLink
							to='/frankline-about'
							className='px-2 transition duration-300 hover:text-primary-gray'
						>
							About
						</NavLink>
						<NavLink
							to='/contact-me'
							className='px-2 font-semibold text-white transition duration-300 hover:text-green-500'
						>
							Contact Us
						</NavLink>
						{/* </div> */}
					</div>

					{/* <!-- Mobile menu button --> */}
					<div className='flex items-center md:hidden'>
						<button
							onClick={() => setMobileMenu(!mobileMenu)}
							className='outline-none mobile-menu-button'
						>
							<svg
								className='w-6 h-6 text-white hover:text-green-500'
								x-show='!showMenu'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path d='M4 6h16M4 12h16M4 18h16'></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className={`${mobileMenu ? "block" : "hidden"} `}>
				<ul className=''>
					<li className='active'>
						<Link
							to='/'
							className='block px-2 py-4 text-sm font-semibold text-white bg-green-500'
						>
							Work
						</Link>
					</li>

					<li>
						<Link
							to='/frankline-about'
							className='block px-2 py-4 text-sm transition duration-300 hover:bg-green-500'
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to='/contact-me'
							className='block px-2 py-4 text-sm transition duration-300 hover:bg-green-500'
						>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
