export const Damage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 pt-5 pb-5 lg:pt-14 lg:pb-10">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-xl xs:text-sm xs:py-1 md:text-4xl md:px-4 lg:px-5 lg:text-5xl">
        こんな<span className="text-red-600">被害</span>にお悩みはありませんか？
      </div>
      <div className="flex">
        <div className="flex flex-col pt-2 md:pt-7 lg:pt-16 lg:mr-10">
          <div className="flex items-center">
            <img
              src="assets/checkbox.png"
              className="w-14 xs:w-8 md:w-16 md:ml-10 xl:w-24 xl:ml-24"
            />
            <p className="font-bold xs:text-xs md:text-xl lg:text-2xl xl:text-3xl">
              玄関や庭周りにハチがよく飛んでいる
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="assets/checkbox.png"
              className="w-14 xs:w-8 md:w-16 md:ml-10 xl:w-24 xl:ml-24"
            />
            <p className="font-bold xs:text-xs md:text-xl lg:text-2xl xl:text-3xl">
              床下がシロアリに食われてフカフカする
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="assets/checkbox.png"
              className="w-14 xs:w-8 md:w-16 md:ml-10 xl:w-24 xl:ml-24"
            />
            <p className="font-bold xs:text-xs md:text-xl lg:text-2xl xl:text-3xl">
              屋根裏から動物の足音がする
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="assets/checkbox.png"
              className="w-14 xs:w-8 md:w-16 md:ml-10 xl:w-24 xl:ml-24"
            />
            <p className="font-bold xs:text-xs md:text-xl lg:text-2xl xl:text-3xl">
              天井からシミや悪臭が出ている
            </p>
          </div>
          <div className="flex justify-center md:hidden">
            <div className="w-40 mt-5 mr-5 xs:w-28">
              <img
                src="assets/damages/damage1.png"
                className="border-2 border-white rounded-md"
              />
            </div>
            <div className="w-40 mt-5 xs:w-28">
              <img
                src="assets/damages/damage2.png"
                className="border-2 border-white rounded-md"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center lg:mt-0">
            <img
              src="assets/man.png"
              className="w-48 xs:w-32 md:w-64 xl:ml-24 xl:w-96"
            />
            <img
              src="assets/cloud.svg"
              className="w-40 xs:w-32 sm:w-44 md:w-64 xl:w-96"
            />
          </div>
        </div>
        <div className="hidden md:flex md:flex-col">
          <div className="w-60 mt-7 xl:w-72 xl:mt-10">
            <img
              src="assets/damages/damage1.png"
              className="border-4 border-white rounded-md"
            />
          </div>
          <div className="w-60 mt-4 ml-14 xl:w-72 xl:mt-6 xl:ml-10">
            <img
              src="assets/damages/damage2.png"
              className="border-4 border-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
