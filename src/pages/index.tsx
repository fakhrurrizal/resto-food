import { getLayout } from "@/components/layout";
import About from "@/views/home/about";
import BlogComponent from "@/views/home/blog";
import Hero from "@/views/home/hero";
import Listmenu from "@/views/home/list-menu";
import Profile from "@/views/home/profile";
import SpecialDisheh from "@/views/home/special-dishes";
import SpecialOffer from "@/views/home/special-offer";
import TableBooking from "@/views/home/table-booking";

export const Home = () => {

	return (
		<main>
			<Hero />
			<About />
			<SpecialDisheh />
			<SpecialOffer />
			<Listmenu />
			<TableBooking />
			<Profile/>
			<BlogComponent />
		</main>
	);
}


Home.getLayout = getLayout;
export default Home;