import { getLayout } from "@/components/layout";
import CartComponent from "@/views/cart";
import Head from "next/head";


const CartPage = () => {



    return (
        <>
            <Head>
                <title>Keranjang - Resto Kang Fakhrur</title>
            </Head>
                <CartComponent />
        
        </>
    )
}

CartPage.getLayout = getLayout;
export default CartPage;