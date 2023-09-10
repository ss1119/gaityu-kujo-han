import { getDayOfWeek, getHour } from "../../utils/time";

export const Footer = () => {
  const hour = getHour();
  const dayOfWeek = getDayOfWeek();
  return (
    <div className="sticky bottom-0 z-50 lg:hidden">
      <div className="flex-row items-center relative p-1 w-full h-auto bg-orange-400 md:py-2 md:px-5">
        <div className="flex items-center">
          <div className="bg-yellow-300 px-4 mb-1 xs:px-2 md:px-8">
            <p className="font-bold inline-block text-base xs:text-xs sm:text-lg md:text-3xl md:py-1">
              ご相談&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;ご依頼&nbsp;&nbsp;&nbsp;受付中
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-7/12 bg-white shadow-2xl mr-4 md:mr-10">
            {(9 <= hour && hour < 19) || dayOfWeek !== 6 ? (
              <a
                href="tel:0668857656"
                className="flex items-center justify-center h-14 pr-3 xs:h-10 md:h-20"
              >
                <div className="flex items-center">
                  <img
                    src="assets/phone.webp"
                    alt="電話マーク"
                    className="w-14 h-auto xs:w-8 md:w-20"
                    width={340}
                    height={340}
                  />
                  <div className="flex-row">
                    <p className="text-2xs sm:text-sm md:text-2xl md:font-semibold">
                      AM9:00〜PM22:00
                    </p>
                    <p className="text-xl font-bold text-orange-600 xs:text-xs md:text-4xl">
                      ここをタップ
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <a
                href="tel:09060658318"
                className="flex items-center justify-center h-14 pr-3 xs:h-10 md:h-20"
              >
                <div className="flex items-center">
                  <img
                    src="assets/phone.webp"
                    alt="電話マーク"
                    className="w-14 h-auto xs:w-8 md:w-20"
                    width={340}
                    height={340}
                  />
                  <div className="flex-row">
                    <p className="text-2xs sm:text-sm md:text-2xl md:font-semibold">
                      AM9:00〜PM22:00
                    </p>
                    <p className="text-xl font-bold text-orange-600 xs:text-xs md:text-4xl">
                      ここをタップ
                    </p>
                  </div>
                </div>
              </a>
            )}
          </div>
          <div className="w-5/12 bg-white shadow-2xl">
            <a
              href="https://lin.ee/mqP8zXC"
              className="flex flex-col justify-center h-14 pr-4 pl-3.5 xs:h-10 md:h-20 md:items-center"
            >
              <p className="text-2xs sm:text-sm md:text-2xl md:font-semibold md:pr-14">
                24時間受付中
              </p>
              <img
                src="assets/line.png"
                alt="LINEアイコン"
                className="absolute w-11 h-auto top-2 right-1.5 xs:w-8 sm:top-3 md:w-20 md:mr-3"
                width={100}
                height={100}
              />
              <div className="text-xl font-bold text-orange-600 pl-2 xs:text-xs md:text-4xl md:pr-8">
                簡単見積り
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
