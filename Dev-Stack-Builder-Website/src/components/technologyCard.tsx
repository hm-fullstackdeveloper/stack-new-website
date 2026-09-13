import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
  onRemove: (id: number) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
  onRemove,
}: TechnologyCardProps) => {
  return (
    <article className="group flex h-full flex-col rounded-xl border
     border-gray-200 bg-white p-3 shadow-sm transition duration-300 
     hover:-translate-y-1 hover:shadow-lg">

      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-purple-50 px-2 py-1 text-[10px] font-semibold text-purple-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h2 className="mt-3 text-sm font-bold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-1 min-h-12 text-[10px] leading-4 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="rounded bg-gray-50 px-2 py-1 text-[9px] text-gray-500">
          {technology.category}
        </span>

        <span className="text-[9px] text-gray-500">
          {technology.difficulty}
        </span>

        <span className="text-[9px] font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => {
          if (isAdded) {
            onRemove(technology.id);
          } else {
            onAdd(technology);
          }
        }}
        className={`mt-3 w-full rounded-md px-3 py-2 text-[10px] font-semibold transition ${
          isAdded
            ? "bg-red-500 text-white hover:bg-red-600  cursor-pointer"
            : "bg-gray-900 text-white hover:bg-violet-600   cursor-pointer"
        }`}
      >
        {isAdded ? "Remove from Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;