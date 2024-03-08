import { useCart } from "@/UseContext/cartContext"
import { formatToRupiah } from "@/utils/helpers/format-number.helper"
import { TrashIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"


const CartComponent = () => {

    const { cart, removeFromCart } = useCart();

    const route = useRouter()

    return (
        <section className=" bottom-0 bg-white py-14 min-h-screen left-0 w-full text-black px-5 sm:px-6 lg:px-10 block md:flex justify-between ">
            <div className="relative px-2  mt-9 md:mt-28 md:px-12 w-auto md:w-2/5"  >
                <span className="text-2xl font-bold">Pesanan Anda</span>
                <div className="mt-10">
                    {cart?.map((item, index) => {


                        return (
                            <div key={index} className="flex justify-between mb-4">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div>
                                        <Image src={item?.image} alt={item?.name} height={100} width={100} className="rounded-md" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[15px]">{item?.name}</h3>
                                        <p className="text-[13px] font-bold">Qty  : {item?.qty}</p>

                                        <p className="text-[13px] font-bold">{formatToRupiah(item?.price)}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)}><TrashIcon className="w-5 h-5 text-red-600" /></button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="relative items-center  block rounded-2xl px-2  md:px-12 py-10 md:py-32 w-auto md:w-3/6">
            <span className="text-2xl font-bold">Data Pelanggan</span>
                <div  className=" mt-4  " >
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="username">
                            Nama Lengkap
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Masukan Nama Lengkap"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Masukan Email Anda"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="username">
                            Telepon
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="number"
                            placeholder="Masukan Telepon Anda"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="username">
                            Alamat Lengkap
                        </label>
                        <textarea
                            className="shadow w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline"
                            id="message"
                            cols={4}
                            placeholder="Masukkan Alamat Anda"
                            style={{ resize: 'none', }}
                        />

                    </div>
                    <div className="flex items-center justify-between">
                        <button
                        onClick={()=> {toast.success("Pesanan anda berhasil dibuat"); route.push('/'); localStorage.removeItem("cart")}}
                            className="bg-primary hover:bg-transparent text-sm w-full text-white hover:text-primary border border-primary font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Pesan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartComponent