import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
