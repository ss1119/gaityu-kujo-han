export const TopPageContents = () => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <img src="/assets/animals/animals-small.png" className="lg:hidden" />
        <img
          src="/assets/animals/animals-big.png"
          className="hidden lg:block w-11/12"
        />
      </div>
      <div className="flex justify-center">
        <img src="assets/stars.png" />
      </div>
      <div className="flex justify-center">
        <div className="w-full py-3 md:py-5 lg:py-8 bg-yellow-300">
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="text-center font-bold lg:text-4xl text-2xl">
              <span className="fuchidori mr-3">今だけ駆除費</span>
              <span className="text-red-600">50%OFF</span>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/campaign.png"
                className="w-40 pr-3 mt-1 lg:h-8 lg:pl-3 lg:mt-2"
              />
            </div>
          </div>
          <div className="flex justify-center px-4 mt-4">
            <p className="text-justify font-semibold leading-relaxed xs:text-sm md:text-xl lg:leading-loose">
              有害ウイルスや有害な細菌を持つ『危険な害虫・害獣』の駆除は、実践経験豊富な『ホームプロテクター』のプロスタッフに
              お任せ下さい。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
