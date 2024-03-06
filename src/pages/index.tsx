import { getLayout } from "@/components/layout";
import About from "@/views/home/about";
import Hero from "@/views/home/hero";
import Listmenu from "@/views/home/list-menu";
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
		</main>
	);
}


Home.getLayout = getLayout;
export default Home;