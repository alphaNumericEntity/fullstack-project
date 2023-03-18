import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="p-4 flex flex-col">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}