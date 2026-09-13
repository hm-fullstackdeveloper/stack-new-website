import Footer from "./Footer/footers";
import { useEffect, useState } from "react";
import Nav from "./Navber/nav";
import Banner from "./Navber/banner";
import type { Technology } from "./types/technology";
import TechnologyCard from "./components/technologyCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("/data/technologies.json")
    .then((res) => res.json())
    .then((data) => setTechnologies(data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);

  // Add technology
  // const handleAddToStack = (technology: Technology) => {
  //   setStack((previousStack) => {
  //     const alreadyExists = previousStack.some(
  //       (item) => item.id === technology.id
  //     );
  //     if (alreadyExists) {
  //       return previousStack;
  //     }

  //     return [...previousStack, technology];
  //   });
  // };
const handleAddToStack = (technology: Technology) => {
  const alreadyExists = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyExists) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack((previousStack) => [...previousStack, technology]);

  toast.success("Added to your stack!");
};

  // Remove technology
  // const handleRemoveFromStack = (id: number) => {
  //   setStack((previousStack) =>
  //     previousStack.filter((item) => item.id !== id)
  //   );
  // };
const handleRemoveFromStack = (id: number) => {
  setStack((previousStack) =>
    previousStack.filter((item) => item.id !== id)
  );

  toast.info("Removed!");
};        
   const handleRemoveAll = () => {
      setStack([]);
  toast.info("All Technologies Removed!");
};


          


            // Loading screen
if (loading) {
  return (
    <>
      <Nav />

      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          
          <span className="loading loading-spinner loading-lg text-violet-500"></span>

          <p className="text-sm font-medium text-gray-500">
            Loading technologies...
          </p>

        </div>
      </div>
    </>
  );
}



  return (
    <>
      <Nav />
      <Banner />
      <ToastContainer></ToastContainer>


      <main className="mx-auto max-w-7xl px-4 py-8">
     
    <div className="mb-6">
      <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
        Explore the{" "}
        <span className="text-pink-500">
          Technologies
        </span>
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        
          {/* Technolo  gy Cards */}
          <section>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAddToStack}
                  onRemove={handleRemoveFromStack}
                />
              ))}
            </div>
          </section>

          {/* Your Stack */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Your Stack
              </h2>

              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
                {stack.length}
              </span>
            </div>

            {stack.length === 0 ? (
              <div className="flex min-h-24 items-center justify-center rounded-xl border border-dashed border-gray-200 px-4 text-center">
                <p className="text-sm text-gray-400">
                  Your stack is empty.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {technology.name}
                      </p>

                      <p className="text-xs text-gray-400">
                        {technology.category}
                      </p>
                    </div>

                    <button
                    onClick={() =>
                    handleRemoveFromStack(technology.id)
                    }
                     className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-medium text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    aria-label={`Remove ${technology.name}`}
                    >
                   ×
                    </button>
                  </div>
                ))}
              </div>
            )}
              {/* Remove All Button */}
              {stack.length > 0 && (
                <button
                  onClick={handleRemoveAll}
                  className="mt-4 w-full rounded-lg border-2 bg-white 
                  px-4 py-2 text-sm font-semibold text-red-500
                   hover:bg-red-300 cursor-pointer"
                   >
                   Remove All
                   </button>
                )}
          </aside>
        </div>
      </main>
                <Footer></Footer>
    </>
  );
}

export default App;