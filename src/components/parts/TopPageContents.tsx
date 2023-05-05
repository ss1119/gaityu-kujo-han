export const TopPageContents = () => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <img src="/assets/animals/animals-small.png" className="md:hidden" />
        <img
          src="/assets/animals/animals-big.png"
          className="hidden md:block w-11/12"
        />
      </div>
      <div className="flex justify-center md:botom-8 md:absolute md:mx-48">
        <div className="container rounded-xl py-3 md:py-8 bg-yellow-300">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="text-center font-bold md:text-4xl text-2xl">
              今ならなんと駆除費 <span className="maker">50%OFF</span>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/campaign.png"
                className="w-40 pr-3 mt-1 md:h-8 md:pl-3 md:mt-2"
              />
            </div>
          </div>
          <div className="px-10 mt-4 md:mt-6 md:px-20">
            <p className="text-left font-semibold md:text-xl">
              有害ウイルスや有害な細菌を持つ
              <br className="md:hidden" />
              『危険な害虫・害獣』の駆除は、実践経験
              <br className="md:hidden" />
              豊富な『害虫駆除班』のプロスタッフに
              <br className="md:hidden" />
              お任せ下さい。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
