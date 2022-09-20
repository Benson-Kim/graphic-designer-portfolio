import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import "./styles.css";
const squareVariants = {
	visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
	hidden: { opacity: 0, scale: 0 },
};
function Square() {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={squareVariants}
			className='w-1/3 h-24 bg-green-300'
		>
			Content 1
		</motion.div>
	);
}
export default function NewGrid() {
	return (
		<div className='w-1/3 h-auto m-10'>
			<div className='flex items-center justify-center w-full'>
				<Square />
			</div>
			{/* <Square /> */}
		</div>
	);
}
