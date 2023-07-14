import { DamageItem } from "./DamageItem";

export const Damage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-300 pt-5 pb-5 lg:pt-14 lg:pb-10">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-xl xs:text-sm xs:py-1 md:text-4xl md:px-4 lg:px-5 lg:text-5xl">
        こんな<span className="text-red-600">被害</span>にお悩みはありませんか？
      </div>
      <div className="w-screen">
        <div className="flex flex-col pt-2 md:pt-8 lg:pt-16 xl:px-10">
          <div className="xl:flex xl:pb-14">
            <DamageItem
              text="玄関や庭周りにハチがよく飛んでいる"
              fileName="damage1.webp"
            />
            <DamageItem
              text="床下がシロアリに食われてブカブカする"
              fileName="damage2.webp"
            />
          </div>
          <div className="xl:flex xl:pb-14">
            <DamageItem
              text="屋根裏から動物の足音がする"
              fileName="damage3.webp"
            />
            <DamageItem
              text="天井からシミや悪臭が出ている"
              fileName="damage4.webp"
            />
          </div>
          <div className="flex justify-center lg:mt-8">
            <img src="assets/man.webp" className="w-48 xs:w-36 md:w-96" />
            <img
              src="assets/cloud.svg"
              className="w-40 xs:w-32 sm:w-44 md:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
