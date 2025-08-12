import { useEffect, useState } from "react";

const Card = ({ imgURL, heading, subheading, date, description }) => {
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(description && description.trim().length);

  // If details disappear, make sure it's collapsed
  useEffect(() => {
    if (!hasDetails) setOpen(false);
  }, [hasDetails]);

  return (
    <div className="w-full max-w-[720px] p-3 rounded-lg border border-white">
      {/* Top row */}
      <div className="flex items-center">
        {/* Left: logo + text */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
          <img
            src={imgURL}
            alt={heading}
            className="w-10 h-10 object-contain shrink-0"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-semibold leading-tight truncate text-white dark:text-white">
              {heading}
            </h3>
            <p className="text-xs text-gray-400 truncate">
              {subheading}
            </p>
          </div>
        </div>

        {/* Right: date + (conditional) arrow */}
        <div className="flex items-center gap-2 pl-3 md:pl-4 shrink-0">
          <span className="text-xs text-gray-400 dark:text-gray-400 whitespace-nowrap">
            {date}
          </span>

          {hasDetails && (
            <button
              type="button"
              aria-expanded={open}
              aria-controls="card-panel"
              onClick={() => setOpen(o => !o)}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              title={open ? "Collapse" : "Expand"}
            >
              <svg
                className={`transition-transform ${open ? "rotate-180" : ""}`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="sr-only">
                {open ? "Collapse details" : "Expand details"}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Expanding panel (only rendered if details exist) */}
      {hasDetails && (
        <div
          id="card-panel"
          className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
            open ? "max-h-48 mt-2" : "max-h-0"
          }`}
        >
          <div className="border-t pt-2 text-sm">
            <p className="mt-2 text-xs text-gray-400">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;