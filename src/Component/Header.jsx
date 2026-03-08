
// import headerlogo from "../assets/urbun_fold_logo_.png";

// const Header = () => {
//   return (
//     <>
//       <nav className="navbar w-full bg-[#aeaeb0]" id="nav">
//         <div className=" flex gap-8 justify-between items-center px-5 py-3.75 max-w-360 mx-auto">
//           <div className="nav-logo">
//             <img
//               className="w-40 h-15 object-contain"
//               src={headerlogo}
//               alt="logo"
//             />
//           </div>
//           <div className="menu hidden md:block">
//             <ul className="flex gap-8 text-l font-semibold ">
//               <li>
//                 <a href="#polo-collection">Polo</a>
//               </li>
//               <li>
//                 <a href="#puma">Puma</a>
//               </li>
//               <li>
//                 <a href="#adidas">Adidas</a>
//               </li>
//               <li>
//                 <a href="#lacoste">Lacoste</a>
//               </li>
//               <li>
//                 <a href="#ck">CK</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

import { useState } from "react";
import headerlogo from "../assets/urbun_fold_logo_.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Polo", href: "#polo-collection" },
    { label: "Puma", href: "#puma" },
    { label: "Adidas", href: "#adidas" },
    { label: "Lacoste", href: "#lacoste" },
    { label: "CK", href: "#ck" },
  ];

  return (
    <>
      <nav className="navbar w-full bg-[#aeaeb0]" id="nav">
        <div className="flex gap-8 justify-between items-center px-5 py-3.5 max-w-360 mx-auto">
          {/* Logo */}
          <div className="nav-logo">
            <img
              className="w-40 h-15 object-contain"
              src={headerlogo}
              alt="logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="menu hidden md:block">
            <ul className="flex gap-8 text-l font-semibold">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center cursor-pointer items-center w-8 h-8 gap-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-5 pb-4 gap-4 font-semibold text-base">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 border-b border-black/10 hover:pl-2 transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;