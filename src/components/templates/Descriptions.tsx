import { DescriptionPC } from "../parts/DescriptionPC";
import { descriptionContents } from "../../utils/descriptions";
import { DescriptioniPhone } from "../parts/DescriptioniPhone";

export const Descriptions = () => {
  const descriptions = descriptionContents.map((value, index) => {
    return (
      <div key={index}>
        <DescriptionPC
          name={value.name}
          lowestPrice={value.lowestPrice}
          highestPrice={value.highestPrice}
          risk={value.risk}
          discription={value.discription}
          animalImage={value.animalImage}
          damageImages={value.damageImages}
        />
        <DescriptioniPhone
          name={value.name}
          lowestPrice={value.lowestPrice}
          highestPrice={value.highestPrice}
          risk={value.risk}
          discription={value.discription}
          animalImage={value.animalImage}
          damageImages={value.damageImages}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center bg-gray-300 pb-5 lg:pb-10">
      <div className="flex justify-center items-center p-2 mt-5 font-bold bg-yellow-300 text-xl xs:text-base xs:py-1 md:text-4xl md:px-4 md:mt-10 lg:px-5 lg:mt-20 lg:text-5xl">
        対象の害虫・害獣
      </div>
      <div className="pt-2 xl:grid xl:grid-cols-2 xl:pt-5">{descriptions}</div>
    </div>
  );
};
