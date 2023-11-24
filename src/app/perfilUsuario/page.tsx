import React from "react";

const page = () => {
  return (
    <div className="w-full  bg-gray-100 dark:bg-gray-800 p-5">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
            data-v0-t="card"
          >
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 mb-4">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                UN
              </span>
            </span>
            <h2 className="text-2xl font-bold mb-2">User Name</h2>
            <p className="text-gray-500 dark:text-gray-400">user@example.com</p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-4">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
            data-v0-t="card"
          >
            <h2 className="text-2xl font-bold mb-4">Statuses</h2>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
              Status 1
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
              Status 2
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
              Status 3
            </div>
            <a className="underline mt-4" href="#">
              View all statuses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
