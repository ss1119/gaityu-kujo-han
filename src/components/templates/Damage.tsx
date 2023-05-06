export const Damage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 pt-5 pb-5 lg:pt-14 lg:pb-10">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-xl lg:px-5 lg:text-5xl">
        こんな<span className="text-red-600">被害</span>にお悩みはありませんか？
      </div>
      <div className="flex">
        <div className="flex flex-col pt-2 lg:pt-16 lg:mr-10">
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 lg:w-24 lg:ml-24" />
            <p className="font-bold lg:text-3xl">
              玄関や庭周りにハチがよく飛んでいる
            </p>
          </div>
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 lg:w-24 lg:ml-24" />
            <p className="font-bold lg:text-3xl">
              床下がシロアリに食われてフカフカする
            </p>
          </div>
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 lg:w-24 lg:ml-24" />
            <p className="font-bold lg:text-3xl">屋根裏から動物の足音がする</p>
          </div>
          <div className="flex items-center">
            <img src="assets/checkbox.png" className="w-14 lg:w-24 lg:ml-24" />
            <p className="font-bold lg:text-3xl">
              天井からシミや悪臭が出ている
            </p>
          </div>
          <div className="flex justify-center lg:hidden">
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
          <div className="mt-5 flex items-center lg:mt-0">
            <img src="assets/man.png" className="w-48 lg:ml-24 lg:w-96" />
            <img src="assets/cloud.svg" className="w-44 lg:w-96" />
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <div className="lg:w-72 lg:mt-10">
            <img
              src="assets/damages/damage1.png"
              className="border-4 border-white rounded-md"
            />
          </div>
          <div className="lg:w-72 lg:mt-6 lg:ml-24">
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
