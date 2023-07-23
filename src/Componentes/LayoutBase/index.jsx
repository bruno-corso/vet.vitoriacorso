import Banner from "Componentes/Banner";
import { Outlet } from "react-router-dom";

const LayoutBase = () => {
    return (
        <div>
            <Banner />

            <Outlet />
        </div>
    );
}

export default LayoutBase;