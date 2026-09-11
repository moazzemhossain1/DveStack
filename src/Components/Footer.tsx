import Logo from "../assets/logo-text.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" sm:text-center bg-[#0F172A] text-white mt-20">
      <div className="container mx-auto px-6 py-14">

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

       
          <div>
            <div className=" sm:flex flex-col items-center flex items-center gap-3">
              <img
                src={Logo}
                alt="Dev Stack"
                className=" w-12 h-12"
              />
              <h2 className="text-2xl font-bold">
                Dev Stack
              </h2>
            </div>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Explore frontend, backend, database,
              and tooling technologies to build
              your ideal development stack.
            </p>

            <div className="sm:flex flex-col items-center flex gap-4 mt-5">
              <a
                href="#"
                className="text-xl hover:text-pink-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-xl hover:text-pink-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="text-xl hover:text-pink-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

       
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Stack Builder
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

      
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;