import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  console.log("Body called")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=> store.user)
  const fetchUser = async () => {
    if(userData) return; //early return when user already exists.. no need to make an api call in that case
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      console.log("data fetched after refresh", res.data);
      dispatch(addUser(res.data));
    } catch (err) {
      if(err.status === 401){
        navigate("/login")
      }
      console.error("unable to fetch data", err.message);
    }
  };

  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
