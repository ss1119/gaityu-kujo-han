import { DescriptionEntity } from "../../types";
import { Call } from "./Call";
import { RedStar } from "./RedStar";
import { WhiteStar } from "./WhiteStart";

export const DescriptionPC = (props: DescriptionEntity) => {
  const images = props.damageImages.map((image, index) => {
    return (
      <div key={index} className="lg:w-44">
        <img src={image} alt={"damage" + index + 1} />
      </div>
    );
  });

  const risk = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.risk) {
      risk.push(<RedStar key={i} />);
    } else {
      risk.push(<WhiteStar key={i} />);
    }
  }
  return (
    <div className="hidden rounded-lg bg-white w-auto p-5 h-auto mb-5 mx-3 xl:block">
      <div className="flex flex-col">
        <div className="flex justify-center items-center h-52 xl:h-60">
          <div className="border-4 border-black bg-white w-44 lg:w-48">
            <p className="border-b-2 border-black text-center font-bold">
              {props.name}
            </p>
            <img src={props.animalImage} alt="animal" />
            <p className="flex border-t-2 border-black text-center justify-center items-center text-sm font-bold">
              危険度：
              {risk}
            </p>
          </div>
          <img
            src="/assets/arrow.webp"
            alt="arrow"
            className="h-16 px-1 xl:h-14"
          />
          <div className="border-4 border-black bg-white w-96">
            <p className="border-b-2 border-black text-center font-bold">
              {props.name}の特徴
            </p>
            {props.discription}
          </div>
        </div>
        <div className="flex items-end pt-1">
          <p className="inline-block border-double font-bold mb-9 mr-16">
            駆除料金：{props.lowestPrice}円〜{props.highestPrice}円
          </p>
          <Call />
        </div>
        <div className="block">
          <p className="inline-block border-double font-bold">
            {props.name}による被害例
          </p>
        </div>
        <div className="flex justify-between mt-4 px-5">{images}</div>
      </div>
    </div>
  );
};
