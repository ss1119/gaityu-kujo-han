export const Staff = () => {
  const title = "【スタッフについて】";
  const discription = (
    <div>
      <p className="leading-relaxed lg:leading-loose">
        ホームプロテクターには駆除経験豊富なプロスタッフが多数在籍しております。
      </p>
      <p className="leading-relaxed lg:leading-loose">
        目に見える被害を改善するだけでは無く、もう害虫・害獣の被害に悩まない新たな生活作りを徹底的にサポートさせて頂きます。
      </p>
    </div>
  );
  return (
    <>
      <div className="hidden lg:flex items-center mt-10">
        <img src="assets/icon.png" className="w-1/4 ml-14" />
        <div className="rounded-lg bg-white text-justify font-semibold text-2xl mx-10 p-12 staff-bg">
          <span className="font-bold block text-4xl">{title}</span>
          <br />
          {discription}
        </div>
      </div>
      <div className="flex items-center mt-3 lg:hidden">
        <div className="rounded-lg text-justify font-semibold p-4 staff-bg">
          <span className="font-bold text-xl xs:text-lg md:text-3xl">
            {title}
          </span>
          <div className="mt-2">
            <img src="assets/icon.png" className="w-1/3 float-right ml-3" />
            <div className="mr-3 xs:text-xs md:text-xl">{discription}</div>
          </div>
        </div>
      </div>
    </>
  );
};
