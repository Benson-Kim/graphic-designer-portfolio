import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import FamilyDinner from "./Pages/FamilyDinner";
import Foodie from "./Pages/Foodie";
import Kienyeji from "./Pages/Kienyeji";
import New from "./Pages/New";
import NewGrid from "./Pages/NewGrid";

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/frankline-about' element={<About />} />
				<Route path='/contact-me' element={<Contact />} />
				<Route path='/family-dinner' element={<FamilyDinner />} />
				<Route path='/foodie' element={<Foodie />} />
				<Route path='/kienyeji' element={<Kienyeji />} />
				<Route path='/new' element={<New />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
