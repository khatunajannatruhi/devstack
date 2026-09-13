export default function Header() {
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-200 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost px-0 md:px-4 hover:bg-transparent">
          <img src="/logo-text.png" alt="Dev Stack" className="h-8 object-contain" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Technologies</a></li>
          <li><a>Projects</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a className="btn btn-ghost hidden sm:flex">Sign In</a>
        <a className="btn bg-brand-gradient border-none rounded-md px-6">Sign Up</a>
      </div>
    </nav>
  );
}
