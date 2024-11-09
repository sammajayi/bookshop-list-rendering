import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-around items-center container mx-auto  bg-red-300 h-[10vh]">
      <div className="logo pr-16">
        <img src="./src/assets/logo.png" alt="logo" />
      </div>

      <nav className="">
        <ul className="flex">
          <li className="px-3">
            <Link to="/Books">BOOKS</Link>
          
          </li>
          <li className="px-3">
            <Link to="/Audiobooks">
            AUDIOBOOKS
            </Link>
          </li>
          <li className="px-3">
            <Link to="/Stationery">
            STATIONERY & GIFTS
            </Link>
          </li>
          <li className="px-3 ">

            <Link to="/Blog">BLOG</Link>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5">

        <Link to="/Login">
        <img
          className="px-5 cursor-pointer"
          src="./src/assets/user.png"
          alt="user-profile"
        />
         </Link>

        <img
          className="px-5 cursor-pointer"
          src="./src/assets/search.png"
          alt="search-bar"
        />
        <Link to="/Cart">
        <img
          className="px-5 cursor-pointer"
          src="./src/assets/cart.png"
          alt="cart"
        />
        </Link>
      </div>
    </header>
  );
};

export default Header;
