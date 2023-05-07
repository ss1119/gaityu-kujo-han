import { Crown } from "../parts/Crown";

export const Reason = () => {
  return (
    <div className="flex flex-col items-center reason-bg">
      <div className="flex justify-center items-center p-2 mt-2 font-bold bg-yellow-300 h-10 text-xl md:text-4xl md:px-4 md:mt-6 lg:px-5 lg:h-16 lg:mt-14 lg:text-5xl">
        ホームプロテクターが選ばれる理由
      </div>
      <div className="flex justify-center items-center font-bold bg-black text-white px-2 mt-1 md:text-2xl md:px-3 lg:px-5 lg:mt-2 lg:h-12 lg:text-3xl">
        お客様の快適な生活を守ります
      </div>
      <div className="flex flex-col justify-center lg:mb-10">
        <div className="flex justify-center">
          <Crown fileName="crown1.png" />
          <Crown fileName="crown2.png" />
          <Crown fileName="crown3.png" />
        </div>
        <div className="flex justify-center">
          <Crown fileName="crown4.png" />
          <Crown fileName="crown5.png" />
          <Crown fileName="crown6.png" />
        </div>
      </div>
    </div>
  );
};
