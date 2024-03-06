import { getLayout } from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function App({ Component, pageProps }: AppProps) {

	const components = getLayout(<Component {...pageProps} />);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	  }, []);

	  useEffect(() => {
		const parallax = () => {
			const bg = document.querySelector<HTMLElement>('.parallax-bg');
			if (bg) {
				const scrollSpeed = 2;

				window.addEventListener('scroll', function () {
					const yPos = -(window.pageYOffset / scrollSpeed);
					const coords = '50% ' + yPos + 'px';
					bg.style.backgroundPosition = coords;
				});
			}
		};

		parallax();

		return () => window.removeEventListener('scroll', parallax);
	}, []);

	return (
		<>
			<Head>
				<title>Resto Food - Kang Fakhrur</title>
				<meta
					name="description"
					content="Resto Food Kang Fakhrur"
				/>
				<meta name="keywords" content="Resto Food Kang Fakhrur" />
				<link rel="icon" href="/assets/icon/favicon.png" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<ToastContainer
				hideProgressBar
				position="top-center"
				autoClose={1500}
				pauseOnHover
				closeButton={false}

			/>
			<NextNProgress color="progress-bar-primary" height={3} />
			{components}
		</>
	);
}
