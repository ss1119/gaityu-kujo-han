export const Explain = () => {
  return (
    <div className="flex flex-col items-center pt-3 md:pt-10 lg:pt-3 bg-gray-300">
      <div className="flex justify-center px-2 items-center">
        <img
          src="assets/home-protector.webp"
          alt="ホームプロテクターのアイコン"
          className="md:w-full lg:w-4/5 xl:w-full"
        />
      </div>
      <div className="hidden lg:flex items-center pt-6">
        <div className="px-5">
          <img
            src="assets/area.webp"
            alt="対応地域"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="px-5">
          <img
            src="assets/staff.webp"
            alt="スタッフについて"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex-col lg:hidden px-3 md:pt-4">
        <div className="mb-2 md:mb-6">
          <img
            src="assets/area.webp"
            alt="対応地域"
            className="w-full h-full rounded-lg"
          />
        </div>
        <img
          src="assets/staff.webp"
          alt="スタッフについて"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};
