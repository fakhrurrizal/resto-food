import { getLayout } from "@/components/layout";
import Listmenu from "@/views/menu/list-menu";


const MenuPage = () => {
    return(
        <div className="my-24">
        <Listmenu />
        </div>
    )
}

MenuPage.getLayout = getLayout;
export default MenuPage;