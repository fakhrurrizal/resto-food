import { getLayout } from "@/components/layout";
import ContactUsPage from "@/views/contact-us";
import Head from "next/head";


const MenuPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us - Resto Kang Fakhrur</title>
            </Head>
                <ContactUsPage />
        
        </>
    )
}

MenuPage.getLayout = getLayout;
export default MenuPage;