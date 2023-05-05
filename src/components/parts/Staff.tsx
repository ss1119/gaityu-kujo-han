export const Staff = () => {
  const title = "【スタッフについて】";
  const discription = (
    <div>
      ホームプロテクターには駆除経験豊富なプロスタッフが多数在籍しております。
      <br />
      目に見える被害を改善するだけでは無く、もう害虫・害獣の被害に悩まない新たな生活作りを徹底的にサポートさせて頂きます。
    </div>
  );
  return (
    <>
      <div className="hidden md:flex items-center mt-10">
        <img src="assets/icon.png" className="w-1/4 ml-14" />
        <div className="rounded-lg bg-white text-justify font-semibold text-2xl mx-10 p-12">
          <span className="font-bold block text-4xl">{title}</span>
          <br />
          {discription}
        </div>
      </div>
      <div className="flex items-center mt-3 md:hidden">
        <div className="rounded-lg bg-white text-justify font-semibold p-4">
          <span className="font-bold text-xl">{title}</span>
          <div className="mt-2">
            <img src="assets/icon.png" className="w-1/3 float-right ml-3" />
            <div className="mr-3">{discription}</div>
          </div>
        </div>
      </div>
    </>
  );
};
