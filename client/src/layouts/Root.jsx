import { Outlet } from "react-router";
import Home from "./homepage/Home";

const Root = () => {
    return (
        <div>
            this is root component for root layouts testingg
            <Home />
            <Outlet />
        </div>
    );
};

export default Root;