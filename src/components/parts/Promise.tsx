export const Promises = () => {
  const title = "【ホームプロテクターのお約束】";
  const discription = (
    <div>
      <p className="leading-relaxed md:leading-loose">
        ホームプロテクターは、徹底的な衛生の管理や対策をお約束致します。
      </p>
      <p className="leading-relaxed md:leading-loose">
        害虫・害獣は、数多くの危険な細菌やウイルスを持っており、体にはダニやノミが付着しております。これらをご家庭にある道具で完璧に除去する事は困難ですが、ホームプロテクターでは消毒用の薬剤をミスト状に放出する為の噴霧器や、空間全体をクリーンにする為に使用する発煙機などの高額な専門器具を多数導入しております。
      </p>
      <p className="leading-relaxed md:leading-loose">
        『せっかく専門業者に依頼するなら徹底的にやって欲しい』そんなお客様のニーズにお答えするのが弊社のホームプロテクターです。
      </p>
    </div>
  );
  return (
    <>
      <div className="hidden md:flex items-center mt-20">
        <div className="rounded-lg text-justify font-semibold text-2xl mx-32 p-12 pb-24 promise-bg">
          <span className="font-bold block text-4xl">{title}</span>
          <br />
          {discription}
        </div>
      </div>
      <div className="flex items-center mt-3 md:hidden">
        <div className="rounded-lg text-justify font-semibold p-4 promise-bg">
          <span className="font-bold text-xl">{title}</span>
          <div className="mt-2">{discription}</div>
        </div>
      </div>
    </>
  );
};
