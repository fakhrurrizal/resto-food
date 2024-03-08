import Image from "next/image"
import { useState } from "react";


const BlogComponent = () => {


    return (
        <div className="relative overflow-hidden p-4 mt-10">
            <div className="justify-center flex flex-col items-center">
                <Image src='/assets/images/leaf.png' width={50} height={100} alt="leaf" data-aos="fade-down" data-aos-delay="100" />
            </div>
            <p className="font-lettering text-primary text-3xl text-center mt-2" data-aos="fade-down" data-aos-delay="200">Blog</p>
            <p className="capitalize text-[23px] md:text-[29px]  mb-3 text-center font-bold" data-aos="fade-down" data-aos-delay="200">Tahu Lebih Banyak Tentang Artikel</p>
            <div className="flex justify-center gap-5 items-center mb-10 flex-col md:flex-row" data-aos="fade-down" data-aos-delay="200">
                <div className="bg-gray-100 p-5 rounded-lg mb-5 md:mb-0">
                    <Image src="/assets/images/blog-1.png" alt="123" width={300} height={100} className="rounded-md" />
                    <div className="text-center mt-5 w-72">
                        <span className="text-primary font-normal text-[14px]">01 Maret 2024</span>
                        <h2 className="text-[16px] font-[700] text-black">Resep dan Tips Memasak yang Menggoda</h2>
                        <p className="text-[13px] font-normal mt-4 text-center">Pelajari dunia makanan laut dengan resep-resep seafood yang lezat dan tips memasak yang akan membuat Anda terkesima.</p>
                        <button className="bg-primary text-white text-[13px] py-2 px-4 rounded-sm mt-5 hover:bg-transparent hover:text-primary border border-primary">Baca Selengkapnya</button>
                    </div>
                </div>
                <div className="bg-gray-100 p-5 rounded-lg mb-5 md:mb-0">
                    <Image src="/assets/images/blog-2.png" alt="123" width={300} height={100} className="rounded-md" />
                    <div className="text-center mt-5 w-72">
                        <span className="text-primary font-normal text-[14px]">03 Maret 2024</span>
                        <h2 className="text-[16px] font-[700] text-black">Tips Memanggang dan Resep Makanan Outdoor</h2>
                        <p className="text-[13px] font-normal mt-4 text-center">Bersiaplah untuk mengadakan pesta barbekyu terbaik musim ini dengan tips memanggang yang ahli dan resep makanan luar ruangan yang nikmat.</p>
                        <button className="bg-primary text-white text-[13px] py-2 px-4 rounded-sm mt-5 hover:bg-transparent hover:text-primary border border-primary">Baca Selengkapnya</button>
                    </div>
                </div>
                <div className="bg-gray-100 p-5 rounded-lg">
                    <Image src="/assets/images/blog-3.png" alt="123" width={300} height={100} className="rounded-md" />
                    <div className="text-center mt-5 w-72">
                        <span className="text-primary font-normal text-[14px]">07 Maret 2024</span>
                        <h2 className="text-[16px] font-[700] text-black"> Panduan Membeli dan Menyimpan Bahan Makanan yang Baik</h2>
                        <p className="text-[13px] font-normal mt-4 text-center">Pelajari cara memilih bahan makanan berkualitas tinggi dan menyimpannya dengan benar agar tetap segar dan bergizi dan banyak peminatnya.</p>
                        <button className="bg-primary text-white text-[13px] py-2 px-4 rounded-sm mt-5 hover:bg-transparent hover:text-primary border border-primary">Baca Selengkapnya</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BlogComponent