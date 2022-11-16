import React, { useContext ,useState} from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/Authprovider";

const Login = () => {
  const [loginerror, setloginerror] = useState('')
  const location = useLocation()
  const naviget = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {login} = useContext(AuthContext)
  const handelLogin = (data) => {
    console.log(data);
    setloginerror(' ')
    login(data.email,data.password)
    .then(result => {
      const user = result.user
      console.log(user);
      naviget(from, {replace : true})
  })
  .catch(err => {
    setloginerror(err.message)
  })

  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email Address is required" })}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">password</span>{" "}
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: "password is required" , minLength : {value : 6, message : 'password at last 6 chareturs'}})}
              placeholder="Your password"
            />
            <label className="label">
              <span className="label-text">forget Password</span>{" "}
            </label>
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          {loginerror && <p>{loginerror}</p>}
        </form>
        <p>
          New To Doctor Portal ?{" "}
          <Link to="/singup" className="text-primary">
            Sign Up
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
