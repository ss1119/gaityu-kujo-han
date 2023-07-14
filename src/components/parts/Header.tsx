export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-opacity-90 flex items-center justify-end py-4 h-16 pr-1 bg-gray-400 md:h-20 md:justify-between lg:h-20 lg:flex-row lg:py-2 lg:pr-0">
        <div className="flex items-center">
          <img
            src="assets/icon.webp"
            className="w-14 mx-2 xs:w-12 md:w-16 lg:w-20 lg:ml-10 lg:mr-3"
          />
          <div className="flex flex-col items-center">
            <p className="font-bold inline-block border-double text-base xs:text-xs sm:text-lg md:text-xl lg:text-xl xl:text-4xl">
              ホームプロテクター
            </p>
            <p className="font-bold text-left xs:text-xs md:text-base lg:text-xl lg:mt-1 xl:text-2xl">
              害虫・害獣駆除
            </p>
          </div>
        </div>
        <div className="hidden items-center md:flex lg:flex">
          <p className="pl-4 pr-4 font-bold text-left md:text-base lg:text-lg xl:text-xl">
            <span className="font-bold text-left mr-3">関西全域に対応！</span>
            害虫・害獣駆除のことなら
            <br />
            <span className="font-bold text-red-500 md:text-lg lg:text-xl xl:text-3xl">
              ホームプロテクター
            </span>
            にお任せ下さい！
          </p>
        </div>
        <a href="tel:0668857656" className="hidden lg:flex mr-8">
          <div className="flex items-center shadow bg-yellow-300 rounded-md pr-3 pl-2 py-1">
            <img src="assets/phone.png" className="w-16" />
            <div className="flex flex-col">
              <p className="font-bold">お電話はこちら</p>
              <p className="text-2xl font-bold">06-6885-7656</p>
            </div>
          </div>
        </a>
        <div className="flex xs:w-24 lg:hidden">
          <a
            href="tel:0668857656"
            className="bg-yellow-300 bg-opacity-80 shadow rounded p-0.5 ml-3 mr-1"
          >
            <img src="assets/phone.png" className="w-12" />
          </a>
          <a href="https://lin.ee/mqP8zXC">
            <img src="assets/line.png" className="w-14 md:mr-3" />
          </a>
        </div>
      </div>
      <div className="bg-opacity-80 bg-black flex items-center justify-center h-9 xs:h-9 xs:flex-col md:h-11 lg:h-13">
        <p className="whitespace-nowrap font-bold text-white text-2xs md:text-xl">
          現地調査・見積り・キャンセル料
          <span className="text-yellow-400 ml-1 sm:text-xs md:text-2xl lg:ml-2">
            無料
          </span>
        </p>
        <p className="whitespace-nowrap font-bold text-white text-2xs ml-2 sm:ml-3 md:ml-3 md:text-xl lg:ml-8">
          今なら
          <span className="text-yellow-400 mx-0.5 sm:text-xs md:text-2xl">
            50%OFF
          </span>
          キャンペーン中！
        </p>
      </div>
    </div>
  );
};
