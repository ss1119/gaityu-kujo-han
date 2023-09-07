import { Call } from "./Call";

export const Pages = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page1.webp"
          className="w-full lg:w-1/2"
          width={600}
          height={1245}
          alt="害虫の駆除は専門家にお任せください。アシナガバチ、オオスズメバチ、ゴキブリ、トコジラミなどの害虫に対応しております。当日契約で駆除料金50%OFF"
        />
      </div>
      <Call />
      <div className="flex justify-center">
        <img
          src="assets/pages/page2.webp"
          className="w-full lg:w-1/2"
          width={600}
          height={1236}
          alt="他社との大きな違いはビジネスモデルです。仲介業者を挟まないため仲介手数料が発生せず、より安い料金で駆除を承ることができます。"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page3.webp"
          className="w-full lg:w-1/2"
          width={600}
          height={1209}
          alt="悪徳駆除業社にご注意ください。"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page4.webp"
          className="w-full lg:w-1/2"
          width={600}
          height={1191}
          alt="ホームプロテクターなら、お見積り料金にご満足いただいた後に作業を開始させていただきます。また、再発駆除のご連絡にも迅速に対応させていただきます。"
        />
      </div>
    </div>
  );
};
