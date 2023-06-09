import { Flow } from "../parts/Flow";
import { Wave } from "../parts/Wave";

export const RequestFlow = () => {
  return (
    <div className="flex flex-col items-center request-flow-bg pt-5 pb-7 md:pb-14 lg:pt-14 lg:pb-14">
      <div className="flex justify-center items-center p-2 mb-5 font-bold bg-yellow-300 text-xl xs:text-sm xs:py-1 md:text-4xl md:px-4 lg:px-5 lg:mb-10 lg:text-5xl">
        ご依頼〜駆除完了までの流れ
      </div>
      <div className="flex flex-col w-full px-3 md:pl-16 md:pr-16 lg:pl-28 lg:pr-20 xl:pl-64 xl:pr-36">
        <Flow title="ご依頼" text="お電話・LINEにてご依頼受付中です。" />
        <Wave />
        <Flow
          title="無料現地調査"
          text="最短１０分で駆けつけます。見積りをご提示させていただいた後、料金にご納得いただけましたら駆除を開始させていただきます。"
        />
        <Wave />
        <Flow
          title="見積り"
          text="見積り金額にご満足頂けない場合はキャンセル可能。出張料・見積り料・キャンセル料は一切発生しないため、お気軽にご依頼ください。"
        />
        <Wave />
        <Flow
          title="駆除開始"
          text="害虫・害獣の駆除はもちろんのこと、徹底的な除菌・清掃作業、再発防止のための原因探しを御約束致します。"
        />
        <Wave />
        <Flow
          title="駆除完了"
          text="被害箇所のビフォーアフターをご覧いただき、駆除後の状況をご説明させていただきます。"
        />
      </div>
    </div>
  );
};
