import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handelLogin = (data) =>{
    console.log(data);
  }
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span> </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
              placeholder="Your Email"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">password</span> </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
              placeholder="Your password"
            />
            <label className="label"><span className="label-text">forget Password</span> </label>
          </div>
          <input className="btn btn-accent w-full" value= "Login" type="submit" />
        </form>
            <p>New To Doctor Portal ? <Link to = '/singup' className="text-primary">Sign Up</Link> </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
