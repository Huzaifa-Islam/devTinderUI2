import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("Virat@kohli.com");
  const [password, setPassword] = useState("ViratKohli@123#");

  const handleLogin = async() =>  {
    try{
      const res = await axios.post("http://localhost:3000/login",{
        emailId, password
      },{withCredentials: true}) 
      console.log("response is "+ res)
    }
    catch(err){
      console.error(err.message)
    }
    
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <div >
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e)=> setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
