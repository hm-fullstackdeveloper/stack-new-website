import { useEffect, useState } from "react";
import Nav from "./Navber/nav";
import Banner from "./Navber/banner";
import type { Technology } from "./types/technology";
import TechnologyCard from "./components/technologyCard";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load technologies
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((error) => console.error(error));
  }, []);

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    setStack((previousStack) => {
      const alreadyExists = previousStack.some(
        (item) => item.id === technology.id
      );

      if (alreadyExists) {
        return previousStack;
      }

      return [...previousStack, technology];
    });
  };

  // Remove technology
  const handleRemoveFromStack = (id: number) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <Nav />
      <Banner />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

          {/* Technology Cards */}
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
                      className="rounded-lg px-2 py-1 text-xs font-semibold text-red-500 transition hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;