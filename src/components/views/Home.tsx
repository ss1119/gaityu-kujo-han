import { Company } from "../parts/Company";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { TopPageContents } from "../parts/TopPageContents";
import { Damage } from "../templates/Damage";
import { Descriptions } from "../templates/Descriptions";
import { Explain } from "../templates/Explain";
import { Movie } from "../templates/Movie";
import { Neglect } from "../templates/Neglect";
import { Reason } from "../templates/Reason";
import { RequestFlow } from "../templates/RequestFlow";

export const Home = () => {
  return (
    <>
      <Header />
      <TopPageContents />
      <Explain />
      <Movie />
      <Descriptions />
      <Reason />
      <Damage />
      <Neglect />
      <RequestFlow />
      <Company />
      <Footer />
    </>
  );
};
