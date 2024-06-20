import { Suspense } from "react";
import NavbarItem from "./NavbarItem";
// again this component should appear on everypage
// so add it above the children and below header

export default function Navbar() {
  return (
    <Suspense>
      <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
