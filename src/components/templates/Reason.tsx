export const Reason = () => {
  return (
    <div className="flex flex-col items-center reason-bg h-screen">
      <div className="flex justify-center items-center p-2 mt-5 font-bold bg-yellow-300 text-2xl md:px-5 md:h-16 md:mt-10 md:text-5xl">
        害虫駆除班が選ばれる理由
      </div>
      <div className="flex justify-center items-center font-bold bg-black text-white text-2xl md:px-5 md:mt-2 md:h-12 md:text-3xl">
        お客様の快適な生活を守ります
      </div>
      <div className="md:flex md:flex-col md:justify-center">
        <div className="md:flex md:justify-center">
          <img src="/assets/stars/star1.svg" className="md:w-80" />
          <img src="/assets/stars/star2.svg" className="md:w-80" />
          <img src="/assets/stars/star3.svg" className="md:w-80" />
        </div>
        <div className="md:flex md:justify-center">
          <img src="/assets/stars/star4.svg" className="md:w-80 mt-minus" />
          <img src="/assets/stars/star5.svg" className="md:w-80 mt-minus" />
          <img src="/assets/stars/star6.svg" className="md:w-80 mt-minus" />
        </div>
      </div>
    </div>
  );
};
