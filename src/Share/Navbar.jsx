import { Link } from "react-router-dom";

const Navbar = () => {

    const Options = (
        <>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </>
      );

    return( 
<div className="bg-base-100">
  <div className="navbar container max-w-7xl mx-auto">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {Options}
        </ul>
      </div>
      <a className="w-10">
          <img src="https://i.ibb.co/R6ksq6B/download.png" alt="coffee"></img>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {Options}
      </ul>
    </div>
    <div className="navbar-end">
      <Link to={'/login'}><p className="">Login</p></Link>
    </div>
  </div>
</div>
    )
}

export default Navbar;
