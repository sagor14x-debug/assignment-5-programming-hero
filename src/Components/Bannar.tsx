import Logo from "../assets/banner-stack.png";

const Bannar = () => {
  return (
    <div className="container mx-auto flex items-center gap-8 my-10">

  {/* Left Side */}
  <div className="flex-1">
    <h2 className="text-7xl font-bold mb-6">
      Build Your Ideal <br />
      Development Stack
    </h2>

    <p className="text-lg leading-7">
      Explore frontend, backend, database, and tooling options, <br />
      compare them side by side, and put together the stack that
      fits your <br /> next project.
    </p>

    {/* Buttons */}
    <div className="flex gap-6 mt-10">
      <button className="h-21 w-89 cursor-pointer rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-3xl font-semibold text-white">
        Explore Technologies
      </button>

      <button className="h-21 w-90 cursor-pointer rounded-2xl border-2 border-gray-200 bg-white text-3xl font-normal text-gray-700">
        Learn More
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="flex-1">
    <img
      src={Logo}
      alt="Development Stack"
      className="w-full"
    />
  </div>

</div>
  );
};

export default Bannar;
