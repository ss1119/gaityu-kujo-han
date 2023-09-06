import { Company } from "../parts/Company";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Descriptions } from "../templates/Descriptions";
import { Explain } from "../parts/Explain";
import { Pages } from "../templates/Pages";
import { Examples } from "../parts/Examples";

export const Home = () => {
  return (
    <>
      <Header />
      <Pages />
      <Explain />
      <Descriptions />
      <Examples />
      <Company />
      <Footer />
    </>
  );
};
