import { Area } from "../parts/Area";
import { Promises } from "../parts/Promise";
import { Staff } from "../parts/Staff";

export const Explain = () => {
  return (
    <div className="flex flex-col items-center pt-3 md:pt-10 lg:pt-3 bg-gray-300">
      <div className="flex justify-center px-2 items-center">
        <img
          src="assets/home-protector.png"
          className="md:w-4/5 lg:w-1/2 xl:w-2/5"
        />
      </div>
      <Area />
      <Staff />
      <Promises />
    </div>
  );
};
