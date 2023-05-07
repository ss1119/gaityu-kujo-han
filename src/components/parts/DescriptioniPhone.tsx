import { DescriptionEntity } from "../../types";
import { RedStar } from "./RedStar";
import { WhiteStar } from "./WhiteStart";

export const DescriptioniPhone = (props: DescriptionEntity) => {
  const images = props.damageImages.map((image, index) => {
    return (
      <div key={index} className="mx-1">
        <img src={image} className="border-2 border-black" />
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
    <div className="visible rounded-lg bg-white w-auto p-4 h-auto mx-2 mb-5 xl:hidden">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="border-2 border-black bg-white h-42 w-44 mr-4 md:w-56">
            <p className="border-b border-black text-center font-bold md:text-xl">
              {props.name}
            </p>
            <img src={props.animalImage} />
            <p className="flex border-t border-black text-center justify-center items-center text-sm font-bold md:text-lg">
              危険度：
              {risk}
            </p>
          </div>
          <div className="pt-1 w-32 md:w-40">
            <p className="inline-block border-double font-bold text-sm md:text-lg">
              駆除料金
            </p>
            <p className="inline-block border-double font-bold text-sm md:text-lg">
              {props.lowestPrice}〜{props.highestPrice}円
            </p>
          </div>
        </div>
        <div className="border-2 border-black bg-white text-sm mt-3 mx-3 md:text-lg">
          <p className="border-b border-black text-center font-bold">
            {props.name}の特徴
          </p>
          {props.discription}
        </div>
        <div className="pt-2">
          <p className="inline-block border-double font-bold md:text-lg">
            {props.name}による被害例
          </p>
        </div>
        <div className="flex justify-between mt-3">{images}</div>
      </div>
    </div>
  );
};
