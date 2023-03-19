import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(ev) {
        ev.preventDefault();
        try {
                await axios.post("/register",{
                name,
                email,
                password
            });
            alert('User registerd successfully');
        } catch (e) {
            alert('Registration failed.' + e.message);
        }    
    }

    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                   

                        <h1 className="text-4xl text-center mb-4">Register</h1>
                        <form className="max-w-md mx-auto border"
                                onSubmit={registerUser}>
                            <input type="text" placeholder="John Doe"
                                value={name}
                                onChange={ev => setName(ev.target.value)}/>
                            <input type="email" placeholder="yur@email.com" 
                                value={email}
                                onChange={ev => setEmail(ev.target.value)}/>
                            <input type="password" placeholder="password" 
                                value={password}
                                onChange={ev => setPassword(ev.target.value)}/>
                            <button className="primary">Register</button>
                            <div className="text-center text-gray-500 py-2">Already a member?
                                <Link to={'/login'} className='underline'> Login</Link>
                            </div>
                        </form>

            </div>
        </div>
        
    )
}