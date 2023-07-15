export const Area = () => {
  return (
    <>
      <div className="hidden lg:flex items-center">
        <div className="rounded-lg text-justify font-semibold text-2xl mx-20 px-12 pt-5 pb-12 area-bg">
          <img src="assets/area.webp" alt="area" className="rounded-lg" />
        </div>
      </div>
      <div className="flex lg:hidden w-full">
        <img src="assets/area.webp" alt="area" className="rounded-lg" />
      </div>
    </>
  );
};
