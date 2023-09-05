import { Company } from "../parts/Company";
import { Estimate } from "../parts/Estimate";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Damage } from "../templates/Damage";
import { Descriptions } from "../templates/Descriptions";
import { Explain } from "../parts/Explain";
import { Movie } from "../templates/Movie";
import { Neglect } from "../templates/Neglect";
import { Reason } from "../templates/Reason";
import { RequestFlow } from "../templates/RequestFlow";
import { Review } from "../templates/Review";
import { Pages } from "../templates/Pages";

export const Home = () => {
  return (
    <>
      <Header />
      <Pages />
      <Explain />
      <Movie />
      <Descriptions />
      <Estimate />
      <RequestFlow />
      <Reason />
      <Damage />
      <Neglect />
      <Review />
      <Company />
      <Footer />
    </>
  );
};
