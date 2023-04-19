export const Header = () => {
  return (
    <div className="flex flex-col md:pt-0 pt-3 md:flex-row md:justify-between h-24 bg-blue-300">
      <div className="flex items-center">
        <p className="pl-4 font-bold md:text-2xl text-left">
          害虫・害獣駆除業者
        </p>
        <p className="pl-4 font-bold md:text-5xl text-3xl text-left">
          害虫駆除班
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col">
          <p className="pl-4 pt-1 md:pt-0 md:text-xl font-bold text-xs text-left">
            関西全域に対応
          </p>
          <p className="pl-4 pr-4 md:text-xl font-bold text-xs text-left">
            害虫・害獣駆除のことなら
            <span className="px-1 md:text-3xl font-bold text-base text-red-500">
              害虫駆除班
            </span>
            にお任せ下さい！
          </p>
        </div>
      </div>
    </div>
  );
};
