export const TopPageContents = () => {
  return (
    <div className="relative bg-gray-300">
      <div className="flex justify-center">
        <img
          src="/assets/animals/animals-small.webp"
          alt="animals-small"
          className="lg:hidden"
        />
        <img
          src="/assets/animals/animals-big.webp"
          alt="animals-big"
          className="hidden lg:block w-11/12"
        />
      </div>
      <div className="flex justify-center lg:hidden my-2 md:my-4">
        <a href="tel:0668857656">
          <div className="flex items-center shadow-lg bg-red-700 pr-7 pl-3 pt-2 pb-1 xs:py-1 xs:pr-4 xs:pl-2 hover:bg-red-600 active:scale-95">
            <img
              src="assets/phone.webp"
              alt="phone"
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
      </div>
      <div className="flex lg:hidden justify-center items-center bg-black mt-2 mb-1 xs:py-0.5 md:my-4 md:py-2">
        <img
          src="assets/car.webp"
          alt="car"
          className="w-16 mr-2 xs:w-10 md:w-28"
        />
        <p className="text-xl font-black text-white xs:text-base md:text-5xl">
          電話１本ですぐに駆けつけ！
        </p>
      </div>
      <div className="flex justify-center px-3 py-1 md:px-5 md:py-3 lg:pt-8">
        <img
          src="assets/stars.webp"
          alt="stars"
          className="lg:w-3/4 lg:rounded-xl"
        />
      </div>
      <div className="lg:hidden">
        <div className="flex justify-center items-center px-3 py-1 md:px-5 md:py-3">
          <div>
            <img
              src="/assets/campaign.webp"
              alt="campaign"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex justify-center items-center px-3 py-1 md:px-5 md:py-3">
          <div>
            <img src="assets/explain.webp" alt="explain" className="w-full" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center mt-3 px-10">
        <div className="flex-row justify-center w-3/5 pr-5">
          <img
            src="/assets/campaign.webp"
            alt="campaign"
            className="w-full h-full rounded-xl"
          />
          <div className="hedden lg:flex justify-center pt-3">
            <a href="tel:0668857656">
              <div className="flex items-center shadow-lg bg-red-700 pr-7 pl-3 pt-2 pb-1 hover:bg-red-600 active:scale-95">
                <img
                  src="assets/phone.webp"
                  alt="phone"
                  className="w-22 mr-2"
                />
                <div className="flex-col">
                  <div className="inline-block font-bold bg-yellow-300 px-1 text-xl">
                    ご相談・調査・お見積り無料！
                  </div>
                  <p className="font-bold text-white text-4xl mt-1">
                    06-6885-7656
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center bg-black mt-3">
            <img
              src="assets/car.webp"
              alt="car"
              className="w-20 mr-2 xl:w-24"
            />
            <p className="text-2xl font-black text-white xl:text-4xl">
              電話１本ですぐに駆けつけ！
            </p>
          </div>
        </div>
        <div className="w-3/5">
          <img
            src="assets/explain.webp"
            alt="explain"
            className="rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};
