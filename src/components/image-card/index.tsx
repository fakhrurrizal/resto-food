import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface ImageProps {
	src: string;
	alt: string;
}

const ImageWithCard = ({ src, alt }: ImageProps) => {

	const [isHovered, setIsHovered] = useState(false);

	const route = useRouter()

	return (
		<div
			className="relative rounded-2xl border-2 border-primary mb-2 overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Image alt={alt} src={src} height={30} width={116} className="rounded-2xl border-2 border-primary  " style={{ height: "100%" }} />
			<div
				className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-40 flex justify-center items-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
					}`}
			>
				<button onClick={()=> route.push("/menu")} className="bg-primary text-white px-4 py-2 rounded-md text-xs">Order</button>
			</div>
		</div>
	);
};

export default ImageWithCard