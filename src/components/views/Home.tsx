import { Header } from "../parts/Header";
import { TopPageContents } from "../parts/TopPageContents";
import { Descriptions } from "../templates/Descriptions";

export const Home = () => {
  return (
    <div>
      <Header />
      <TopPageContents />
      <Descriptions />
    </div>
  );
};
