import ImageWithCard from "@/components/image-card"
import { ClipboardDocumentListIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import Image from "next/image"


const Hero = () => {

    return(
        <section className="relative bottom-0 py-16  left-0 w-full text-black px-5 sm:px-6 lg:px-10 bg-white p-4 block md:flex justify-between items-center">
				<div className=" parallax-bg absolute inset-0 bg-white opacity-5" style={{ backgroundImage: "url('/assets/images/makanan-3.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
				<div className="items-center  px-2 mt-8 md:mt-16 md:px-12 py-14 w-auto md:w-3/5">
					<div>
						<p data-aos="fade-down" data-aos-delay="100" className="text-black font-poppinsBlack text-4xl md:text-5xl mt-2" style={{ textTransform: "uppercase", letterSpacing: "3px" }}>Nikmatilah <span className="text-primary">  makanan lezat</span> bersama kami</p>
						<p data-aos="fade-down" data-aos-delay="200" className="text-black mt-4 ">Taklukkan lapar dan rasakan kelezatan sejati di restoran kami, bersama teman, keluarga, atau rekan kerja.</p>
					</div>
					<div className="mt-16">
						<div className="flex gap-5 font-normal " data-aos="fade-down" data-aos-delay="300">
							<button className="flex items-center text-sm bg-primary border-2 border-primary rounded-md hover:bg-transparent text-white px-5 py-2 hover:text-primary">
								<ClipboardDocumentListIcon className="h-5 w-5 mr-3 " /> Lihat Menu
							</button>
							<button className="flex items-center border-2 text-sm border-primary rounded-md px-6 py-1 text-primary hover:bg-primary hover:text-white">
								<ShoppingCartIcon className="h-5 w-5 mr-3" /> Pesan
							</button>
						</div>
					</div>
					<div className="mt-10">
						<div className="flex gap-5 md:gap-7" data-aos="fade-down" data-aos-delay="400">
							<ImageWithCard src="/assets/images/makanan-1.png" alt="Makanan 1" />
							<ImageWithCard src="/assets/images/makanan-2.png" alt="Makanan 2" />
							<ImageWithCard src="/assets/images/bg-makanan.png" alt="Background Makanan" />
						</div>
					</div>
				</div>
				<div className="relative items-center hidden md:block rounded-2xl px-2 mt-20 md:px-12 py-14 w-auto md:w-2/5">
					<Image alt="Background Image" src="/assets/images/makanan-4.png" height={30} width={350} className="rounded-2xl border-4 border-primary mb-2" data-aos="fade-down" data-aos-delay="200" />
					<div data-aos="fade-down" data-aos-delay="100" className="absolute top-2 left-44 transform text-center bg-white px-5 py-5 text-primary font-FatheyaFood border-4 border-primary rounded-full">
						Diskon <br /> <span>50%</span>
					</div>
				</div>
			</section>
    )
}

export default Hero