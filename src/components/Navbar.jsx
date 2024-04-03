import { close, logo, menu } from "../assets";
import { navigationLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="./">
        <img src={logo} alt="sc-zone-shop" className="w-[124px] h-[32px]" />
      </a>
      <ul className="md:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-cairo font-normal cursor-pointer text-[17px] text-white hover:text-purple-400 
          ${index === navigationLinks.length - 1 ? "ml-0 " : "ml-10"}
          `}
          >
            <a
              href={`#${nav.id}`}
              className="relative block after:content-[''] after:block after:absolute after:h-[2px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[36px] h-[36px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
        p-16 bg-purpple-gradient-2 opacity-95 absolute top-20 right-0 left-0 mx-4 my-2 rounded-xl sidebar z-10`}
        >
          <ul className="flex items-center flex-col flex-1">
            {navigationLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-cairo font-normal cursor-pointer text-[18px] text-white 
          ${index === navigationLinks.length - 1 ? "mb-0 " : "mb-6"}
          `}
              >
                <a href={`#${nav.id}`}>{nav.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
