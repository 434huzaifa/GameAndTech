import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { myContext } from "./App";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { SignIn,googlemama } = useContext(myContext)
    const navigate=useNavigate()
    function GetFromForm(e) {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        SignIn(email,password).then(res=>console.log(res.user)).catch(error=>console.log(error))
    }
    function itsgoogletime() {
        googlemama()
        .then(res=>{
            console.log(res.user)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className=" flex flex-col items-center" >
        <form className="flex flex-col items-center w-96 bg-gray-400 rounded-xl mb-4" onSubmit={GetFromForm}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-xl font-semibold text-slate-700">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs mb-2">
                <label className="label">
                    <span className="label-text text-xl font-semibold text-slate-700">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="flex justify-center mb-4 gap-4">
                <button className="btn btn-primary" type="submit">Login</button>
                <button className="btn btn-primary" onClick={itsgoogletime}><FcGoogle className="text-3xl"></FcGoogle></button>
            </div>
        </form>
        <p className="font-rubik-font">If you do not have a account <Link to="/register" className="kbd kbd-md ">Sign Up</Link> here</p>
    </div>
    );
};

export default Login;