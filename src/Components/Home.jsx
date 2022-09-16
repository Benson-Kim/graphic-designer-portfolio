import React from "react";
import { Link } from "react-router-dom";
import FamilyDinner from "../assets/liveportfolio/Fd home.jpg";
import Foodie from "../assets/liveportfolio/Foodie.svg";
import Kienyeji from "../assets/liveportfolio/Kienyeji.svg";

const Home = () => {
	return (
		<div className='grid w-full grid-cols-1 gap-6 m-6 md:grid-cols-3'>
			<Link to='/family-dinner' className='relative col-span-1'>
				<img
					src={FamilyDinner}
					alt=''
					className='object-contain w-full h-72 hover:opacity-0 '
				/>
				<div class='absolute inset-0 z-10 bg-primary-blue rounded shadow-md text-center flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300'>
					<h1 class='tracking-wide text-xl text-white font-semibold'>
						Mobile App Design for Shopping Family Dinner
					</h1>
				</div>
			</Link>
			<Link to='/foodie' className='relative col-span-1'>
				<img
					src={Foodie}
					alt=''
					className='object-contain w-full h-72 hover:opacity-0 '
				/>
				<div class='absolute inset-0 z-10 bg-primary-blue rounded shadow-md text-center flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300'>
					<h1 class='tracking-wide text-xl text-white font-semibold '>
						Web App Design to Order and Pick Up Dishes
					</h1>
				</div>
			</Link>
			<Link to='/kienyeji' className='relative col-span-1'>
				<img
					src={Kienyeji}
					alt=''
					className='object-contain w-full h-72 hover:opacity-0 '
				/>
				<div class='absolute inset-0 z-10 bg-primary-blue rounded shadow-md text-center flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300'>
					<h1 class='tracking-wide text-xl text-white font-semibold'>
						UX Design to Help People Cook Healthier Meals
					</h1>
				</div>
			</Link>
		</div>
	);
};

export default Home;
