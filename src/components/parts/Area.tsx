export const Area = () => {
  const title = "【活動地域について】";
  const discription = (
    <div>
      <p className="leading-relaxed lg:leading-loose">
        株式会社 Protect Good Lifeが運営するホームプロテクターは、
        関西地域を中心に害虫・害獣の駆除を行っている専門業者です。
      </p>
      <p className="leading-relaxed lg:leading-loose">
        弊社では、集客から駆除までの工程を全て自社で担当している為、他社よりも
        大変低価格で駆除のご依頼をお受けしております。
      </p>
    </div>
  );
  return (
    <>
      <div className="hidden lg:flex items-center">
        <div className="rounded-lg text-justify font-semibold text-2xl mx-10 p-12 area-bg">
          <span className="font-bold block text-4xl">{title}</span>
          <br />
          {discription}
        </div>
        <img src="assets/map.png" className="w-1/4 mr-14 block" />
      </div>
      <div className="flex items-center mt-3 lg:hidden">
        <div className="rounded-lg text-justify font-semibold p-4 area-bg">
          <span className="font-bold text-xl xs:text-lg md:text-3xl">
            {title}
          </span>
          <div className="mt-2">
            <img src="assets/map.png" className="w-5/12 float-right ml-2" />
            <div className="mr-3 xs:text-xs md:text-xl">{discription}</div>
          </div>
        </div>
      </div>
    </>
  );
};
