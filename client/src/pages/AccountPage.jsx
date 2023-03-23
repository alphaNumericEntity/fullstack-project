import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function AccountPage() {

    const {user, ready} = useContext(UserContext);

    if (!ready) {
        return 'Loading...'
    }
    if (ready && !user) {
        return (<Navigate to='/login'></Navigate>);
    }

    return (
        <div> this is account page for {user.name} </div>
    );
}