export const TopPageContents = () => {
  return (
    <div className="relative bg-gray-300">
      <div className="flex justify-center">
        <img src="/assets/animals/animals-small.jpg" className="lg:hidden" />
        <img
          src="/assets/animals/animals-big.jpg"
          className="hidden lg:block w-11/12"
        />
      </div>
      <div className="flex justify-center lg:hidden my-2 md:my-4">
        <a href="tel:0668857656">
          <div className="flex items-center shadow-lg bg-red-700 pr-7 pl-3 pt-2 pb-1 xs:py-1 xs:pr-4 xs:pl-2 hover:bg-red-600 active:scale-95">
            <img src="assets/phone.png" className="w-14 mr-2 xs:w-10 md:w-24" />
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
      <div className="flex justify-center px-3 py-1 md:px-5 md:py-3 lg:pt-8">
        <img src="assets/stars.jpg" className="lg:w-3/4 lg:rounded-xl" />
      </div>
      <div className="lg:hidden">
        <div className="flex justify-center items-center px-3 py-1 md:px-5 md:py-3">
          <div>
            <img src="/assets/campaign.jpg" />
          </div>
        </div>
        <div className="flex justify-center items-center px-3 py-1 md:px-5 md:py-3">
          <div>
            <img src="assets/explain.jpg" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center mt-3 px-10">
        <div className="flex-row justify-center w-3/5 pr-5">
          <img src="/assets/campaign.jpg" className="rounded-xl" />
          <div className="hedden lg:flex justify-center pt-10">
            <a href="tel:0668857656">
              <div className="flex items-center shadow-lg bg-red-700 pr-7 pl-3 pt-2 pb-1 hover:bg-red-600 active:scale-95">
                <img src="assets/phone.png" className="w-22 mr-2" />
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
        </div>
        <div className="w-3/5">
          <img src="assets/explain.jpg" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};
