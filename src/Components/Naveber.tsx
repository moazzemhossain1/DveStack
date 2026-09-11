import Logo from "../assets/logo-text.png";

const Naveber = () => {
    return (
        <div className="bg-base-100 shadow-sm px-4 sticky top-0 z-50 ">
            <div className="navbar  container mx-auto">

            

            <div className="navbar-start">

                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        <li><a className="text-[#DB2777]">Home</a></li>
                        <li><a>Technologies</a></li>
                        <li><a>Projects</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                {/* Logo */}
                <img src={Logo} alt="Logo" className="ml-2" />
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-[#DB2777]">Home</a></li>
                    <li><a>Technologies</a></li>
                    <li><a>Projects</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            
            <div className="navbar-end gap-3 items-center text-center">
                <button className="btn">Sign In</button>

                <button className="btn bg-[#D91B7E] rounded-full text-[#D9D9D9]">
                    Sign Up
                </button>
            </div>

        </div>
        </div>
    );
};

export default Naveber;