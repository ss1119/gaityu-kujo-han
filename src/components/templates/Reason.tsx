export const Reason = () => {
  return (
    <div className="flex flex-col items-center reason-bg">
      <div className="flex justify-center items-center p-2 mt-2 font-bold bg-yellow-300 h-10 text-2xl md:px-5 md:h-16 md:mt-14 md:text-5xl">
        害虫駆除班が選ばれる理由
      </div>
      <div className="flex justify-center items-center font-bold bg-black text-white px-2 mt-1 md:px-5 md:mt-2 md:h-12 md:text-3xl">
        お客様の快適な生活を守ります
      </div>
      <div className="flex flex-col justify-center md:mb-10">
        <div className="flex justify-center">
          <img
            src="/assets/stars/star1.svg"
            className="w-32 md:w-80 mt-minus-7 md:mt-0"
          />
          <img
            src="/assets/stars/star2.svg"
            className="w-32 md:w-80 mt-minus-7 md:mt-0"
          />
          <img
            src="/assets/stars/star3.svg"
            className="w-32 md:w-80 mt-minus-7 md:mt-0"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/stars/star4.svg"
            className="w-32 md:w-80 mt-minus"
          />
          <img
            src="/assets/stars/star5.svg"
            className="w-32 md:w-80 mt-minus"
          />
          <img
            src="/assets/stars/star6.svg"
            className="w-32 md:w-80 mt-minus"
          />
        </div>
      </div>
    </div>
  );
};