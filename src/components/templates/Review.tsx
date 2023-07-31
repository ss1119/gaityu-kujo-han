import { getHour } from "../../utils/time";
import { ReviewContent } from "../parts/ReviewContent";

export const Review = () => {
  const hour = getHour();
  return (
    <div className="request-flow-bg py-3 md:py-5">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center p-2 mb-2 font-bold bg-yellow-300 text-xl xs:text-sm xs:py-1 md:text-4xl md:mb-4 md:px-4 lg:px-5 lg:mb-5 lg:text-5xl">
          お客様のお声
        </div>
        <div className="flex flex-col lg:hidden w-full px-3 md:pl-16 md:pr-16">
          <ReviewContent
            fileName="review1.webp"
            text="スズメバチ駆除：ハチが何度もしつこく同じ場所に巣を作るのでお願いしました！跡形もなく綺麗に取って頂き、保証も付けて下さったのでこれで安心です！"
          />
          <ReviewContent
            fileName="review2.webp"
            text="ハクビシン駆除：捕獲して殺処分されたら可哀想だなと思っていましたが、しっかりと無償で追い出して下さり安心しました！もう動物の足音も聞こえないし、毎日ストレスなく眠りにつけてます"
          />
          <ReviewContent
            fileName="review3.webp"
            text="トコジラミ駆除：遅い時間にお電話したにも関わらず、20分程度で駆けつけて下さり助かりました！来ていただいてからパタリと被害も治まり、大満足です！"
          />
        </div>
        <div className="hidden lg:flex flex-col">
          <div className="flex justify-center">
            <ReviewContent
              fileName="review1.webp"
              text="スズメバチ駆除：ハチが何度もしつこく同じ場所に巣を作るのでお願いしました！跡形もなく綺麗に取って頂き、保証も付けて下さったのでこれで安心です！"
            />
            <ReviewContent
              fileName="review2.webp"
              text="ハクビシン駆除：捕獲して殺処分されたら可哀想だなと思っていましたが、しっかりと無償で追い出して下さり安心しました！もう動物の足音も聞こえないし、毎日ストレスなく眠りにつけてます"
            />
          </div>
          <div className="flex justify-center pt-2">
            <ReviewContent
              fileName="review3.webp"
              text="トコジラミ駆除：遅い時間にお電話したにも関わらず、20分程度で駆けつけて下さり助かりました！来ていただいてからパタリと被害も治まり、大満足です！"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2 md:mt-4">
        {9 <= hour && hour < 19 ? (
          <a href="tel:0668857656">
            <div className="flex items-center shadow-lg bg-red-700 pr-7 pl-3 pt-2 pb-1 xs:py-1 xs:pr-4 xs:pl-2 hover:bg-red-600 active:scale-95">
              <img
                src="assets/phone.webp"
                alt="電話マーク"
                className="w-14 mr-2 xs:w-10 md:w-24"
              />
              <div className="flex-col">
                <div className="inline-block font-bold bg-yellow-300 px-1 xs:text-xs md:text-xl">
                  ご相談・調査・お見積り無料！
                </div>
                <p className="text-3xl font-bold text-white xs:text-2xl md:text-5xl">
                  06-6885-7656
                </p>
              </div>
            </div>
          </a>
        ) : (
          <a href="tel:09060658318">
            <div className="flex items-center shadow-lg bg-red-700 pr-7 pl-3 pt-2 pb-1 xs:py-1 xs:pr-4 xs:pl-2 hover:bg-red-600 active:scale-95">
              <img
                src="assets/phone.webp"
                alt="電話マーク"
                className="w-14 mr-2 xs:w-10 md:w-24"
              />
              <div className="flex-col">
                <div className="inline-block font-bold bg-yellow-300 px-1 xs:text-xs md:text-xl">
                  ご相談・調査・お見積り無料！
                </div>
                <p className="text-3xl font-bold text-white xs:text-2xl md:text-5xl">
                  090-6065-8318
                </p>
              </div>
            </div>
          </a>
        )}
      </div>
      <div className="hidden lg:flex flex-col items-center">
        <div className="flex justify-center items-center bg-black mt-2 w-2/3 h-20 my-1">
          <img src="assets/car.webp" alt="白い車" className="w-28 mr-2" />
          <p className="text-4xl font-black text-white">
            電話１本ですぐに駆けつけ！
          </p>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center bg-black mt-2 xs:py-0.5 md:my-4 md:py-2 md:h-20">
        <img
          src="assets/car.webp"
          alt="白い車"
          className="w-16 mr-2 xs:w-10 md:w-28"
        />
        <p className="text-xl font-black text-white xs:text-base md:text-4xl">
          電話１本ですぐに駆けつけ！
        </p>
      </div>
    </div>
  );
};
