import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { TopPageContents } from "../parts/TopPageContents";
import { Damage } from "../templates/Damage";
import { Descriptions } from "../templates/Descriptions";
import { Explain } from "../templates/Explain";
import { Reason } from "../templates/Reason";
import { RequestFlow } from "../templates/RequestFlow";

export const Home = () => {
  return (
    <>
      <Header />
      <TopPageContents />
      <Explain />
      <Descriptions />
      <Reason />
      <Damage />
      <RequestFlow />
      <Footer />
    </>
  );
};
