import { Link } from "react-router-dom";

const Header = () => {
  const navItems =
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/menu'>Our Menu</Link></li>
      <li><Link to='/orders'>Our Shop</Link></li>
    </>
  return (
    <div className="bg-black fixed z-20 bg-opacity-40 w-full ">
      <div className="navbar  text-white  max-w-screen-xl mx-auto">
        <div className="navbar-start mx-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn pl-2 btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
           {navItems}
            </ul>
          </div>
       <Link to='/'><p className=" normal-case text-xl">BISTRO BOSS</p></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
           {navItems}
        </ul>
        <button>SignIN</button>
        <img className="w-8 mx-4" src="/src/assets/icon/correct.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;