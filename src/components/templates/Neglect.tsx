import { NeglectItem } from "./NeglectItem";

export const Neglect = () => {
  return (
    <div className="flex flex-col items-center bg-gray-300 pt-5 pb-5 lg:pt-14 lg:pb-10">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-lg xs:text-sm xs:py-1 md:text-4xl md:px-4 lg:px-5 lg:text-5xl">
        害虫・害獣被害を放置するとどうなる？
      </div>
      <div className="w-screen">
        <div className="flex flex-col pt-2 md:pt-8 lg:pt-16 xl:px-8">
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="糞尿により天井や壁から悪臭がする"
              neglectFileName="neglect1.webp"
              commentFileName="comment1.webp"
            />
            <NeglectItem
              text="動物が出す騒音により眠れない"
              neglectFileName="neglect2.webp"
              commentFileName="comment2.webp"
            />
          </div>
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="ダニや寄生虫が大量発生する"
              neglectFileName="neglect3.webp"
              commentFileName="comment3.webp"
            />
            <NeglectItem
              text="お子様やペットに危害が及ぶ可能性がある"
              neglectFileName="neglect4.webp"
              commentFileName="comment4.webp"
            />
          </div>
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="アレルギーや感染症になるリスクがある"
              neglectFileName="neglect5.webp"
              commentFileName="comment5.webp"
            />
            <NeglectItem
              text="動物が天井で亡くなり腐敗する"
              neglectFileName="neglect6.webp"
              commentFileName="comment6.webp"
            />
          </div>
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="動物が子供を産んで住み着いてしまう"
              neglectFileName="neglect7.webp"
              commentFileName="comment7.webp"
            />
            <NeglectItem
              text="最悪の場合、不動産価値を落としてしまう"
              neglectFileName="neglect8.webp"
              commentFileName="comment8.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
