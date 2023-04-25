export const Damage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 pt-5 pb-5 md:pt-14 md:pb-10">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-xl md:px-5 md:text-5xl">
        こんな<span className="text-red-600">被害</span>にお悩みはありませんか？
      </div>
      <div className="flex">
        <div className="flex flex-col pt-2 md:pt-16 md:mr-10">
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 md:w-24 md:ml-24" />
            <p className="font-bold md:text-3xl">
              玄関や庭周りにハチがよく飛んでいる
            </p>
          </div>
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 md:w-24 md:ml-24" />
            <p className="font-bold md:text-3xl">
              床下がシロアリに食われてフカフカする
            </p>
          </div>
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 md:w-24 md:ml-24" />
            <p className="font-bold md:text-3xl">屋根裏から動物の足音がする</p>
          </div>
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 md:w-24 md:ml-24" />
            <p className="font-bold md:text-3xl">
              天井からシミや悪臭が出ている
            </p>
          </div>
          <div className="flex justify-center md:hidden">
            <div className="w-40 mt-5 mr-5">
              <img
                src="assets/damages/damage1.png"
                className="border-2 border-white rounded-md"
              />
            </div>
            <div className="w-40 mt-5">
              <img
                src="assets/damages/damage2.png"
                className="border-2 border-white rounded-md"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center md:mt-0">
            <img src="assets/man.png" className="w-48 md:ml-24 md:w-96" />
            <img src="assets/cloud.svg" className="w-44 md:w-96" />
          </div>
        </div>
        <div className="hidden md:flex md:flex-col">
          <div className="md:w-72 md:mt-10">
            <img
              src="assets/damages/damage1.png"
              className="border-4 border-white rounded-md"
            />
          </div>
          <div className="md:w-72 md:mt-6 md:ml-24">
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
