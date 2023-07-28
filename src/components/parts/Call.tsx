import { getHour } from "../../utils/time";

export const Call = () => {
  const hour = getHour();
  return (
    <>
      {9 <= hour && hour < 19 ? (
        <a href="tel:0668857656">
          <img
            src="assets/call.webp"
            alt="call"
            className="shadow-md border-2 border-black rounded-md w-64 h-auto xs:border xs:w-18 md:w-80 lg:w-80 xl:w-64"
            width={250}
            height={100}
          />
        </a>
      ) : (
        <a href="tel:09060658318">
          <img
            src="assets/call.webp"
            alt="call"
            className="shadow-md border-2 border-black rounded-md w-64 h-auto xs:border xs:w-18 md:w-80 lg:w-80 xl:w-64"
            width={250}
            height={100}
          />
        </a>
      )}
    </>
  );
};
