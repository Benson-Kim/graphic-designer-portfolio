import React from "react";
import { RiBehanceLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const Footer = () => {
	return (
		<footer className='p-10 rounded footer footer-center bg-base-200 text-base-content'>
			<div className='grid grid-flow-col gap-4'>
				<Link to='/' className='text-base link link-hover'>
					Works
				</Link>
				<Link
					to='/frankline-about'
					className='text-base link link-hover'
				>
					About
				</Link>
				<Link to='/contact-me' className='text-base link link-hover'>
					Contact
				</Link>
			</div>
			<div>
				<div className='grid grid-flow-col gap-4'>
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
			</div>
			<div>
				<p>Copyright © 2022 - All right reserved by Frankline Mueke</p>
			</div>
		</footer>
	);
};

export default Footer;
