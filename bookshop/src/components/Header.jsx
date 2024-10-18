

const Header = () => {
  return (
    <header className="flex justify-around items-center container mx-auto  bg-red-300 h-[10vh]">
      <div className="logo pr-16">
        <img src="./assets/logo.png" alt="logo" />
      </div>

      <nav className="flex">
        <ul className="flex">
        <li className="px-3">
          <a href="#books">BOOKS</a>
        </li>
        <li className="px-3">
          <a href="#audiobooks">AUDIOBOOKS</a>
        </li>
        <li className="px-3">
          <a href="#gifts">STATIONERY & GIFTS</a>
        </li>
        <li className="px-3 ">
          <a href="#blog">BLOG</a>
        </li>
        </ul>
      </nav>

      <div className="flex ml-5">
        <img className="px-5" src="./assets/user.png" alt="user-profile" />
        <img className="px-5" src="./assets/search.png" alt="search-bar" />
        <img className="px-5" src="./assets/cart.png" alt="cart" />
      </div>
    </header>
  );
};

export default Header;
