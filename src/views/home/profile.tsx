import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Profile = () => {

	return (
		<section className="relative py-20 left-0 w-full text-black px-5 sm:px-6 lg:px-10 p-4 block md:flex justify-center items-center" style={{ backgroundImage: "url('/assets/images/bg-profile.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
			<div className="mt-10 text-center mb-8">
				<span className="capitalize text-1xl font-bold block mb-2">
				Kesuksesan tidak datang secara kebetulan, Kesuksesan datang  <br /> dari kerja keras, kegigihan, dan keinginan untuk belajar.
				</span>
				<hr className="border-b-2 border-gray-600 mx-auto w-16" />
				<div className="justify-center flex mt-3 mb-3">
					<Image alt="profile" src='/assets/images/profile.png' height={90} width={90} className="border-4  border-primary rounded-full"/>
				</div>
				<div><span className="font-bold text-[18px] ">Muhammad Fakhrur Rizal (Owner)</span></div>
				<span className="text-[15px] text-primary">Mahasiswa Universitas Esa Unggul Jakarta Barat</span>
			</div>

		</section>

	)
}

export default Profile