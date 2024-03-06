import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
	person: number;
	kids: number;
	date: string;
	time: string;
	specialMessage: string;
};

const CustomSelect: React.FC<{ id: string, label: string, register: any }> = ({ id, label, register }) => (
	<div className="mb-4 w-full">
		<label htmlFor={id} className="block text-sm font-bold mb-1">{label}</label>
		<select id={id} {...register(id)} className="w-full border rounded-md px-3 py-2">
			{Array.from({ length: 11 }, (_, index) => (
				<option key={index} value={index}>{index}</option>
			))}
		</select>

	</div>
);


const TableBooking = () => {

	const [submitting, setSubmitting] = useState<boolean>(false);
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		setSubmitting(true);
		console.log(data);
		setSubmitting(false);
	};

	return (
		<section className=" bottom-0 py-1  left-0 w-full text-black px-5 sm:px-6 lg:px-10  p-4 block md:flex justify-between items-center">
			<div className="items-center relative px-2 mt-9 md:mt-0 md:px-12 w-auto md:w-2/4 justify-center" data-aos="fade-down" data-aos-delay="300">
				<div className="bg-gray-100 rounded-md p-5 flex flex-col justify-center items-center w-full">
					<Image src='/assets/images/leaf.png' width={50} height={100} alt="leaf" data-aos="fade-down" data-aos-delay="100" />
					<div className="mt-3 text-center">
						<span className="font-lettering text-primary  text-2xl" data-aos="fade-down" data-aos-delay="150">Table Booking</span>
						<h1 className="font-black text-3xl">Pesan meja Anda sekarang</h1>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 mt-7">
						<CustomSelect id="person" label="Dewasa" register={register} />
						<CustomSelect id="kids" label="Anak anak" register={register} />
						<div className="mb-4 ">
							<label htmlFor="date" className="block text-sm font-bold mb-1">Tanggal</label>
							<input type="date" id="date" {...register("date")} className="w-full border rounded-md px-3 py-2" />
						</div>
						<div className="mb-4">
							<label htmlFor="time" className="block text-sm font-bold mb-1">Waktu</label>
							<input type="time" id="time" {...register("time")} className="w-full border rounded-md px-3 py-2" />
						</div>
						<div className="mb-4 col-span-2">
							<label htmlFor="specialMessage" className="block text-sm font-bold mb-1">Pesan Khusus</label>
							<textarea id="specialMessage" {...register("specialMessage")} className="w-full border rounded-md px-3 py-2" />
						</div>
						<button type="submit" disabled={submitting} className="bg-primary hover:bg-transparent text-white hover:text-primary border-2 border-primary font-bold py-2 px-4 rounded-sm col-span-2">
							{submitting ? 'Mengirim...' : 'Kirim'}
						</button>
					</form>
				</div>
			</div>

			<div className="items-center relative px-2 mt-9 md:mt-0 md:px-12 w-auto md:w-2/4 justify-center" data-aos="fade-down" data-aos-delay="300">
				<div className="bg-gray-100 rounded-md p-5 flex flex-col justify-center items-center w-full">
					<Image src='/assets/images/leaf.png' width={50} height={100} alt="leaf" data-aos="fade-down" data-aos-delay="100" />
					<div className="mt-3 text-center">
						<span className="font-lettering text-primary  text-2xl" data-aos="fade-down" data-aos-delay="150">Opening Time</span>
						<h1 className="font-black text-3xl">Waktu Buka</h1>
					</div>
					<div className="grid grid-cols-2 gap-4 mt-7">
						
						<div className="mb-4 bg-white p-9 text-center">
							<p className="font-bold text-[19px]">Pagi</p>
							<p className="font-bold text-[16px]">07:30 - 11:30 WIB</p>
						</div>
						<div className="mb-4 bg-white p-9 text-center">
							<p className="font-bold text-[19px]">Siang</p>
							<p className="font-bold text-[16px]">13:00 - 15:30 WIB</p>
						</div>
						<div className="mb-4 col-span-2  bg-white p-9 text-center">
						<p className="font-bold text-[19px]">Dinner</p>
							<p className="font-bold text-[16px]">13:00 - 15:30 WIB</p>
						</div>
						<button type="submit" disabled={submitting} className="bg-primary hover:bg-transparent text-white hover:text-primary border-2 border-primary font-bold py-2 px-4 rounded-sm col-span-2">
							{submitting ? 'Mengirim...' : 'Pesan Sekarang'}
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TableBooking