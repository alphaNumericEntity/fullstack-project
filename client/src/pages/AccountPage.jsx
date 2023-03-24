import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function AccountPage() {

    const {user, ready} = useContext(UserContext);

    if (!ready) {
        return 'Loading...'
    }
    if (ready && !user) {
        return (<Navigate to='/login'></Navigate>);
    }

    const {subpage} = useParams();
    console.log(subpage);

    return (
        <div> 
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className="py-2 px-6 bg-primary text-white rounded-full" to={'/account'}>My profile</Link>
                <Link className="py-2 px-6" to={'/account/bookings'}>My bookings</Link>
                <Link className="py-2 px-6" to={'/account/accommodations'}> My accommodations</Link>

            </nav>
        </div>
    );
}