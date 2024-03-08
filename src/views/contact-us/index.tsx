import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

const schema = z.object({
    name: z.string().min(1, { message: " Nama harus diisi" }),
    phone: z.string().min(6, { message: " Telepon harus diisi dan valid" }),
    message: z.string().min(1, { message: " Pesan harus diisi" }),
    email: z.string().min(1, { message: " Email harus diisi" }).email(),
})


export type ContactForm = z.infer<typeof schema>

const ContactUsPage = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
        defaultValues: {
            name: "",
            phone: "62",
            message: "",
            email: "",
        },
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: ContactForm) => {
        const email = 'fakhrurrizal@gmail.com';
        const subject = encodeURIComponent('Konsultasi');
        const body = encodeURIComponent(`Nama : ${data?.name}\nNo. Telp : ${data?.name}\nEmail : ${data?.email}\n\n${data?.message}`);
        const url = ` https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
        window.open(url, '_blank');
        reset()
    };

    return (
        <section className=" bottom-0 bg-white py-6 min-h-screen left-0 w-full text-black px-5 sm:px-6 lg:px-10 block md:flex justify-between items-center">
            <div className="items-center relative px-2  mt-24 md:mt-8 md:px-12 w-auto md:w-2/5" data-aos="fade-down" data-aos-delay="300" >
                <Image src='/assets/images/contact-us.png' width={700} height={400} alt="blob" />
            </div>
            <div className="relative items-center  block rounded-2xl px-2  md:px-12 py-10 md:py-32 w-auto md:w-3/6">
                <div className="justify-center">
                    <Image src='/assets/images/leaf.png' width={50} height={100} alt="leaf" data-aos="fade-down" data-aos-delay="100" />
                    <div>
                        <p className="font-lettering text-primary text-3xl" data-aos="fade-down" data-aos-delay="150">Contact Us</p>

                    </div>

                    <div className="mt-2" data-aos="fade-down" data-aos-delay="250">
                        <p>Sampaikan pertanyaan dan umpan balik Anda kepada kami melalui formulir kontak di bawah ini atau hubungi tim kami langsung.</p>
                    </div>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=" mt-4  " data-aos="fade-down" data-aos-delay="150">
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="username">
                            Nama Lengkap
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Masukan Nama Lengkap"
                            {...register("name", { required: 'Nama Harus Diisi' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs ">{errors.name.message}</p>}
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
                            {...register("email", { required: 'Email Harus Diisi' })}
                        />
                        {errors.email && <p className="text-red-500 text-xs ">{errors.email.message}</p>}
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
                            {...register("phone", { required: 'Email Harus Diisi' })}
                        />
                        {errors.phone && <p className="text-red-500 text-xs ">{errors.phone.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left" htmlFor="username">
                            Pesan
                        </label>
                        <textarea
                            className="shadow w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline"
                            id="message"
                            cols={4}
                            placeholder="Masukkan Pesan Anda"
                            {...register("message", { required: 'Pesan Harus Diisi' })}
                            style={{ resize: 'none',  }}
                        />

                        {errors.message && <p className="text-red-500 text-xs ">{errors.message.message}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-primary hover:bg-transparent text-sm w-full text-white hover:text-primary border border-primary font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUsPage