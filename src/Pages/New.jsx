import React, { useState } from "react";
import { MdOutlineViewInAr } from "react-icons/md";
import { CgChevronRightO } from "react-icons/cg";
import { motion, useScroll } from "framer-motion";

import PainPoints from "../assets/illustrations/challenges-freelancer.svg";
import DesignProcess from "../assets/illustrations/design_process.svg";

import LandingPage from "../assets/kienyeji/landingpage.svg";
import Benson from "../assets/kienyeji/Benson .jpg";
import PaperWireFrameFDV1 from "../assets/kienyeji/kienyeji homepage v1-1.jpg";
import DigitalWireFrameFD from "../assets/kienyeji/Homepage digi wireframe.svg";
import KeyMockUps from "../assets/kienyeji/kie key mockups.jpg";
import HiFiImg from "../assets/kienyeji/kie hifi proto.jpg";
import LoFiImg from "../assets/kienyeji/kie lofi proto.jpg";
import KieRecipe1Img from "../assets/kienyeji/kie recipe 1.svg";
import { ExternalLink } from "react-external-link";

const New = () => {
	const [imageLoading, setImageLoading] = useState(true);
	const [pulsing, setPulsing] = useState(true);

	const imageLoaded = () => {
		setImageLoading(false);
		setTimeout(() => setPulsing(false), 1000);
	};
	return (
		<div>
			<section className='px-10 py-12 bg-[#F0FBFF]'>
				<h2 className='flex justify-center font-serif text-3xl font-semibold capitalize '>
					Project overview
				</h2>
				<div className='flex flex-col xl:h-[440px] my-12 gap-6 xl:gap-3 xl:flex-row'>
					{/* col1 */}
					<div
						className={` ${
							pulsing ? "animate-pulse bg-gray-300" : ""
						} w-full h-full xl:w-1/3  `}
					>
						<ImageLoader
							imageLoading={imageLoading}
							imageLoaded={imageLoaded}
							srcImg={LandingPage}
							className='h-[440px] w-full'
						/>
					</div>
					{/* col2 */}
					<div className='w-full h-full xl:w-1/3 '>
						<motion.article
							transition={{
								duration: 2,
								scale: 0.2,
								opacity: 0.25,
								ease: "linear",
							}}
							animate={{ opacity: 1, scale: 0.5 }}
							whileInView={{ scale: 1 }}
							className='flex p-6 mb-8 bg-white rounded-sm shadow-lg h-1/2 '
						>
							<i className='mr-4'>
								<MdOutlineViewInAr className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
							</i>
							<div className=''>
								<h3 className='mb-2 text-xl font-semibold leading-5  capitalize font-[roboto-slab] text-secondary-black'>
									The product
								</h3>
								<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
									KIENYEJI is a web-based platform that will
									provide the community with the chance to
									effortlessly prepare nutritious meals by
									following recipes step-by-step. It will also
									provide users with prompt access to
									fundamental information, streamlined
									searching capabilities, and integrated
									sharing mechanisms.
								</p>
							</div>
						</motion.article>

						<article className='flex p-6 mb-8 bg-white rounded-sm shadow-lg h-2/5 '>
							<i className='mr-4'>
								<MdOutlineViewInAr className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
							</i>
							<div className=''>
								<h3 className='mb-2 text-xl font-semibold leading-5  capitalize font-[roboto-slab] text-secondary-black'>
									Project duration:
								</h3>
								<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
									August 2022 to September 2022
								</p>
							</div>
						</article>
					</div>

					{/* col3 */}
					<div className='w-full xl:w-1/3 '>
						<article className='flex p-6 mb-8 bg-white rounded-sm shadow-lg h-1/2 '>
							<i className='mr-4'>
								<MdOutlineViewInAr className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
							</i>
							<div className=''>
								<h3 className='mb-2 text-xl font-semibold leading-5  capitalize font-[roboto-slab] text-secondary-black'>
									The problem
								</h3>
								<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
									Working adults who are constantly on the go
									do not want to spend a lot of time looking
									for healthy meals, but they do need to
									locate quick meal options online that will
									allow them to maintain their health.
								</p>
							</div>
						</article>
						<article className='flex p-6 mb-8 bg-white rounded-sm shadow-lg h-2/5 '>
							<i className='mr-4'>
								<MdOutlineViewInAr className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
							</i>
							<div className=''>
								<h3 className='mb-2 text-xl font-semibold leading-5  capitalize font-[roboto-slab] text-secondary-black'>
									The goal
								</h3>
								<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
									Design a platform that enables users to
									rapidly check for recipes that are good for
									them on their desktop computer or on their
									phone using a responsive website.
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section className='py-12'>
				<h2 className=' font-[roboto-slab] text-4xl font-bold mb-2 block text-center capitalize '>
					User Research
				</h2>
				<div className='flex justify-center w-full px-3 font-light font-[roboto-slab] text-secondary-gray'>
					<p className='w-5/6 m-auto leading-7 text-center '>
						I conducted interviews and created empathy maps to
						understand the users I am designing for and their needs.
						A primary user group identified was full-time workers
						that want to save some time searching for recipes to
						enjoy a healthy meal. This user group confirmed initial
						assumptions about potential users regarding the fact
						that some find some websites hard to use and want to
						have quick access to basic recipes information.
					</p>
				</div>
				<div className='relative p-10 mt-7 bg-gray-50 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Pain Points
					</h3>

					<div className='flex flex-col items-center justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}
						<div className='w-full h-full xl:w-1/3 '>
							<img
								src={PainPoints}
								alt=''
								className='w-full h-full'
							/>
						</div>
						{/* col2 */}
						<div className='w-full h-full xl:w-1/2 '>
							<div className='px-5 block text-center font-[roboto-slab] bg-white shadow py-7 rounded-sm'>
								<article className='block pt-0'>
									<h4 className='relative mt-0 mb-5 font-serif text-xl font-semibold leading-6 tracking-wide text-secondary-black'>
										Limited information
									</h4>
									<p className='relative font-light leading-7 text-dark-gray'>
										Platforms offering aid in meals
										suggestions currently do not offer clear
										recipes. Just pictures
									</p>
								</article>
							</div>
							<div className='px-5 block text-center font-[roboto-slab] mt-5 bg-white shadow py-7 rounded-sm'>
								<article className='block pt-0'>
									<h4 className='relative my-5 font-serif text-xl font-semibold leading-6 tracking-wide text-secondary-black'>
										Accessibility
									</h4>
									<p className='relative font-light leading-7 text-dark-gray'>
										Similar types of products are not
										locally available and end up having a
										bad experience
									</p>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className='relative p-10 bg-gray-50 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Persona: Benson
					</h3>

					<div className='flex flex-col justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}

						<div className='w-full xl:w-1/2 '>
							<div className='px-5 block text-center font-[roboto-slab]   py-7 '>
								<article className='block pt-0'>
									<h4 className='relative mt-0 mb-5 font-serif text-xl font-semibold leading-6 tracking-wide text-secondary-black'>
										Problem statement
									</h4>
									<p className='relative font-light leading-7 text-dark-gray'>
										Benson is a busy teacher who needs to
										quickly find healthy recipes online
										because he wants to save time and stay
										healthy.
									</p>
								</article>
							</div>
						</div>

						{/* col2 */}
						<div
							className={` ${
								pulsing ? "animate-pulse bg-gray-300" : ""
							} w-full h-full xl:w-1/2`}
						>
							<ImageLoader
								imageLoading={imageLoading}
								imageLoaded={imageLoaded}
								srcImg={Benson}
								className='object-contain w-full h-96'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='px-10 pb-12 '>
				<h2 className='flex justify-center font-serif text-3xl font-semibold capitalize '>
					Starting The Design
				</h2>
				<div className='relative p-10 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Paper wireframes{" "}
					</h3>

					<div className='flex flex-col justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}
						<div
							className={` ${
								pulsing ? "animate-pulse bg-gray-300" : ""
							} w-full h-full xl:w-1/2  `}
						>
							<ImageLoader
								imageLoading={imageLoading}
								imageLoaded={imageLoaded}
								srcImg={PaperWireFrameFDV1}
								className='object-contain w-full h-96'
							/>
						</div>
						{/* col2 */}
						<div className={`w-full xl:w-1/2  `}>
							<article className='px-5 block text-center font-[roboto-slab]   py-7 '>
								<p className='relative font-light leading-7 text-dark-gray'>
									I made screen iterations to capture
									different pain points from the user. In the
									home screen, I prioritized a quick and easy
									way of ordering the food.
								</p>
							</article>
						</div>
					</div>
				</div>
				<div className='flex flex-col xl:h-[440px] my-12 gap-6 xl:gap-3 xl:flex-row'>
					{/* col1 */}
					<div className='w-full xl:w-1/3 '>
						<article className='p-6 mb-8 bg-white rounded-sm shadow-lg h-1/2'>
							<h3 className='mb-2 text-xl font-semibold leading-5  capitalize font-[roboto-slab] text-secondary-black'>
								Digital wireframe 1
							</h3>
							<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
								As the initial design phase, these design
								screens are based on user feedback from the
								research
							</p>
							<ul className='mx-5 mt-3'>
								<li className='text-sm font-normal leading-6 tracking-wide list-disc text-primary-gray'>
									Best recipes selection per category helps
									users to quickly jump into the desired meals
								</li>
								<li className='text-sm font-normal leading-6 tracking-wide list-disc text-primary-gray'>
									Provides user with recommended/trending
									recipes
								</li>
							</ul>
						</article>
						<article className='p-6 mb-8 bg-white rounded-sm shadow-lg h-1/2'>
							<h3 className='mb-2 text-xl font-semibold leading-5  capitalize font-[roboto-slab] text-secondary-black'>
								Digital wireframe 2
							</h3>
							<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
								Providing a easy recipe description with a step
								by step guide on how to prepare the meal
							</p>
							<ul className='mx-5 mt-3'>
								<li className='text-sm font-normal leading-6 tracking-wide list-disc text-primary-gray'>
									Recipe nutritional composition included
								</li>
							</ul>
						</article>
					</div>
					{/* col2 */}

					<div
						className={` ${
							pulsing ? "animate-pulse bg-gray-300" : ""
						} w-full h-full xl:w-1/3  `}
					>
						<ImageLoader
							imageLoading={imageLoading}
							imageLoaded={imageLoaded}
							srcImg={DigitalWireFrameFD}
							className='h-[440px] w-full'
						/>
					</div>
					{/* col3 */}

					<div
						className={` ${
							pulsing ? "animate-pulse bg-gray-300" : ""
						} w-full h-full xl:w-1/3  `}
					>
						<ImageLoader
							imageLoading={imageLoading}
							imageLoaded={imageLoaded}
							srcImg={KieRecipe1Img}
							className='h-[440px] w-full'
						/>
					</div>
				</div>
				<div className='relative '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Low-Fidelity Prototype
					</h3>

					<div className='flex flex-col items-center justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}
						<div
							className={` ${
								pulsing ? "animate-pulse bg-gray-300" : ""
							} w-full h-full xl:w-1/2  `}
						>
							<ImageLoader
								imageLoading={imageLoading}
								imageLoaded={imageLoaded}
								srcImg={LoFiImg}
							/>
						</div>
						{/* col2 */}

						<div className={`w-full xl:w-1/2  `}>
							<article className='px-5 block text-center font-[roboto-slab] py-7 '>
								<p className='relative font-light leading-7 text-dark-gray'>
									The low fidelity user flow is clearly shown{" "}
									<ExternalLink
										href='https://www.figma.com/proto/DxOLqK528q21HEDrlQuRfq/Family-dinner-wireframe?node-id=15%3A158&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3&show-proto-sidebar=1'
										className=''
									>
										<span className='transition duration-200 ease-in text-secondary-blue hover:underline'>
											here
										</span>
									</ExternalLink>
								</p>
							</article>
						</div>
					</div>
				</div>

				<div className='relative mt-7 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Usability Study: Findings
					</h3>

					<div className='flex flex-col items-center justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}
						<div className='w-full h-full xl:w-1/3 '>
							<img
								src={PainPoints}
								alt=''
								className='w-full h-full'
							/>
						</div>
						{/* col2 */}
						<div className='w-full h-full xl:w-1/2 '>
							<article className='px-5 block border-2 border-b-0 bg-[#0547eee2] text-white bg-opacity-75  border-[#6f4cf2]  text-center font-[roboto-slab]  py-7 rounded-xl'>
								<h4 className='relative mt-0 mb-5 font-serif text-xl font-semibold leading-6 tracking-wide '>
									Round 1 Findings
								</h4>
								<p className='flex items-center font-light leading-10 gap-x-3 '>
									<i>
										<CgChevronRightO className='text-2xl' />
									</i>
									<span>
										Users want to filter searches using meal
										type/category
									</span>
								</p>
								<p className='flex items-center font-light leading-10 gap-x-3 '>
									<i>
										<CgChevronRightO className='text-2xl' />
									</i>
									<span>
										Users want save for later-favourites
									</span>
								</p>
							</article>
							<article className='px-5 block border-2 border-t-0 mt-3 bg-[#0547eee2] text-white bg-opacity-75  border-[#6f4cf2]  text-center font-[roboto-slab]  py-7 rounded-xl'>
								<h4 className='relative mt-0 mb-5 font-serif text-xl font-semibold leading-6 tracking-wide '>
									Round 2 Findings
								</h4>
								<p className='flex items-center font-light leading-10 gap-x-3 '>
									<i>
										<CgChevronRightO className='text-2xl' />
									</i>
									<span>
										The search filter has too many options
									</span>
								</p>
							</article>
						</div>
					</div>
				</div>
			</section>

			<section className='px-10 pb-12 bg-gray-50 '>
				<h2 className='flex justify-center font-serif text-3xl font-semibold capitalize '>
					Mockups
				</h2>
				<div className='relative p-10 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Cart Page
					</h3>

					<div className='flex flex-col justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}

						<div
							className={` ${
								pulsing ? "animate-pulse bg-gray-300" : ""
							} w-full h-full xl:w-1/2  `}
						>
							<ImageLoader
								imageLoading={imageLoading}
								imageLoaded={imageLoaded}
								srcImg={LandingPage}
								className='object-contain w-full h-96'
							/>
						</div>
						{/* col2 */}
						<div className={`w-full xl:w-1/2  `}>
							<article className='px-5 block text-center font-[roboto-slab]   py-7 '>
								<p className='relative font-light leading-7 text-dark-gray'>
									Early designs lacked an option for user to
									save recipes for later future reference. I
									added a favourite icon to wishlist a recipe.
								</p>
							</article>
						</div>
					</div>
				</div>
				<div className='relative px-10 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Address Page
					</h3>

					<div className='flex flex-col justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}
						<div className={`w-full xl:w-1/2  `}>
							<article className='px-5 block text-center font-[roboto-slab]   py-7 '>
								<p className='relative font-light leading-7 text-dark-gray'>
									Users wanted an option to search meals using
									a food category. Added!
								</p>
							</article>
						</div>

						{/* col2 */}
						<div
							className={` ${
								pulsing ? "animate-pulse bg-gray-300" : ""
							} w-full h-full xl:w-1/2  `}
						>
							<ImageLoader
								imageLoading={imageLoading}
								imageLoaded={imageLoaded}
								srcImg={LandingPage}
								className='object-contain w-full h-96'
							/>
						</div>
					</div>
				</div>
				<div className='relative px-10 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Key Mockups
					</h3>

					<div className='flex items-center justify-center mx-6 my-12 xl:flex-row'>
						<div
							className={` ${
								pulsing ? "animate-pulse bg-gray-300" : ""
							} w-full h-full xl:w-3/4  `}
						>
							<ImageLoader
								imageLoading={imageLoading}
								imageLoaded={imageLoaded}
								srcImg={KeyMockUps}
								className=''
							/>
						</div>
					</div>
				</div>

				<div className='relative '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						High-Fidelity Prototype
					</h3>

					<div className='flex flex-col items-center justify-center gap-6 mx-6 my-12 xl:gap-3 xl:flex-row'>
						{/* col1 */}
						<div
							className={` ${
								pulsing ? "animate-pulse bg-gray-300" : ""
							} w-full h-full xl:w-1/2  `}
						>
							<ImageLoader
								imageLoading={imageLoading}
								imageLoaded={imageLoaded}
								srcImg={HiFiImg}
							/>
						</div>
						{/* col2 */}

						<div className={`w-full xl:w-1/2  `}>
							<article className='px-5 block text-center font-[roboto-slab] py-7 '>
								<p className='relative font-light leading-7 text-dark-gray'>
									The final high-fidelity prototype presented
									cleaner user flows for recipe search and
									description. Generally a simple and clear
									navigation
								</p>
								<ExternalLink
									href='https://xd.adobe.com/view/bb479a6c-ebfd-4f37-a48e-750239ad0c94-ee14/'
									className='font-medium transition duration-200 ease-in text-secondary-blue hover:underline'
								>
									<span className='transition duration-200 ease-in text-secondary-blue hover:underline'>
										Kienyeji hifi prototypes
									</span>
								</ExternalLink>
							</article>
						</div>
					</div>
				</div>

				<div className='relative px-4 xl:px-10 '>
					<h3 className='font-semibold text-center text-xl mb-5 relative font-[roboto-slab] leading-5 block text-secondary-black '>
						Accessibility Considerations
					</h3>

					<div className='flex flex-col justify-center gap-6 mx-2 my-12 md:mx-6 xl:gap-3 xl:flex-row'>
						{/* col1 */}
						<article className='w-full p-4 mb-8 bg-white rounded-sm shadow-lg xl:p-6 md:w-1/2 xl:w-1/3'>
							<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-primary-green'>
								1
							</label>
							<p className='text-sm font-normal leading-6 tracking-wide xl:text-base text-primary-gray'>
								The color pallete is a11y, providing access to
								users who are vision impaired or color
								difficulty to have a perfect experience.
							</p>
						</article>

						{/* col2 */}
						<article className='w-full p-4 mb-8 bg-white rounded-sm shadow-lg xl:p-6 md:w-1/2 xl:w-1/3'>
							<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-primary-green'>
								2
							</label>
							<p className='text-sm font-normal leading-6 tracking-wide xl:text-base text-primary-gray'>
								Used icons to help make navigation easier.
							</p>
						</article>
						{/* col 3 */}
						<article className='w-full p-4 mb-8 bg-white rounded-sm shadow-lg xl:p-6 md:w-1/2 xl:w-1/3'>
							<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-primary-green'>
								3
							</label>
							<p className='text-sm font-normal leading-6 tracking-wide xl:text-base text-primary-gray'>
								Used detailed imagery for the recipes to help
								all users better understand the designs
							</p>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default New;

export const ImageLoader = ({ imageLoading, imageLoaded, srcImg }) => {
	return (
		<motion.img
			initial={{ opacity: 0, height: "200px" }}
			animate={{
				height: imageLoading ? "200px" : "440px",
				opacity: imageLoading ? 0 : 1,
			}}
			transition={
				({ height: { delay: 0.5, duration: 5 } },
				{ opacity: { delay: 0.5, duration: 1.4 } })
			}
			onLoad={imageLoaded}
			src={srcImg}
			alt=''
			className='object-contain w-full h-96'
		/>
	);
};
