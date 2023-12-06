import { useContext } from "react";
import { myContext } from "./App";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { signUpUser } = useContext(myContext)
    const navigate = useNavigate()
    function GetUserAndCreate(e) {
        e.preventDefault();
        let name = e.target.name.value;
        let image = e.target.image.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        console.log(name, email, password)
        signUpUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image
                }).then(res => {
                    console.log(res.user)
                    navigate('/login');
                }).catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
    return (
        <div className=" flex flex-col items-center" >
            <form className="flex flex-col items-center w-96 bg-gray-400 rounded-xl mb-4" onSubmit={GetUserAndCreate}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-semibold text-slate-700">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-semibold text-slate-700">Profile Picture Url</span>
                    </label>
                    <input name="image" type="url" placeholder="picture url" className="input input-bordered w-full max-w-xs" />
                </div>
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
                <div className="flex justify-center mb-4">
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
            <p className="font-rubik-font">If you already have a account <Link to="/login" className="kbd kbd-md ">Login</Link> here</p>
        </div>
    );
};

export default Register;