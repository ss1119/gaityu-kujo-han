import { CheckBox } from "../parts/CheckBox";

export const Neglect = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 pt-5 pb-5 lg:pt-14 lg:pb-10">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-lg xs:text-sm xs:py-1 md:text-4xl md:px-4 lg:px-5 lg:text-5xl">
        害虫・害獣被害を放置するとどうなる？
      </div>
      <div className="flex">
        <div className="flex flex-col pt-2 md:pt-8 lg:pt-16 lg:mr-10">
          <CheckBox text="糞尿により天井や壁から悪臭がする" />
          <CheckBox text="動物が出す騒音により眠れない" />
          <CheckBox text="ダニや寄生虫が大量発生する" />
          <CheckBox text="お子様やペットに危害が及ぶ可能性がある" />
          <CheckBox text="アレルギーや感染症になるリスクがある" />
          <CheckBox text="動物が天井で亡くなり腐敗する" />
          <CheckBox text="動物が子供を産んで住み着いてしまう" />
          <CheckBox text="最悪の場合、不動産価値を落としてしまう" />
          <div className="flex justify-center md:hidden">
            <div className="w-40 mt-5 mr-5 xs:w-28">
              <img
                src="assets/neglects/neglect1.png"
                className="border-2 border-white rounded-md"
              />
            </div>
            <div className="w-40 mt-5 xs:w-28">
              <img
                src="assets/neglects/neglect2.png"
                className="border-2 border-white rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col">
          <div className="w-56 mt-8 ml-7 xl:w-72 xl:mt-20">
            <img
              src="assets/neglects/neglect1.png"
              className="border-4 border-white rounded-md"
            />
          </div>
          <div className="w-56 mt-5 ml-7 xl:w-72 xl:mt-14">
            <img
              src="assets/neglects/neglect2.png"
              className="border-4 border-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
