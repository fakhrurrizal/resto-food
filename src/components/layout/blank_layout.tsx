import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, BellAlertIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
    children: ReactNode;
}

const BlankLayout = ({ children }: Props) => {

    const [scrollNavbar, setScrollNavbar] = useState(0);

    const [visible, setVisible] = useState(true);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = scrollNavbar > currentScrollPos;

            setScrollNavbar(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [scrollNavbar]);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const { pathname }  = useRouter()

    return (
        <div className="flex flex-col min-h-screen font-poppins">
            <header>
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm md:backdrop-blur-0 p-4 fixed top-[-1] left-0 w-full z-10 transition-all duration-500">
                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                        <div className="flex items-center justify-between h-10">
                            <div className={`items-center gap-14 mt-[-10px] md:flex hidden`}>
                                <div className="flex items-center gap-5 mt-[-10px] ">
                                    <Link href="https://www.facebook.com/muhammad.f.rizal.7374">
                                        <span className="text-sm font-medium font-poppins hover:text-blue-600 cursor-pointer">Facebook</span>
                                    </Link>
                                    <span className="text-sm font-medium font-poppins">|</span>
                                    <Link href="https://www.instagram.com/fakhrur_rizal24/">
                                        <span className="text-sm font-medium font-poppins hover:text-blue-600 cursor-pointer">Instagram</span>
                                    </Link>
                                </div>
                                <div className={`flex items-center gap-3 mt-[-10px]`}>
                                    <EnvelopeIcon className="h-5 w-5  text-primary" />
                                    <Link href={`https://mail.google.com/mail/?view=cm&to=fakhrurrizal10@gmail.com&su=Percobaan Resto&body=Hallo Kang Fakhrur, hehe😁`} target="_blank">
                                        <span className="text-sm font-medium font-poppins hover:text-blue-600 cursor-pointer">fakhrurrizal10@gmail.com</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={`flex items-center justif gap-10 mt-[-10px]  ml-auto `}>
                                <div className={`flex items-center gap-1 mt-[-10px]`}>
                                    <BellAlertIcon className="h-4 w-4 md:h-5 md:w-5 mt-1 text-primary" />
                                    <Link href="https://www.instagram.com/fakhrur_rizal24/">
                                        <span className="text-[9px] font-medium font-poppins hover:text-blue-600 md:text-sm cursor-pointer">Dapatkan Diskon 30% untuk semua makanan hingga 25 April</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="hidden md:block">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={`bg-primary p-4 fixed top-12 w-full z-10 transition-all duration-500 ${visible ? 'h-20' : 'h-16'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`flex items-center justify-between h-16 transition-all duration-500 ${visible ? 'mt-0' : 'mt-[-10px]'}`}>
                            <div className="flex items-center gap-1 md:gap-5 mt-[-10px]">
                                <Link href="/">
                                    <Image alt="image" src="/assets/icon/logo.png" height={50} width={50} />
                                </Link>
                                <span className="text-md md:text-[20px] text-white font-[600] font-poppins">Kang Fakhrur <span className="text-black">Resto</span></span>
                            </div>
                            <div className=" items-center hidden md:flex gap-5 md:gap-10 mt-[-10px] mx-auto">
                                <Link href="/">
                                    <span className={`text-md font-poppins text-white cursor-pointer hover:border-b hover:border-white  transition-all duration-300 ${pathname === "/" && "border-b border-white"}`}>Home</span>
                                </Link>
                                <Link href="/menu">
                                    <span className={`text-md font-poppins text-white cursor-pointer hover:border-b hover:border-white transition-all duration-300 ${pathname === "/menu" && "border-b border-white"}`}>Menu</span>
                                </Link>
                                <Link href="/">
                                    <span className="text-md font-poppins text-white cursor-pointer hover:border-b hover:border-white transition-all duration-300">Order</span>
                                </Link>
                                <Link href="/">
                                    <span className="text-md font-poppins text-white cursor-pointer hover:border-b hover:border-white transition-all duration-300">Kontak</span>
                                </Link>
                            </div>
                            <div className="items-center ml-auto mt-[-10px] hidden md:block">
                                <button className="border-white rounded-md border-2 px-5 py-1 text-white hover:bg-white hover:text-primary">Masuk</button>
                            </div>
                            <div className="items-center ml-auto mt-[-10px] flex md:hidden">
                                <button onClick={toggleDrawer}><Bars3Icon className="h-6 w-6 text-white" /></button>
                            </div>
                        </div>

                        {isDrawerOpen && (
                            <div className="fixed inset-0 z-50 bg-white transition-all duration-300">
                                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 relative">
                                    <button className="absolute top-4 right-4 text-primary" onClick={toggleDrawer}><XMarkIcon className="h-6 w-6" /></button>
                                    <div className="flex flex-col gap-5">
                                        <Link href="/">
                                            <span className="text-lg font-poppins cursor-pointer hover:border-b hover:border-white transition-all duration-300">Home</span>
                                        </Link>
                                        <Link href="/">
                                            <span className="text-lg font-poppins cursor-pointer hover:border-b hover:border-white transition-all duration-300">Menu</span>
                                        </Link>
                                        <Link href="/">
                                            <span className="text-lg font-poppins cursor-pointer hover:border-b hover:border-white transition-all duration-300">Order</span>
                                        </Link>
                                        <Link href="/">
                                            <span className="text-lg font-poppins cursor-pointer hover:border-b hover:border-white transition-all duration-300">Kontak</span>
                                        </Link>
                                    </div>
                                    <div className="items-center ml-auto mt-5 ">
                                        <button className="border-primary rounded-md border-2 px-10 py-1 text-primary hover:bg-primary hover:text-white">Masuk</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            <main className="pt-22">{children}</main>

            <footer >
                <div className="bottom-0 pb-20 left-0 w-full mx-auto bg-cover bg-center px-5 sm:px-6 lg:px-10 bg-white p-4 block md:flex justify-between items-center" style={{ backgroundImage: "url('/assets/images/bg-wall.png')", backgroundColor: "rgba(255, 255, 255, 0.92)" }}>
                    <div className="flex items-center px-2 md:px-12 py-8 w-auto md:w-2/4">

                        <div>
                            <Link href="/">
                                <Image alt="Logo" src="/assets/icon/logo.png" height={50} width={50} />
                            </Link>
                            <p className="text-primary font-lettering mt-4 text-[26px] font-[500]">Lokasi Kami</p>
                            <p className="text-black font-extrabold text-[29px] mt-2">Kunjungi Restoran Kami</p>
                            <p className="text-black mt-2 ">Kang Fakhrur Resto Menghadirkan kelezatan yang tiada tara, kami berkomitmen untuk menyuguhkan pengalaman makan yang memuaskan bagi setiap pelanggan.</p>
                            <p className="text-black mt-6 font-semibold">Alamat Restoran</p>
                            <p className="text-black mt-1 ">Kel. Sukabumi Utara Kec. Kebon Jeruk Kota Jakarta Barat</p>

                            <p className="text-black mt-4 font-semibold">Email</p>
                            <p className="text-black mt-1 ">fakhrurrizal10@gmail.com</p>

                            <p className="text-black mt-4 font-semibold">Whatsapp</p>
                            <Link href="https://wasap.at/IGy1B2">
                            <p className="text-black mt-1 ">087898706084</p>
                            </Link>
                        </div>
                    </div>
                    <div className="relative md:flex flex-col gap-7 items-center">
                        <Image alt="Background Image" src="/assets/images/makanan-1.png" height={100} width={350} className="rounded-sm border-4 border-primary mb-7 md:mr-44" />
                        <Image alt="Background Image" src="/assets/images/makanan-2.png" height={100} width={350} className="rounded-sm border-4 border-primary md:absolute md:ml-[150px] md:mt-[170px]" />
                    </div>
                </div>
                <div className="bg-[#000000] bg-opacity-85 pb-4">
                    <div className="bottom-0 left-0 w-full mx-auto bg-cover bg-center px-5 sm:px-6 lg:px-10 p-4 justify-center items-end">
                        <div className="flex flex-col items-center px-2 md:px-12 py-8 ">
                            <span className="text-md md:text-[20px] text-white font-[500] font-poppins mb-5">Kang Fakhrur <span className="text-primary">Resto</span></span>
                            <div className="flex gap-10">
                                <Link href="/">
                                    <span className="text-sm font-poppins text-white cursor-pointer hover:border-b border-white transition-all duration-300">Home</span>
                                </Link>
                                <Link href="/">
                                    <span className="text-sm font-poppins text-white cursor-pointer hover:border-b border-white transition-all duration-300">Menu</span>
                                </Link>
                                <Link href="/">
                                    <span className="text-sm font-poppins text-white cursor-pointer hover:border-b border-white transition-all duration-300">Order</span>
                                </Link>
                                <Link href="/">
                                    <span className="text-sm font-poppins text-white cursor-pointer hover:border-b border-white transition-all duration-300">Kontak</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-white w-full"></div>
                    <div className="flex flex-col items-center px-2 md:px-12 py-4 ">
                        <span className="text-sm text-white text-center cursor-pointer font-poppins border-white transition-all duration-300">© Copyright 2024 By Kang Fakhrur | Esa Unggul Jakarta Barat </span>
                        
                    </div>

                    <div className="border-2 border-white w-full"></div>

                </div>

            </footer>



        </div>
    )
};

export default BlankLayout;
