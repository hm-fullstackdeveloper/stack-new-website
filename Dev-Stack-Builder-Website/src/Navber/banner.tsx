import BanerImage from "../assets/banner-stack.png"


const Banner = () => {
    return (
    <section className="flex min-h-screen items-center bg-white py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">
        <div className="text-center text-black lg:text-left">
          <h1 className="text-5xl font-bold">
            Build Your{" "}<br></br>
            <span className="brand-gradient bg-clip-text text-transparent">
              Developer Stack
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg">
            Explore frontend, backend, database, and tooling options,<br />
             compare them side by side, and put together the stack that fits your <br /> next project.
          </p>

          <button className="brand-gradient hover:brand-gradient-hover mt-8 rounded-xl
                  px-6 py-3 font-semibold 
                 text-white cursor-pointer">
                    Explore Technologies
          </button>
          <button className="rounded-xl border-2 text-black
           bg-white px-6 py-3 font-semibold border-gray-100 hover-3d
           hover:bg-gray-50 cursor-pointer">Larn More</button>
        </div>

      
        <div>
          <img
            src={BanerImage}
            alt="Developer Stack"
            className="w-100"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;