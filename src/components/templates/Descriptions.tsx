import { Description } from "../parts/Description";
import { descriptionContents } from "../../utils/descriptions";

export const Descriptions = () => {
  const descriptions = descriptionContents.map((value, index) => {
    return (
      <Description
        key={index}
        name={value.name}
        lowestPrice={value.lowestPrice}
        highestPrice={value.highestPrice}
        risk={value.risk}
        discription={value.discription}
        animalImage={value.animalImage}
        damageImages={value.damageImages}
      />
    );
  });
  return (
    <div className="flex flex-col items-center bg-gray-200 md:mt-24 md:pt-24">
      <div className="text-center pt-3 font-bold tex-red-600 bg-yellow-300 text-2xl md:w-56 md:h-16 md:mt-20 md:text-4xl">
        対象の害虫
      </div>
      <div className="md:grid md:grid-cols-2 md:pt-8 md:px-">
        {descriptions}
      </div>
    </div>
  );
};
