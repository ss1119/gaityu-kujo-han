export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-opacity-90 flex items-center justify-end py-4 h-16 pr-1 bg-gray-400 md:h-20 md:flex-row md:justify-between md:py-2 md:pr-0">
        <div className="flex items-center">
          <img
            src="assets/icon.png"
            className="w-14 mx-2 md:w-20 md:ml-10 md:mr-3"
          />
          <div className="flex flex-col items-center">
            <p className="font-bold inline-block border-double text-lg md:text-4xl">
              ホームプロテクター
            </p>
            <p className="font-bold text-left md:text-2xl md:mt-1">
              害虫・害獣駆除
            </p>
          </div>
        </div>
        <div className="hidden items-center md:flex">
          <p className="pl-4 pr-4 text-xl font-bold text-left">
            <span className="text-xl font-bold text-left mr-3">
              関西全域に対応！
            </span>
            害虫・害獣駆除のことなら
            <br />
            <span className="text-3xl font-bold text-red-500">
              ホームプロテクター
            </span>
            にお任せ下さい！
          </p>
        </div>
        <div className="hidden md:flex items-center shadow bg-yellow-300 rounded-md pr-3 pl-2 py-1 mr-10">
          <img src="assets/phone.png" className="w-16" />
          <div className="flex flex-col">
            <p className="font-bold">お電話はこちら</p>
            <p className="text-2xl font-bold">06-6885-7656</p>
          </div>
        </div>
        <a
          href="tel:0668857656"
          className="md:hidden bg-yellow-300 bg-opacity-80 shadow rounded p-0.5 ml-3 mr-1"
        >
          <img src="assets/phone.png" className="w-12" />
        </a>
        <a href="https://lin.ee/mqP8zXC">
          <img src="assets/line.png" className="md:hidden w-14" />
        </a>
      </div>
      <div className="bg-opacity-80 bg-black flex flex-co items-center justify-center h-6 md:flex-row md:h-9">
        <p className="whitespace-nowrap font-bold text-white text-2xs md:text-xl">
          現地調査・見積り・キャンセル料
          <span className="text-yellow-400 ml-1 md:ml-2">無料</span>
        </p>
        <p className="whitespace-nowrap font-bold text-white text-2xs ml-3 md:ml-8 md:text-xl">
          今なら
          <span className="text-yellow-400 text-xs mx-1 md:text-2xl">
            50%OFF
          </span>
          キャンペーン中！
        </p>
      </div>
    </div>
  );
};
