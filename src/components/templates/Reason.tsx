import { Crown } from "../parts/Crown";

export const Reason = () => {
  return (
    <div className="flex flex-col items-center reason-bg">
      <div className="flex justify-center items-center p-2 mt-2 font-bold bg-yellow-300 text-xl xs:text-sm xs:py-1 xs:mt-5 md:text-4xl md:px-4 md:mt-6 lg:px-5 lg:h-16 lg:mt-14 lg:text-5xl">
        ホームプロテクターが選ばれる理由
      </div>
      <div className="flex justify-center items-center font-bold bg-black text-white px-2 mt-1 xs:text-sm xs:mb-5 md:text-2xl md:px-3 lg:px-5 lg:mt-2 lg:h-12 lg:text-3xl">
        お客様の快適な生活を守ります
      </div>
      <div className="flex flex-col justify-center lg:mb-10">
        <div className="flex justify-center">
          <Crown fileName="crown1.webp" alt="最短即日駆除" />
          <Crown fileName="crown2.webp" alt="安心の出張料無料" />
          <Crown fileName="crown3.webp" alt="最短5分無料見積もり" />
        </div>
        <div className="flex justify-center">
          <Crown fileName="crown4.webp" alt="豊富な割引サービス" />
          <Crown fileName="crown5.webp" alt="最長10年保証" />
          <Crown fileName="crown6.webp" alt="熟練のプロスタッフ" />
        </div>
      </div>
    </div>
  );
};
