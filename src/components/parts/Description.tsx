import { DescriptionEntity } from "../../types";
import { RedStar } from "./RedStar";
import { WhiteStar } from "./WhiteStart";

export const Description = (props: DescriptionEntity) => {
  const images = props.images.map((image, index) => {
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
    <div className="rounded-lg bg-white w-auto md:p-5 md:h-100 md:mb-5 md:mx-3">
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <div className="h-40 border border-black bg-white md:w-44">
            <p className="border-b border-black text-center">{props.name}</p>
            <img src="/assets/animals/animal7.png" />
            <p className="flex border-t border-black text-center justify-center items-center text-sm">
              危険度：
              {risk}
            </p>
          </div>
          <img src="/assets/arrow.png" className="md:h-16 md:px-1" />
          <div className="border border-black bg-white md:w-96">
            <p className="border-b border-black text-center">
              {props.name}の特徴
            </p>
            {props.discription}
          </div>
        </div>
        <div className="md:pt-1">
          <p className="inline-block border-double font-bold">
            駆除料金：{props.lowestPrice}円〜{props.highestPrice}円
          </p>
        </div>
        <div className="md:pt-4">
          <p className="inline-block border-double font-bold">
            {props.name}による被害例
          </p>
        </div>
        <div className="flex justify-between md:mt-4">{images}</div>
      </div>
    </div>
  );
};
