import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(ev) {
        ev.preventDefault();
        await axios.post('/login', {
            email,
            password,
        });
    } 
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">

                        <h1 className="text-4xl text-center mb-4">Login</h1>
                        <form className="max-w-md mx-auto border" onSubmit={loginUser}>
                            <input type="email" placeholder="yur@email.com" value={email} onChange={ev => setEmail(ev.target.value)}/>
                            <input type="password" placeholder="password"  value={password} onChange={ev => setPassword(ev.target.value)}/>
                            <button className="primary">Login</button>
                            <div className="text-center text-gray-500 py-2">Do not have an account yet?
                                <Link to={'/register'} className='underline'> Register now.</Link>
                            </div>
                        </form>

            </div>
        </div>
        
    )
}