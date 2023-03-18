export default function LoginPage() {
    return(
        <div className="mt-4">
            <h1 className="text-4xl text-center">Login</h1>
            <form className="max-w-md mx-auto border">
                <input type="email" placeholder="yur@email.com" />
                <input type="password" placeholder="password"/>
                <button className="primary">Login</button>
            </form>

        </div>
    )
}