import { Arrow } from "../parts/Arrow";
import { Flow } from "../parts/Flow";

export const RequestFlow = () => {
  return (
    <div className="flex flex-col items-center bg-gray-300 pb-7 md:pb-14 lg:pb-14">
      <div className="flex justify-center items-center p-2 mb-5 font-bold bg-yellow-300 text-xl xs:text-sm xs:py-1 xs:mb-3 md:text-4xl md:px-4 lg:px-5 lg:mb-10 lg:text-5xl">
        ご依頼〜駆除完了までの流れ
      </div>
      <div className="flex flex-col lg:hidden w-full px-3 md:pl-16 md:pr-16">
        <Flow
          fileName="step1.webp"
          text="ご相談：お電話・公式LINEでまずはお気軽にご相談下さい"
        />
        <Arrow />
        <Flow
          fileName="step2.webp"
          text="無料現地調査：ご依頼から最短10分で到着し、プロが隅々まで点検します"
        />
        <Arrow />
        <Flow
          fileName="step3.webp"
          text="お見積もり：不要な作業は一切ナシ、料金にご満足いただけない場合はその場でキャンセル可能です"
        />
        <Arrow />
        <Flow
          fileName="step4.webp"
          text="作業開始：徹底的な駆除・清掃・除菌・消臭作業を行います"
        />
        <Arrow />
        <Flow
          fileName="step5.webp"
          text="駆除完了：最長10年保証でずっと安心、保証期間中は何度でも無料で駆けつけます"
        />
      </div>
      <div className="hidden lg:flex flex-col">
        <div className="flex justify-center">
          <Flow
            fileName="step1.webp"
            text="ご相談：お電話・公式LINEでまずはお気軽にご相談下さい"
          />
          <Flow
            fileName="step2.webp"
            text="無料現地調査：ご依頼から最短10分で到着し、プロが隅々まで点検します"
          />
        </div>
        <div className="flex justify-center pt-8">
          <Flow
            fileName="step3.webp"
            text="お見積もり：不要な作業は一切ナシ、料金にご満足いただけない場合はその場でキャンセル可能です"
          />
          <Flow
            fileName="step4.webp"
            text="作業開始：徹底的な駆除・清掃・除菌・消臭作業を行います"
          />
        </div>
        <div className="flex justify-center pt-8">
          <Flow
            fileName="step5.webp"
            text="駆除完了：最長10年保証でずっと安心、保証期間中は何度でも無料で駆けつけます"
          />
        </div>
      </div>
    </div>
  );
};
