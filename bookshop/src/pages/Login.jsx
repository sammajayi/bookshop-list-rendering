const Login = () => {
  return (
    <>
    <form className="bg-blue-500 rounded-lg max-w-[500px] mx-auto mt-[20%]">
        <h1 className="">Login</h1>
        <div className="p-5">
        <label htmlFor="email" className="mr-5"> Email</label>
        <input type="email" id="email" name="email" className="w-80 h-10 rounded-md "  />
        </div>

        <div>
            <label htmlFor="password" className="mr-5">Password</label>
            <input type="password" id="password" name="password" className="w-[19.5rem] h-10 rounded-md" />
        </div>

        <button type="submit" className="bg-red-500 w-40 mt-5 rounded-md h-10">Login</button>

    </form>
    <p className="!font-medium">Dont have an account? <a href="" className="hover:to-red-600 to-blue-600">Sign Up</a></p>

    </>
  )
}

export default Login