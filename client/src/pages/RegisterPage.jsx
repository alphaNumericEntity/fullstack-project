import { Link } from "react-router-dom";

export default function RegisterPage() {
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">

                        <h1 className="text-4xl text-center mb-4">Register</h1>
                        <form className="max-w-md mx-auto border">
                            <input type="name" placeholder="John Doe" />
                            <input type="email" placeholder="yur@email.com" />
                            <input type="password" placeholder="password"/>
                            <button className="primary">Register</button>
                            <div className="text-center text-gray-500 py-2">Already a member?
                                <Link to={'/login'} className='underline'> Login</Link>
                            </div>
                        </form>

            </div>
        </div>
        
    )
}