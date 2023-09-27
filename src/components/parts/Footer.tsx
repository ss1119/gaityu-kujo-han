import { getDayOfWeek, getHour } from "../../utils/time";

export const Footer = () => {
  const hour = getHour();
  const dayOfWeek = getDayOfWeek();
  return (
    <div className="sticky bottom-0 z-50 lg:hidden">
      <div className="flex-row items-center relative p-1 pb-2 w-full h-auto bg-orange-400 xs:pb-1 md:py-2">
        <div className="flex items-center">
          <div className="bg-yellow-300 px-4 mb-1 xs:px-2 md:px-8">
            <p className="font-bold inline-block text-base xs:text-xs sm:text-lg md:text-3xl md:py-1">
              ご相談&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;ご依頼&nbsp;&nbsp;&nbsp;受付中
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-1">
          {9 <= hour && hour < 19 && dayOfWeek !== 6 ? (
            <a
              href="tel:0668857656"
              className="flex items-center justify-center w-7/12 h-14 mr-3 xs:h-10 md:mr-0 md:h-28"
            >
              <img
                src="assets/footer/call.webp"
                alt="お電話はこちらから"
                className="w-56 h-auto md:w-10/12"
                width={800}
                height={237}
              />
            </a>
          ) : (
            <a
              href="tel:09060658318"
              className="flex items-center justify-center w-7/12 h-14 mr-3 xs:h-10 md:mr-0 md:h-28"
            >
              <img
                src="assets/footer/call.webp"
                alt="お電話はこちらから"
                className="w-56 h-auto md:w-10/12"
                width={800}
                height={237}
              />
            </a>
          )}
          <a
            href="https://lin.ee/mqP8zXC"
            className="flex flex-col justify-center w-5/12 h-14 xs:h-10 md:h-28 md:items-center"
          >
            <img
              src="assets/footer/estimate.webp"
              alt="簡単見積りはこちらから"
              className="w-40 h-auto md:w-10/12"
              width={400}
              height={165}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
