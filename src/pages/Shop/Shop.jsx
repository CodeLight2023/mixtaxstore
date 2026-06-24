import { Helmet } from "react-helmet-async"
import Shop from "../../components/Shop/Shop"
function ShopPage() {
    return (
        <>
            <Helmet>
                <title>Shop | Mixtax Store</title>
            </Helmet>
            <Shop />
        </>
    )
}
export default ShopPage