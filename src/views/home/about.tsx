import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const About = () => {

    return(
        <section className=" bottom-0 py-1  left-0 w-full text-black px-5 sm:px-6 lg:px-10 bg-white p-4 block md:flex justify-between items-center">
				<div className="items-center relative px-2  mt-9 md:mt-0 md:px-12 w-auto md:w-2/5" data-aos="fade-down" data-aos-delay="300" >
					<Image src='/assets/images/makanan-5.png' width={700} height={400} alt="blob" />
				</div>
				<div className="relative items-center  block rounded-2xl px-2  md:px-12 py-10 md:py-32 w-auto md:w-3/5">
					<div className="justify-center">
						<Image src='/assets/images/leaf.png' width={50} height={100} alt="leaf" data-aos="fade-down" data-aos-delay="100"/>
						<div>
							<span className="font-lettering text-primary text-3xl" data-aos="fade-down" data-aos-delay="150">About Us</span>

						</div>
						<div className="mt-4">
							<span className="text-4xl  font-bold font-poppins" data-aos="fade-down" data-aos-delay="200">Temukan makanan favorit Anda di restoran kami</span>
						</div>
						<div className="mt-5" data-aos="fade-down" data-aos-delay="250">
							<span>Terselip di setiap sajian, tak hanya rasa yang memanjakan lidah, tapi juga cerita cinta yang mengalir di setiap sendoknya. Nikmatilah perjalanan rasa dan sentuhan kasih dalam setiap suapannya.</span>
						</div>
						<div className="mt-4" data-aos="fade-down" data-aos-delay="300">
							<button className="border-black hover:border-primary border-2 px-5 text-sm py-2 rounded-md flex gap-4 hover:bg-primary hover:text-white">Selengkapnya <ArrowRightIcon className="h-5 w-5 transition-opacity duration-300" /></button>
						</div>
					</div>

				</div>
			</section>
    )
}

export default About