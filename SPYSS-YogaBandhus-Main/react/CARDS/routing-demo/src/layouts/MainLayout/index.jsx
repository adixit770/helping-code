import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MainLayout = ({ children,show=true }) => {
  return (
    <>
      <Navbar className={show?'d-flex':'d-none'}/>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
