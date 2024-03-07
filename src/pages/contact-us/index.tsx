import { getLayout } from "@/components/layout";
import Listmenu from "@/views/home/list-menu";


const MenuPage = () => {
    return(
        <div className="my-24">
        <Listmenu />
        </div>
    )
}

MenuPage.getLayout = getLayout;
export default MenuPage;