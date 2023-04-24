import { DescriptionEntity } from "../../types";
import { RedStar } from "./RedStar";
import { WhiteStar } from "./WhiteStart";

export const DescriptionPC = (props: DescriptionEntity) => {
  const images = props.damageImages.map((image, index) => {
    return (
      <div key={index} className="md:w-44">
        <img src={image} className="border border-black" />
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
    <div className="hidden rounded-lg bg-white w-auto p-5 h-auto mb-5 mx-3 md:block">
      <div className="flex flex-col">
        <div className="flex justify-center items-center h-52">
          <div className="border border-black bg-white h-40 w-44">
            <p className="border-b border-black text-center font-bold">
              {props.name}
            </p>
            <img src={props.animalImage} />
            <p className="flex border-t border-black text-center justify-center items-center text-sm font-bold">
              危険度：
              {risk}
            </p>
          </div>
          <img src="/assets/arrow.png" className="h-16 px-1" />
          <div className="border border-black bg-white w-96">
            <p className="border-b border-black text-center font-bold">
              {props.name}の特徴
            </p>
            {props.discription}
          </div>
        </div>
        <div className="pt-1">
          <p className="inline-block border-double font-bold">
            駆除料金：{props.lowestPrice}円〜{props.highestPrice}円
          </p>
        </div>
        <div className="pt-4">
          <p className="inline-block border-double font-bold">
            {props.name}による被害例
          </p>
        </div>
        <div className="flex justify-between mt-4">{images}</div>
      </div>
    </div>
  );
};
