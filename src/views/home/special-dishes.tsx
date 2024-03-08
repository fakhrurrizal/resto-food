import { formatToRupiah } from "@/utils/helpers/format-number.helper";
import { StarIcon } from "@heroicons/react/16/solid";
import { ArrowRightIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useRouter } from "next/router";
import { useState } from "react";

const initialHoverStatus = {
    product_1: false,
    product_2: false,
    product_3: false,
    product_4: false,
    product_5: false,
    product_6: false,
};


const SpecialDisheh = () => {

    const [isHovered, setIsHovered] = useState(initialHoverStatus);

    const route = useRouter()

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
        <section className=" bottom-0 py-1  left-0 w-full text-black px-5 sm:px-6 lg:px-10  p-4 block md:flex justify-between items-center">
            <div className="items-center px-2 mt-2 md:mt-16 md:px-14 py-10 w-full ">
                <div>
                    <Image src='/assets/images/leaf.png' width={50} height={100} alt="leaf" data-aos="fade-down" data-aos-delay="100" />
                    <div className="mt-4 flex justify-between">
                        <span className="text-2xl md:text-4xl  font-bold font-poppins" data-aos="fade-down" data-aos-delay="200">Hidangan Spesial Kami</span>
                        <button className="mt-2 text-md hidden rounded-md md:flex gap-4 hover:text-primary" data-aos="fade-down" data-aos-delay="200" onClick={() => route.push('/menu')}>Lihat Semua <ArrowRightIcon className="h-7 w-7 transition-opacity duration-300" /></button>
                    </div>
                </div>
                <div className="grid md:grid-rows-1 md:grid-flow-col md:gap-3 mt-9">
                    <div>
                        <div className="grid md:grid-rows-2 md:grid-flow-col gap-1">
                            <div
                                data-aos="fade-down" data-aos-delay="200"
                                className="relative rounded-2xl border-2 border-primary mb-2 overflow-hidden"
                                onMouseEnter={() => handleMouseEnter('product_1')}
                                onMouseLeave={() => handleMouseLeave('product_1')}
                            >
                                <Image src="/assets/images/food/ayam-taliwang.png" height={100} width={700} alt="Ayam Taliwang" className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
                                <div
                                    className={`absolute top-0 left-0 w-full h-full  hidden md:flex  justify-center items-center transition-opacity duration-300 ${isHovered.product_1 ? 'opacity-100' : 'opacity-0'}`}
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
                                            <span className="font-extrabold text-md">Ayam Taliwang</span>
                                            <div className="font-extrabold text-md">{formatToRupiah(15)}K</div>
                                        </div>
                                        <div className="mt-5 ">
                                            <button onClick={() => route.push("/menu")} className="bg-white px-5 border border-primary text-sm py-1 flex rounded-[3px] hover:bg-primary hover:text-white">Pesan </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid  md:grid-cols-2 gap-2 ">
                                <div
                                    data-aos="fade-down" data-aos-delay="200"
                                    className="relative rounded-2xl border-2 max-h-56 min-h-56 border-primary mb-2 overflow-hidden"
                                    onMouseEnter={() => handleMouseEnter('product_2')}
                                    onMouseLeave={() => handleMouseLeave('product_2')}
                                >
                                    <Image src="/assets/images/food/nasi-kuning.png" height={100} width={600} alt="Ayam Taliwang" className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
                                    <div
                                        className={`absolute top-0 left-0 w-full h-full  hidden md:flex  justify-center items-center transition-opacity duration-300 ${isHovered.product_2 ? 'opacity-100' : 'opacity-0'}`}
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
                                                <span className="font-extrabold text-md">Nasi Kuning</span>
                                                <div className="font-extrabold text-md">{formatToRupiah(30)}K</div>
                                            </div>
                                            <div className="mt-5 ">
                                                <button onClick={() => route.push("/menu")} className="bg-white px-5 border border-primary text-sm py-1 flex rounded-[3px] hover:bg-primary hover:text-white">Pesan </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-down" data-aos-delay="200"
                                    className="relative rounded-2xl border-2 max-h-56 min-h-56 border-primary mb-2 overflow-hidden"
                                    onMouseEnter={() => handleMouseEnter('product_3')}
                                    onMouseLeave={() => handleMouseLeave('product_3')}
                                >
                                    <Image src="/assets/images/food/soto-betawi.png" height={100} width={600} alt="Ayam Taliwang" className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
                                    <div
                                        className={`absolute top-0 left-0 w-full h-full  hidden md:flex  justify-center items-center transition-opacity duration-300 ${isHovered.product_3 ? 'opacity-100' : 'opacity-0'}`}
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
                                                <span className="font-extrabold text-md">Soto Betawi</span>
                                                <div className="font-extrabold text-md">{formatToRupiah(15)}K</div>
                                            </div>
                                            <div className="mt-5 ">
                                                <button onClick={() => route.push("/menu")} className="bg-white px-5 border border-primary text-sm py-1 flex rounded-[3px] hover:bg-primary hover:text-white">Pesan </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid md:grid-rows-2 md:grid-flow-col gap-1">
                            <div
                                data-aos="fade-down" data-aos-delay="200"
                                className="relative rounded-2xl border-2 border-primary mb-2 overflow-hidden"
                                onMouseEnter={() => handleMouseEnter('product_4')}
                                onMouseLeave={() => handleMouseLeave('product_4')}
                            >
                                <Image src="/assets/images/food/ayam-geprek.png" height={100} width={700} alt="Ayam Taliwang" className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
                                <div
                                    className={`absolute top-0 left-0 w-full h-full  hidden md:flex  justify-center items-center transition-opacity duration-300 ${isHovered.product_4 ? 'opacity-100' : 'opacity-0'}`}
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
                                            <span className="font-extrabold text-md">Ayam Geprek</span>
                                            <div className="font-extrabold text-md">{formatToRupiah(15)}K</div>
                                        </div>
                                        <div className="mt-5 ">
                                            <button onClick={() => route.push("/menu")} className="bg-white px-5 border border-primary text-sm py-1 flex rounded-[3px] hover:bg-primary hover:text-white">Pesan </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 ">
                                <div
                                    data-aos="fade-down" data-aos-delay="200"
                                    className="relative rounded-2xl border-2 max-h-56 min-h-56 border-primary mb-2 overflow-hidden"
                                    onMouseEnter={() => handleMouseEnter('product_5')}
                                    onMouseLeave={() => handleMouseLeave('product_5')}
                                >
                                    <Image src="/assets/images/food/nasi-ayam-bakar.png" height={100} width={600} alt="Ayam Taliwang" className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
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
                                                <span className="font-extrabold text-md">Ayam Bakar</span>
                                                <div className="font-extrabold text-md">{formatToRupiah(18)}K</div>
                                            </div>
                                            <div className="mt-5 ">
                                                <button onClick={() => route.push("/menu")} className="bg-white px-5 border border-primary text-sm py-1 flex rounded-[3px] hover:bg-primary hover:text-white">Pesan </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-down" data-aos-delay="200"
                                    className="relative rounded-2xl border-2 max-h-56 min-h-56 border-primary mb-2 overflow-hidden"
                                    onMouseEnter={() => handleMouseEnter('product_6')}
                                    onMouseLeave={() => handleMouseLeave('product_6')}
                                >
                                    <Image src="/assets/images/food/nasi-rawon.png" height={100} width={600} alt="Ayam Taliwang" className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
                                    <div
                                        className={`absolute top-0 left-0 w-full h-full  hidden md:flex  justify-center items-center transition-opacity duration-300 ${isHovered.product_6 ? 'opacity-100' : 'opacity-0'}`}
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
                                                <span className="font-extrabold text-md">Nasi Rawon</span>
                                                <div className="font-extrabold text-md">{formatToRupiah(15)}K</div>
                                            </div>
                                            <div className="mt-5 ">
                                                <button onClick={() => route.push("/menu")} className="bg-white px-5 border border-primary text-sm py-1 flex rounded-[3px] hover:bg-primary hover:text-white">Pesan </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SpecialDisheh