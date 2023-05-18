import { NeglectItem } from "./NeglectItem";

export const Neglect = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 pt-5 pb-5 lg:pt-14 lg:pb-10">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-lg xs:text-sm xs:py-1 md:text-4xl md:px-4 lg:px-5 lg:text-5xl">
        害虫・害獣被害を放置するとどうなる？
      </div>
      <div className="w-screen">
        <div className="flex flex-col pt-2 md:pt-8 lg:pt-16 xl:px-8">
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="糞尿により天井や壁から悪臭がする"
              fileName="neglect1.png"
            />
            <NeglectItem
              text="動物が出す騒音により眠れない"
              fileName="neglect2.png"
            />
          </div>
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="ダニや寄生虫が大量発生する"
              fileName="neglect3.png"
            />
            <NeglectItem
              text="お子様やペットに危害が及ぶ可能性がある"
              fileName="neglect4.png"
            />
          </div>
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="アレルギーや感染症になるリスクがある"
              fileName="neglect5.png"
            />
            <NeglectItem
              text="動物が天井で亡くなり腐敗する"
              fileName="neglect6.png"
            />
          </div>
          <div className="xl:flex xl:pb-14">
            <NeglectItem
              text="動物が子供を産んで住み着いてしまう"
              fileName="neglect7.png"
            />
            <NeglectItem
              text="最悪の場合、不動産価値を落としてしまう"
              fileName="neglect8.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
