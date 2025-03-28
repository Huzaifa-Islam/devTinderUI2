import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const NavBar = () => {
  const user = useSelector((store)=> store.user)
  console.log("user is ",user)  

  return (
    <div>
        <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">🧑‍💻 DevTinder</Link>
        </div>
        {user && <div className="flex-none gap-2">
          <div>Hi, {user.firstName}</div>
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoUrl ? user.photoUrl :"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" } 
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link t0="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default NavBar