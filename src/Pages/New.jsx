import React from "react";

const New = () => {
	return (
		<div>
			<section className='py-20 mb-14'>
				<h2 className='flex justify-center font-serif text-3xl font-semibold '>
					All new resources will appear here
				</h2>
				<div className='flex flex-col gap-6 2xl:gap-2 2xl:flex-row'>
					{/* col1 */}
					<div className=''>
						<article className='flex p-5 bg-white rounded-sm shadow-lg'>
							<i></i>
						</article>
						<article></article>
					</div>
					{/* col2 */}
					<div className=''>
						<img src='' alt='' />
					</div>
					{/* col3 */}
				</div>
			</section>
		</div>
	);
};

export default New;
