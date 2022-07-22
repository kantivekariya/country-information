import { Outlet } from "react-router-dom";
import Header from "./Header";

export interface LayOutIProps {
  theme: string;
  toggleTheme: () => void;
}
const Layout = ({ theme, toggleTheme }: LayOutIProps) => {
  return (
    <div className="">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
