import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Navbar />
      {children}
      <Footer/>
    </Container>
  );
};

export default MainLayout;
