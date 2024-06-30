import { IoMdSearch } from "react-icons/io";
import logo from "../../assets/logo.png";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./darkMode";
const Navbar = () => {
  const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "/#services" },
    { id: 3, name: "Kids Wear", link: "/#" },
    { id: 4, name: "Mens Wear", link: "/#" },
    { id: 5, name: "Electronics", link: "/#" },
  ];
  const DropDownLinks = [
    { id: 1, name: "Trending 1", link: "/#" },
    { id: 2, name: "Trending 2", link: "/#" },
    { id: 3, name: "Trending 3", link: "/#" },
  ];

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      {/* -------------- A ------------- */}

      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* -------------- A - 1 ------------- */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* -------------- A - 2 ------------- */}

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1
                 focus:!outline-none focus:!border-1 focus:!border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button
              onClick={() => {}}
              className="bg-gradient-to-r from-primary
           to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      {/* -------------- B ------------- */}

      <div className="flex justify-center py-4">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((item, index) => (
            <li key={item.id}>
              <a
                className="inline-block px-4 hover:text-primary duration-200"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* -------- dropDowns and links ------- */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-primary duration-200"
            >
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] shadow-md hidden group-hover:block w-[150px] rounded-md bg-slate-100 p-2 text-black">
              {DropDownLinks.map((list) => (
                <li key={list.id}>
                  <a
                    href={list.id}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/30"
                  >
                    {list.name}
                  </a>
                </li>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;