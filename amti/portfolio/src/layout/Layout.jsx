import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};
