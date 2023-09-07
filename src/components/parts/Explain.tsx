export const Explain = () => {
  return (
    <div className="flex flex-col items-center bg-white md:pb-5 lg:pb-10">
      <div className="flex justify-center px-2 items-center">
        <img
          src="assets/home-protector.webp"
          alt="ホームプロテクターのアイコン"
          className="w-full lg:w-4/5 xl:w-full"
          width={500}
          height={239}
        />
      </div>
      <div className="flex-col lg:hidden md:pt-4">
        <img
          src="assets/area.webp"
          alt="対応地域"
          className="w-full h-auto md:mb-5 md:rounded-lg"
          width={667}
          height={393}
        />
        <img
          src="assets/staff.webp"
          alt="スタッフについて"
          className="w-full h-auto md:rounded-lg"
          width={599}
          height={397}
        />
      </div>
      <div className="hidden lg:flex items-center pt-6">
        <div className="px-5">
          <img
            src="assets/area.webp"
            alt="対応地域"
            className="w-full h-full rounded-lg"
            width={667}
            height={393}
          />
        </div>
        <div className="px-5">
          <img
            src="assets/staff.webp"
            alt="スタッフについて"
            className="w-full h-full rounded-lg"
            width={599}
            height={397}
          />
        </div>
      </div>
    </div>
  );
};
