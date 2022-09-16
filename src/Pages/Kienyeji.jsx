import React from "react";
import { ExternalLink } from "react-external-link";

import {
	MdError,
	MdOutlineStar,
	MdViewInAr,
	MdMenuBook,
	MdModeEditOutline,
} from "react-icons/md";
import { IoPersonSharp, IoStatsChart } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { RiBehanceLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";

import LandingPage from "../assets/kienyeji/landingpage.svg";
import Benson from "../assets/kienyeji/Benson .jpg";
import PaperWireFrameFDV1 from "../assets/kienyeji/kienyeji homepage v1-1.jpg";
import DigitalWireFrameFD from "../assets/kienyeji/Homepage digi wireframe.svg";
// import Digital2WireFrameFD from "../assets/kienyeji/Homepage meat lofi.svg";
import KeyMockUps from "../assets/kienyeji/kie key mockups.jpg";
import HiFiImg from "../assets/kienyeji/kie hifi proto.jpg";
import LoFiImg from "../assets/kienyeji/kie lofi proto.jpg";
import KieRecipe1Img from "../assets/kienyeji/kie recipe 1.svg";

const Kienyeji = () => {
	return (
		<div className='mx-5'>
			{/* Project Overview */}
			<div className='flex flex-col items-center justify-center w-full gap-6 my-6 bg-gray-100 md:flex-row '>
				<div className='order-last w-full ml-6 md:w-1/2 md:order-first'>
					<h2 className='py-2 pl-4 text-xl font-light capitalize border-l-4 md:py-4 md:pl-8 md:text-2xl text-primary-black border-secondary-blue'>
						Project Overview
					</h2>
					<div className='m-4'>
						<div className='px-1.5 py-3 my-3 bg-white rounded-md shadow '>
							<article className='flex items-center gap-3 m-3 md:m-3 md:gap-6'>
								<i className=''>
									<MdViewInAr className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
								</i>
								<div className=''>
									<h3 className='text-lg font-medium leading-7 tracking-wide text-secondary-blue'>
										The product
									</h3>
									<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
										KIENYEJI is a web-based platform that
										will provide the community with the
										chance to effortlessly prepare
										nutritious meals by following recipes
										step-by-step. It will also provide users
										with prompt access to fundamental
										information, streamlined searching
										capabilities, and integrated sharing
										mechanisms.
									</p>
								</div>
							</article>
						</div>

						<div className='px-1.5 py-3 my-3 bg-white rounded-md shadow '>
							<article className='flex items-center gap-3 m-3 md:m-3 md:gap-6'>
								<i className=''>
									<AiOutlineClockCircle className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
								</i>
								<div className=''>
									<h3 className='text-lg font-medium leading-7 tracking-wide text-secondary-blue'>
										Project duration:
									</h3>
									<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
										August 2022 to September 2022
									</p>
								</div>
							</article>
						</div>

						<div className='px-1.5 py-3 my-3 bg-white rounded-md shadow '>
							<article className='flex items-center gap-3 m-3 md:m-3 md:gap-6'>
								<i className=''>
									<MdError className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
								</i>
								<div className=''>
									<h3 className='text-lg font-medium leading-7 tracking-wide text-secondary-blue'>
										The problem:
									</h3>
									<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
										Working adults who are constantly on the
										go do not want to spend a lot of time
										looking for healthy meals, but they do
										need to locate quick meal options online
										that will allow them to maintain their
										health.
									</p>
								</div>
							</article>
						</div>
						<div className='px-1.5 py-3 my-3 bg-white rounded-md shadow '>
							<article className='flex items-center gap-3 m-3 md:m-3 md:gap-6'>
								<i className=''>
									<MdOutlineStar className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
								</i>
								<div className=''>
									<h3 className='text-lg font-medium leading-7 tracking-wide text-secondary-blue'>
										The goal:
									</h3>
									<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
										Design a platform that enables users to
										rapidly check for recipes that are good
										for them on their desktop computer or on
										their phone using a responsive website.
									</p>
								</div>
							</article>
						</div>

						<div className='px-1.5 py-3 my-3 bg-white rounded-md shadow '>
							<article className='flex items-center gap-3 m-3 md:m-3 md:gap-6'>
								<i className=''>
									<IoPersonSharp className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
								</i>
								<div className=''>
									<h3 className='text-lg font-medium leading-7 tracking-wide text-secondary-blue'>
										My role:
									</h3>
									<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
										IUX designer designing an app for
										Kienyeji from conception to delivery
									</p>
								</div>
							</article>
						</div>
						<div className='px-1.5 py-3 my-3 bg-white rounded-md shadow '>
							<article className='flex items-center gap-3 m-3 md:m-3 md:gap-6'>
								<i className=''>
									<AiOutlineUnorderedList className='p-2 text-xl text-white rounded-full w-11 h-11 bg-secondary-blue' />
								</i>
								<div className=''>
									<h3 className='text-lg font-medium leading-7 tracking-wide text-secondary-blue'>
										Responsibilities:
									</h3>
									<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
										Conducting interviews, paper and digital
										wireframing, low and high-fidelity
										prototyping, conducting usability
										studies, accounting for accessibility,
										and iterating on designs
									</p>
								</div>
							</article>
						</div>
					</div>
				</div>
				<div className='w-full md:w-1/2'>
					<img
						src={LandingPage}
						alt=''
						className='order-first object-fill w-auto h-96 md:order-last'
					/>
				</div>
			</div>
			{/* User Research */}
			<section>
				<h2 className='py-2 pl-4 text-xl font-light text-white capitalize bg-red-berry rounded-t-md md:py-4 md:pl-8 md:text-2xl'>
					User research
				</h2>
				<div className='m-4 bg-gray-100'>
					<div className='pt-3 my-3 bg-white rounded-md shadow '>
						<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-red-berry '>
							summary
						</h2>
						<article className='flex px-1.5 py-3 items-center gap-3 m-3 md:m-3 md:gap-6'>
							<i className=''>
								<IoStatsChart className='p-2 text-xl text-white rounded-full w-11 h-11 bg-red-berry' />
							</i>
							<div className=''>
								<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
									I conducted interviews and created empathy
									maps to understand the users I am designing
									for and their needs. A primary user group
									identified was full-time workers that want
									to save some time searching for recipes to
									enjoy a healthy meal. This user group
									confirmed initial assumptions about
									potential users regarding the fact that some
									find some websites hard to use and want to
									have quick access to basic recipes
									information.
								</p>
							</div>
						</article>
					</div>

					<div className='my-3 bg-white rounded-md shadow '>
						<h2 className='py-1.5 font-sans text-xl font-normal tracking-wide text-center text-white capitalize bg-red-berry rounded-t-md'>
							pain points
						</h2>
						<div className='flex flex-col flex-wrap items-center justify-between w-full gap-3 p-3 sm:flex-row'>
							<article className='border-l-4 shadow-sm shadow-primary-blue border-primary-blue px-4 py-1.5 rounded-md w-full sm:w-1/2 md:w-1/3'>
								<h2 className='mb-1.5 py-1 text-xl font-medium text-center tracking-wide  '>
									Limited information
								</h2>
								<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
									Platforms offering aid in meals suggestions
									currently do not offer clear recipes. Just
									pictures
								</p>
							</article>
							<article className='border-l-4 shadow-sm shadow-primary-blue border-primary-blue px-4 py-1.5 rounded-md w-full sm:w-1/2 md:w-1/3'>
								<h2 className='mb-1.5 py-1 text-xl font-medium text-center tracking-wide  '>
									Accessibility
								</h2>
								<p className='text-sm font-normal leading-6 tracking-wide text-primary-gray'>
									Similar types of products are not locally
									available and end up having a bad experience
								</p>
							</article>
						</div>

						{/* Persona */}
						<div className='p-3 m-3 transition duration-200 ease-in-out border rounded-md shadow-sm'>
							<h2 className='text-lg font-semibold text-red-berry '>
								Persona:
								<span className='font-serif font-light text-secondary-blue'>
									{" "}
									Benson
								</span>
							</h2>
							<div className='flex flex-col justify-between w-full gap-3 md:flex-row '>
								<div className='w-full md:w-1/2'>
									<h3 className='my-2 text-lg font-medium leading-7 tracking-wide text-primary-black '>
										Problem Statement
									</h3>
									<p className='my-1 text-sm font-normal leading-6 tracking-wide text-primary-gray'>
										Benson is a busy teacher who needs to
										quickly find healthy recipes online
										because he wants to save time and stay
										healthy.
									</p>
								</div>
								<div className='w-full md:w-1/2'>
									<img src={Benson} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Starting the design */}
			<div className='w-full ml-6 '>
				<h2 className='py-2 pl-4 text-xl font-light capitalize border-l-4 md:py-4 md:pl-8 md:text-2xl text-primary-black border-closeto-orange'>
					Starting the design
				</h2>
				<div className='m-4'>
					<div className='p-6 my-3 bg-white rounded-md shadow '>
						{/* Paper wireframes */}
						<div className='p-3 m-3 transition duration-200 ease-in-out border rounded-md shadow-sm'>
							<h2 className='text-lg font-semibold text-closeto-orange '>
								Paper wireframes
							</h2>
							<div className='flex flex-col items-center justify-between w-full gap-3 md:flex-row '>
								<div className='w-full md:w-1/2'>
									<p className='my-1 text-lg font-normal leading-6 tracking-wide text-primary-gray'>
										I made screen iterations to capture
										different pain points from the user. In
										the home screen, I prioritized a quick
										and easy way of ordering the food.
									</p>
								</div>
								<div className='w-full md:w-1/2'>
									<img
										src={PaperWireFrameFDV1}
										alt=''
										className='object-contain w-full h-96'
									/>
								</div>
							</div>
						</div>
						<div className='p-3 m-3 transition duration-200 ease-in-out border rounded-md shadow-sm'>
							<h2 className='text-lg font-semibold text-red-berry '>
								Digital wireframes
							</h2>
							<div className='flex flex-col items-center justify-between w-full gap-3 mb-8 md:flex-row '>
								<div className='w-full md:w-1/2'>
									<p className='my-1 text-lg font-normal leading-6 tracking-wide text-primary-black'>
										As the initial design phase, these
										design screens are based on user
										feedback from the research
									</p>
									<ul>
										<li className='my-1 ml-8 text-base font-normal leading-6 tracking-wide list-disc text-primary-gray'>
											Best recipes selection per category
											helps users to quickly jump into the
											desired meals
										</li>
										<li className='my-1 ml-8 text-base font-normal leading-6 tracking-wide list-disc text-primary-gray'>
											Provides user with
											recommended/trending recips
										</li>
									</ul>
								</div>
								<div className='w-full md:w-1/2'>
									<img
										src={DigitalWireFrameFD}
										alt=''
										className='object-contain w-full h-96'
									/>
								</div>
							</div>
							<hr className='w-2/3 mx-auto border-t-4 border-closeto-orange' />
							<div className='flex flex-col items-center justify-between w-full gap-3 mt-8 md:flex-row '>
								<div className='w-full md:w-1/2'>
									<p className='my-1 text-lg font-normal leading-6 tracking-wide text-primary-black'>
										Providing a easy recipe description with
										a step by step guide on how to prepare
										the meal
									</p>
									<ul>
										<li className='my-1 ml-8 text-base font-normal leading-6 tracking-wide list-disc text-primary-gray'>
											Recipe nutritional composition
											included
										</li>
									</ul>
								</div>
								<div className='w-full md:w-1/2'>
									<img
										src={KieRecipe1Img}
										alt=''
										className='object-contain w-full h-96'
									/>
								</div>
							</div>
						</div>
						<div className='p-3 m-3 transition duration-200 ease-in-out border rounded-md shadow-sm'>
							<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-semibold tracking-wide border-l-4 capitalize text-primary-black border-closeto-orange '>
								Low-fidelity prototype
							</h2>
							<div className='flex flex-col items-center justify-between w-full gap-3 mb-8 md:flex-row '>
								<div className='w-full md:w-1/2'>
									<p className='my-1 text-lg font-normal leading-6 tracking-wide text-primary-black'>
										The low fidelity user flow is clearly
										shown{" "}
										<ExternalLink
											href='https://www.figma.com/proto/DxOLqK528q21HEDrlQuRfq/Family-dinner-wireframe?node-id=15%3A158&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3&show-proto-sidebar=1'
											className=''
										>
											<span className='transition duration-200 ease-in text-secondary-blue hover:underline'>
												here
											</span>
										</ExternalLink>
									</p>
								</div>
								<div className='w-full md:w-1/2'>
									<img
										src={LoFiImg}
										alt=''
										className='object-contain w-full h-96'
									/>
								</div>
							</div>
						</div>
						<div className='p-3 m-3 transition duration-200 ease-in-out border rounded-md shadow-sm'>
							<h2 className='py-2.5  ml-4 px-4 mt-3 font-sans text-xl font-semibold tracking-wide border-l-4 capitalize text-primary-black border-closeto-orange '>
								Usability study: findings
							</h2>
							<p className='my-2 ml-6 text-base font-normal leading-6 tracking-wide text-primary-gray'>
								I did one round of usability tests with the
								low-fidelity prototype to see if the flow made
								sense to the user and if the user understood the
								structure as a whole. From wireframes to
								mockups, the design was guided by the results of
								the first study.
							</p>
							<div className='flex justify-around w-full ml-6'>
								<article>
									<h2 className='text-lg font-semibold leading-7 tracking-wide text-closeto-orange'>
										Round 1 Findings
									</h2>
									<div className='flex flex-col gap-5 p-5 rounded-md bg-gray-50'>
										<div className='inline-flex items-center gap-3 leading-6'>
											<label className='p-3 text-white rounded-3xl bg-closeto-orange'>
												1
											</label>
											<p className='leading-5 tracking-wide text-primary-gray'>
												Users want to filter searches
												using meal type/category
											</p>
										</div>
										<div className='inline-flex items-center gap-3 leading-6'>
											<label className='p-3 text-white rounded-3xl bg-closeto-orange'>
												2
											</label>
											<p className='leading-5 tracking-wide text-primary-gray'>
												Users want save for
												later-favourites
											</p>
										</div>
									</div>
								</article>
								<article>
									<h2 className='text-lg font-semibold leading-7 tracking-wide text-closeto-orange'>
										Round 2 Findings
									</h2>
									<div className='flex flex-col gap-5 p-5 rounded-md bg-gray-50'>
										<div className='inline-flex items-center gap-3 leading-6'>
											<label className='p-3 text-white rounded-3xl bg-closeto-orange'>
												1
											</label>
											<p className='leading-5 tracking-wide text-primary-gray'>
												The search filter has too many
												options
											</p>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* mockups */}
			<div className='w-full ml-6 shad '>
				<h2 className='py-2 pl-4 text-xl font-light text-white capitalize bg-primary-green rounded-t-md md:py-4 md:pl-8 md:text-2xl'>
					Mockups
				</h2>
				<div className='m-4 '>
					<div className='pt-3 my-3 bg-white rounded-md shadow '>
						<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-primary-green '>
							Cart Page
						</h2>
						<div className='flex flex-col items-center justify-between w-full gap-3 mb-8 md:flex-row '>
							<div className='w-full px-4 md:w-1/2'>
								<p className='my-1 font-normal leading-6 tracking-wide text-primary-gray'>
									Early designs lacked an option for user to
									save recipes for later future reference. I
									added a favourite icon to wishlist a recipe.
								</p>
							</div>
							<div className='w-full md:w-1/2'>
								<img
									src={LandingPage}
									alt=''
									className='object-contain w-full h-96'
								/>
							</div>
						</div>
						<hr className='w-2/3 mx-auto border-t-4 border-primary-green' />
						<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-primary-green '>
							Address Page
						</h2>
						<div className='flex flex-col items-center justify-between w-full gap-3 mt-8 md:flex-row '>
							<div className='w-full md:w-1/2'>
								<p className='my-1 text-lg font-normal leading-6 tracking-wide text-primary-black'>
									Users wanted an option to search meals using
									a food category. Added!
								</p>
							</div>
							<div className='w-full md:w-1/2'>
								<img
									src={LandingPage}
									alt=''
									className='object-contain w-full h-96'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='m-4'>
					<div className='pt-3 my-3 bg-white rounded-md shadow '>
						<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-primary-green '>
							Key Mockups
						</h2>
						<div className='w-full'>
							<img
								src={KeyMockUps}
								alt=''
								className='object-contain w-full h-96'
							/>
						</div>
					</div>
					<div className='pt-3 my-3 bg-white rounded-md shadow '>
						<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-primary-green '>
							High-fidelity prototype
						</h2>

						<div className='flex flex-col items-center justify-between w-full gap-3 mb-8 md:flex-row '>
							<div className='w-full ml-8 md:w-1/2'>
								<p className='my-1 font-normal leading-6 tracking-wide text-primary-gray'>
									The final high-fidelity prototype presented
									cleaner user flows for recipe search and
									description. Generally a simple and clear
									navigation
								</p>

								<ExternalLink
									href='https://xd.adobe.com/view/bb479a6c-ebfd-4f37-a48e-750239ad0c94-ee14/'
									className='my-3 font-medium transition duration-200 ease-in text-secondary-blue hover:underline'
								>
									Kienyeji hifi prototypes
								</ExternalLink>
							</div>
							<div className='w-full md:w-1/2'>
								<img
									src={HiFiImg}
									alt=''
									className='object-contain w-full h-96'
								/>
							</div>
						</div>
					</div>
					<div className='py-3 my-3 bg-white rounded-md shadow '>
						<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-primary-green '>
							Accessibility considerations
						</h2>
						<div className='flex flex-wrap w-full gap-3 m-3 md:justify-around'>
							<div className='w-5/6 p-1 rounded-md md:p-4 bg-gray-50 md:w-1/4'>
								<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-primary-green'>
									1
								</label>
								<p className='leading-5 tracking-wide text-center text-primary-gray'>
									The color pallete is a11y, providing access
									to users who are vision impaired or color
									difficulty to have a perfect experience.
								</p>
							</div>

							<div className='w-5/6 p-1 rounded-md md:p-4 bg-gray-50 md:w-1/4'>
								<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-primary-green'>
									2
								</label>
								<p className='leading-5 tracking-wide text-center text-primary-gray'>
									Used icons to help make navigation easier.
								</p>
							</div>

							<div className='w-5/6 p-1 rounded-md md:p-4 bg-gray-50 md:w-1/4'>
								<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-primary-green'>
									3
								</label>
								<p className='leading-5 tracking-wide text-center text-primary-gray'>
									Used detailed imagery for the recipes to
									help all users better understand the designs
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Going Forward */}
			<div className='w-full ml-6 '>
				<h2 className='py-2 pl-4 text-xl font-light text-white capitalize bg-dark-gray rounded-t-md md:py-4 md:pl-8 md:text-2xl'>
					Going Forward
				</h2>
				<div className='m-4'>
					<div className='pt-3 my-3 bg-white rounded-md shadow '>
						<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-dark-gray '>
							Takeaways
						</h2>
						<div className='flex flex-col justify-center w-full gap-4 mx-8 bg-white rounded-md shadow md:flex-row'>
							<div className='w-full md:w-1/2'>
								<article className='flex px-1.5 py-3 gap-3 m-3 md:m-3 md:gap-6'>
									<i>
										<BsBagCheckFill className='p-2 text-xl text-white rounded-full w-11 h-11 bg-dark-gray' />
									</i>
									<div className=''>
										<h3 className='text-lg font-medium leading-7 tracking-wide text-dark-gray'>
											Impact:
										</h3>
										<p className='mt-3 text-base font-normal leading-6 text-primary-gray'>
											The web app makes users look at
											their diet and have healthy meals
											anytime.
										</p>
										<p className='mt-4'>
											<span>
												One quote from peer feedback:
											</span>
											<blockquote className='px-3 text-sm italic font-normal leading-6 text-primary-gray'>
												“The web app made it so easy and
												fun to browse for healthy food
												recipes! I would definitely use
												this app as a go-to for a
												delicious, fast, and even
												healthy meal.”
											</blockquote>
										</p>
									</div>
								</article>
							</div>
							<div className='w-full md:w-1/2'>
								<article className='flex px-1.5 py-3  gap-3 m-3 md:m-3 md:gap-6'>
									<i>
										<MdMenuBook className='p-2 text-xl text-white rounded-full w-11 h-11 bg-dark-gray' />
									</i>
									<div className=''>
										<h3 className='text-lg font-medium leading-7 tracking-wide text-dark-gray'>
											What I Learned:
										</h3>
										<p className='mt-3 text-base font-normal leading-6 text-primary-gray'>
											While designing the Kienyeji web
											app, I learned that the first ideas
											for the app are only the beginning
											of the process. Usability studies
											and peer feedback influenced each
											iteration of the app’s designs.
										</p>
									</div>
								</article>
							</div>
						</div>
						<div className='py-3 my-3 '>
							<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-dark-gray '>
								Next steps
							</h2>
							<div className='flex flex-wrap w-full gap-3 m-3 md:justify-around'>
								<div className='w-5/6 p-1 rounded-md md:p-4 bg-gray-50 md:w-1/4'>
									<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-dark-gray'>
										1
									</label>
									<p className='leading-5 tracking-wide text-center text-primary-gray'>
										Conduct another round of usability
										studies to validate whether the pain
										points users experienced have been
										effectively addressed.
									</p>
								</div>

								<div className='w-5/6 p-1 rounded-md md:p-4 bg-gray-50 md:w-1/4'>
									<label className='flex items-center justify-center w-10 h-10 mx-auto mb-4 text-xl text-white rounded-full bg-dark-gray'>
										2
									</label>
									<p className='leading-5 tracking-wide text-center text-primary-gray'>
										Conduct more user research to determine
										any new areas of need.
									</p>
								</div>
							</div>
						</div>
						<div className='py-3 my-3 '>
							<h2 className='py-2.5 ml-4 px-4 mt-3 font-sans text-xl font-normal tracking-wide border-l-4 capitalize text-primary-black border-dark-gray '>
								Let’s connect!
							</h2>
							<div className='w-full p-1 mx-8 rounded-md md:p-4 bg-gray-50 '>
								<i className='flex items-center justify-center mx-auto text-xl text-white'>
									<MdModeEditOutline className='p-2 text-xl text-white rounded-full w-11 h-11 bg-dark-gray' />
								</i>
								<p className='mt-6 leading-5 tracking-wide text-center text-primary-gray'>
									Thank you for your time reviewing my work on
									the Kienyeji web app If you’d like to see
									more or get in touch, my contact information
									is provided below.
								</p>
								<div className='flex items-center justify-center mt-6 space-x-10'>
									<div className='flex items-center gap-x-5'>
										<ExternalLink
											href='https://www.behance.net/frankmueke'
											className=''
										>
											<RiBehanceLine className='w-8 h-8 p-1 transition duration-200 ease-in border-2 rounded-full border-dark-gray transform-gpu text-drak-gray hover:text-white hover:bg-dark-gray' />
										</ExternalLink>
										<ExternalLink
											href='https://www.linkedin.com/in/frankmueke'
											className=''
										>
											<RiLinkedinFill className='w-8 h-8 p-1 transition duration-200 ease-in border-2 rounded-full border-dark-gray transform-gpu text-drak-gray hover:text-white hover:bg-dark-gray' />
										</ExternalLink>

										<ExternalLink
											href='https://twitter.com/FrankMueke'
											className=''
										>
											<RiTwitterLine className='w-8 h-8 p-1 transition duration-200 ease-in border-2 rounded-full border-dark-gray transform-gpu text-drak-gray hover:text-white hover:bg-dark-gray' />
										</ExternalLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Kienyeji;
