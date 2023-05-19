import { DescriptionEntity } from "../../types";
import { Call } from "./Call";
import { RedStar } from "./RedStar";
import { WhiteStar } from "./WhiteStart";

export const DescriptioniPhone = (props: DescriptionEntity) => {
  const images = props.damageImages.map((image, index) => {
    return (
      <div key={index} className="mx-1">
        <img src={image} />
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
    <div className="visible rounded-lg bg-white w-auto p-4 h-auto mx-2 mb-5 xs:px-0 xl:hidden">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="border-2 border-black bg-white h-34 w-32 mr-4 xs:mr-2 xs:h-auto xs:w-32 md:h-auto md:w-56">
            <p className="border-b border-black text-center font-bold xs:text-xs md:text-2xl">
              {props.name}
            </p>
            <img src={props.animalImage} />
            <p className="flex border-t border-black text-center justify-center items-center text-sm font-bold xs:text-xs md:text-xl">
              危険度：
              {risk}
            </p>
          </div>
          <div className="pt-1 w-44 xs:w-28 md:w-80 md:ml-10">
            <p className="inline-block border-double font-bold text-sm xs:text-xs md:text-2xl">
              駆除料金
            </p>
            <br />
            <p className="inline-block border-double font-bold text-sm mb-4 xs:text-xs md:text-2xl">
              {props.lowestPrice}〜{props.highestPrice}円
            </p>
            <Call />
          </div>
        </div>
        <div className="border-2 border-black bg-white text-sm w-description mt-3 mx-3 xs:text-xs md:w-4/5">
          <p className="border-b border-black text-center font-bold md:text-2xl">
            {props.name}の特徴
          </p>
          {props.discription}
        </div>
        <div className="pt-2 md:pt-5">
          <p className="inline-block border-double font-bold xs:text-xs md:text-2xl">
            {props.name}による被害例
          </p>
        </div>
        <div className="flex justify-between mt-3">{images}</div>
      </div>
    </div>
  );
};
