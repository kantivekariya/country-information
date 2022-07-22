import { Outlet } from "react-router-dom";
import Header from "./Header";

export interface LayOutIProps {
  toggleTheme: () => void;
}
const Layout = ({ toggleTheme }: LayOutIProps) => {
  return (
    <div className="">
      <Header toggleTheme={toggleTheme} />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
