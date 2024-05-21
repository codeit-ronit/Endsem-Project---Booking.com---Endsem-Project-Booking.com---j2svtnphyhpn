import { Outlet, useLocation } from "react-router-dom";
import "../css/main.css";
import SearchBar from "./SearchBar";
import Header from "./header";
function Home() {
    const location = useLocation();
    const isChildRoute = location.pathname !== "/";
  return (
    <>
      <Header />
      {!isChildRoute && (
        <>
      <div className="bg-[#003B95] h-[331px] p-[30px] pl-[64px]">
        <div className="flex flex-col self-start mt-32 max-md:mt-10 max-md:max-w-full">
          <h1 className="text-5xl text-slate-100 max-md:max-w-full max-md:text-4xl">
            Find your next stay
          </h1>
          <h2 className="mt-4 text-2xl text-slate-200 max-md:max-w-full">
            Search low prices on hotels, homes and much more...
          </h2>
        </div>
      </div>
      <div className="z-100 p-2 ml-[60px]">
            <SearchBar/>
      </div>
      </>
      )}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
