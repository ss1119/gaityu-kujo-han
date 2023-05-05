import { Area } from "../parts/Area";
import { Promises } from "../parts/Promise";
import { Staff } from "../parts/Staff";

export const Explain = () => {
  return (
    <div className="flex flex-col items-center pt-5 md:pt-14 bg-gray-200">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-xl md:px-5 md:text-5xl">
        <span className="text-red-600">ホームプロテクター</span>とは？
      </div>
      <Area />
      <Staff />
      <Promises />
    </div>
  );
};
