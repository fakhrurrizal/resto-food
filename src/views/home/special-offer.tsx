import { formatToRupiah } from "@/utils/helpers/format-number.helper"
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image"
import { useState } from "react";

const initialHoverStatus = {
    product_5: false,
};

const SpecialOffer = () => {

    const [isHovered, setIsHovered] = useState(initialHoverStatus);

    const handleMouseEnter = (id: string) => {
        setIsHovered((prev) => ({
            ...prev,
            [id]: true,
        }));
    };

    const handleMouseLeave = (id: string) => {
        setIsHovered((prev) => ({
            ...prev,
            [id]: false,
        }));
    };

    return (
        <section className="relative bottom-0 py-24  left-0 w-full text-black px-5 sm:px-6 lg:px-10 bg-white p-4 block md:flex justify-between items-center">
            <div className=" parallax-bg absolute inset-0 bg-white " style={{ backgroundImage: "url('/assets/images/bg-food.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <Image src='/assets/images/leaf.png' width={100} height={100} alt="leaf" className="absolute left-[-10px] top-[5px]" />
            <Image src='/assets/images/cabai.png' width={100} height={100} alt="cabai" className="absolute left-[-10px] bottom-[-13px]" />
            <div className=" items-center px-2 md:px-16 py-2 w-auto md:w-2/4">
                <div data-aos="fade-down" data-aos-delay="100" className=" md:mt-0">
                    <span className="font-quesha text-3xl ml-1 md:ml-2">Penawaran istimewa</span>
                </div>
                <div data-aos="fade-down" data-aos-delay="200">
                    <span className="text-primary font-[600] font-poppinsBlack text-[33px] md:text-[50px] uppercase">Bulan Ramadhan</span>
                </div>
                <div data-aos="fade-down" data-aos-delay="300">
                    <span>Menyambuat datangnya belum suci Ramadhan! Nikmati 30% dari semua item sebagai tanda penghargaan</span>
                </div>
                <div className="mt-10" data-aos="fade-down" data-aos-delay="400">
                    <button className="text-md border-2 px-9 py-2 border-primary hover:bg-transparent rounded-md bg-primary text-white hover:text-primary">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
            {/* <div className="relative items-center block rounded-2xl px-2 md:px-12 py-2 md:py- w-auto md:w-2/4">
                <div className="flex justify-center relative mt-10" data-aos="fade-down" data-aos-delay="300">
                    <div data-aos="fade-down" data-aos-delay="200"
                        className="relative rounded-2xl border-2 border-primary mb-2 overflow-hidden"
                        onMouseEnter={() => handleMouseEnter('product_5')}
                        onMouseLeave={() => handleMouseLeave('product_5')}
                    >
                        <Image src="/assets/images/sate-kambing.png" height={400} width={400} alt="Ayam Taliwang" className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
                        <div
                            className={`absolute top-0 left-0 w-full h-full  hidden md:flex  justify-center items-center transition-opacity duration-300 ${isHovered.product_5 ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="bg-white bg-opacity-75 px-7 py-5 rounded-md ">
                                <div className="flex gap-1">
                                    <StarIcon className="h-5 w-5 text-primary" />
                                    <StarIcon className="h-5 w-5 text-primary" />
                                    <StarIcon className="h-5 w-5 text-primary" />
                                    <StarIcon className="h-5 w-5 text-primary" />
                                    <StarIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex justify-between mt-2 gap-10">
                                    <span className="font-extrabold text-md">Sate Kambing</span>
                                    <div>
                                        <div className="font-extrabold text-[10px]  mt-[-7px]" style={{ textDecoration: 'line-through' }}>{formatToRupiah(22)}K</div>
                                        <div className="font-extrabold text-[15px] mt-[-7px]" >{formatToRupiah(15)}K</div>
                                    </div>

                                </div>
                                <div className="mt-5 ">
                                    <button className="bg-white px-5 border border-primary text-sm py-1 flex rounded-[3px] hover:bg-primary hover:text-white">Pesan </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </section>
    )
}

export default SpecialOffer