import { useAuth } from "@/UseContext/auth";
import { useCart } from "@/UseContext/cartContext";
import { Category, Items } from "@/utils/constants/data";
import { formatToRupiah } from "@/utils/helpers/format-number.helper";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const Listmenu = () => {

    const { addToCart } = useCart();

    const route = useRouter()

    const { user } = useAuth()

    const [selectedCategory, setSelectedCategory] = useState(1);

    const handleCategorySelect = (id: any) => {
        setSelectedCategory(id);
    };

    const DataMakanan = Items?.filter((item) => item?.categoryId === selectedCategory)

    return (
        <section className="bottom-0 py-1 left-0 w-full text-black px-5 sm:px-6 lg:px-10 p-4 block md:flex justify-center items-center capitalize">
            <div className="items-center px-2 md:mt-4 md:px-14 py-10 w-full text-center">
                <div className="justify-center flex flex-col items-center">
                    <Image src='/assets/images/leaf.png' width={50} height={100} alt="leaf" data-aos="fade-down" data-aos-delay="100" />
                </div>
                <p className="font-lettering text-primary text-3xl mt-" data-aos="fade-down" data-aos-delay="200">Menu Makanan</p>
                <div className="mt-3 flex flex-col items-center">
                    <h1 className="capitalize text-[28px] md:text-[32px] font-bold" data-aos="fade-down" data-aos-delay="200">Makanan Lezat populer kami</h1>
                    <p className="w-full md:w-3/5 text-center mt-1" data-aos="fade-down" data-aos-delay="300">memperkenalkan menu makanan kami yang menggiurkan, penuh dengan cita rasa istimewa dan kelezatan kuliner untuk memuaskan setiap selera</p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center mt-6" data-aos="fade-down" data-aos-delay="400">

                    {Category?.map((category, index) => (
                        <div key={index} onClick={() => handleCategorySelect(category.id)}>
                            <div className={`border-2 border-primary rounded-[5px] px-4 py-[5px] cursor-pointer ${selectedCategory === category.id ? 'bg-primary text-white' : ''}`}>
                                <h3 className="text-[13px] font-[600] tracking-wider">{category.name}</h3>
                            </div>
                        </div>
                    ))}


                </div>
                <div className="flex flex-wrap gap-8  mt-10 justify-center" data-aos="fade-down" data-aos-delay="500">
                    {DataMakanan?.length > 0 ? DataMakanan?.slice(0, 8)?.map((item, index) => {

                        const handleCart = () => {
                            if (!user) {
                                toast.error("Anda Belum Masuk");
                                setTimeout(() => {
                                    route.push('/auth/login');
                                }, 2000);
                            } else {
                                addToCart(item)
                            }

                        }

                        return (
                            <div key={index}>
                                <Image src={item?.image} alt={item?.name} height={230} width={230} className=" rounded-t-md" />
                                <div className="bg-gray-200 bg-opacity-80 px-3 py-3 rounded-b-md ">
                                    <div className="flex justify-between mt-2 gap-7">
                                        <span className="font-extrabold text-md">{item?.name}</span>
                                        <div className="font-extrabold text-md">{formatToRupiah(item?.price).slice(0, 5).replace('.', '')}K</div>
                                    </div>
                                    <div className="mt-4 mb-3 ">
                                        <button onClick={handleCart} className=" px-20 border border-primary text-sm py-[6px] flex rounded-[3px] hover:bg-transparent w-full text-white text-center bg-primary hover:text-primary">Pesan </button>
                                    </div>
                                </div>
                            </div>)
                    }) :
                        <div className="my-10">
                            <Image src="/assets/images/data-empty.svg" alt="tes" height={230} width={230} className=" rounded-t-md" />
                            <div className=" bg-opacity-80 px-3 py-3 rounded-b-md ">
                                Ups, Tidak ada data
                            </div>
                        </div>
                    }

                </div>
            </div>
        </section>

    )
}

export default Listmenu