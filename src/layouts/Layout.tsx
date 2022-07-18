import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className="container container-sm container-xxl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
