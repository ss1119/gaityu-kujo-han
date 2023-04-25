import { Header } from "../parts/Header";
import { TopPageContents } from "../parts/TopPageContents";
import { Damage } from "../templates/Damage";
import { Descriptions } from "../templates/Descriptions";
import { Reason } from "../templates/Reason";

export const Home = () => {
  return (
    <div>
      <Header />
      <TopPageContents />
      <Descriptions />
      <Reason />
      <Damage />
    </div>
  );
};
