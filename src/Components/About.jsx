import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { RiBehanceLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";
import Passport from "../assets/passport.png";

const About = () => {
	return (
		<div className='flex flex-wrap items-center justify-center w-full m-6 md:flex-nowrap'>
			<div className='w-full md:w-1/2 '>
				<img
					src={Passport}
					alt='Frankline'
					className='object-contain w-full h-96'
				/>
			</div>
			<div className='w-full m-6 md:w-1/2'>
				<h2 className='font-serif mb-6 text-3xl font-semibold capitalize text-[#484848]'>
					hello, i'm Frankline Mueke
				</h2>
				<blockquote className='p-3 mb-6 font-light leading-loose border-l-4 border-blue-100 rounded-lg shadow-sm shadow-primary-gray bg-slate-50 border-l-purple-400 text-primary-black'>
					I am a passionate UI/UX Designer who models inventive
					products with an extensive ideation. The User Comes First. A
					highly organized and efficient individual, whose thorough
					and precise approach to projects has yielded excellent
					results.
				</blockquote>
				<div className='flex space-x-10'>
					<div className='flex items-center gap-x-5'>
						<ExternalLink
							href='https://www.behance.net/frankmueke'
							className=''
						>
							<RiBehanceLine className='w-8 h-8 p-1 transition duration-200 ease-in border-2 rounded border-primary-blue transform-gpu text-primary-blue hover:text-white hover:bg-primary-blue' />
						</ExternalLink>
						<ExternalLink
							href='https://www.linkedin.com/in/frankmueke'
							className=''
						>
							<RiLinkedinFill className='w-8 h-8 p-1 transition duration-200 ease-in border-2 rounded border-primary-blue transform-gpu text-primary-blue hover:text-white hover:bg-primary-blue' />
						</ExternalLink>

						<ExternalLink
							href='https://twitter.com/FrankMueke'
							className=''
						>
							<RiTwitterLine className='w-8 h-8 p-1 transition duration-200 ease-in border-2 rounded border-primary-blue transform-gpu text-primary-blue hover:text-white hover:bg-primary-blue' />
						</ExternalLink>
					</div>

					<Link
						to='/resume.pdf'
						target='_blank'
						download='Frankline Mueke resume.pdf'
						className='px-2 py-2 font-serif text-sm font-light tracking-wide uppercase transition duration-200 ease-in-out border-2 rounded sm:px-4 text-primary-blue border-primary-blue hover:text-white hover:bg-primary-blue'
					>
						Download CV
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
