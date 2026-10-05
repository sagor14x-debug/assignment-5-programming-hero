import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="container mx-auto mt-6 px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="w-36"
      />

      {/* Navigation */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        <li className="text-pink-600 cursor-pointer">
          Home
        </li>

        <li className="cursor-pointer hover:text-pink-600 transition">
          Technologies
        </li>

        <li className="cursor-pointer hover:text-pink-600 transition">
          Projects
        </li>

        <li className="cursor-pointer hover:text-pink-600 transition">
          About
        </li>

        <li className="cursor-pointer hover:text-pink-600 transition">
          Contact
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 font-medium text-gray-700 rounded-xl hover:bg-gray-100 cursor-pointer transition">
          Sign In
        </button>

        <button className="px-5 py-2 rounded-xl text-white bg-pink-600 hover:bg-pink-700 cursor-pointer transition">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Nav;