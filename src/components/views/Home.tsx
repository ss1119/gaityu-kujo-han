import { Company } from "../parts/Company";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Descriptions } from "../templates/Descriptions";
import { Explain } from "../parts/Explain";
import { Pages } from "../parts/Pages";
import { Examples } from "../parts/Examples";
import { Summary } from "../parts/Summary";

export const Home = () => {
  return (
    <>
      <Header />
      <Pages />
      <Explain />
      <Descriptions />
      <Examples />
      <Summary />
      <Company />
      <Footer />
    </>
  );
};
