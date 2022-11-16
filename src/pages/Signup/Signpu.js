import React, { useContext,useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/Authprovider";

const Signpu = () => {
const [signupError, setsignupError] = useState("")
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const {signup,updateUser} = useContext(AuthContext)

  const handlesignup = (data) => {
    console.log(data);
    signup(data.email, data.password)
    .then(result => {
      setsignupError(' ')
        const user = result.user
        toast.success('success')
        console.log(user);
        const userInfo = {
          displayName : data.name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(()=> {})
    })
    .catch(err =>{
      setsignupError(err.message)
    })

  };

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handlesignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>{" "}
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: "Name is required",
              
              })}
              placeholder="Your Name"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "email is required" })}
              placeholder="Your Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">password</span>{" "}
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: "password is required",
              minLength: { value: 6, message: "password at last 6 crt" },
              maxLength : {value :10, message : "Password is too Long"},
              pattern :  {value : /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/, message : 'Password must be strong'}
            })}
              placeholder="Your password"
            />
            <label className="label"></label>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>

        {
          signupError && <p className="text-red-600">{signupError}</p>
        }
        <p>
          Already Have an Account ?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Signpu;
