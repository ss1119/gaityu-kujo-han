export const Area = () => {
  return (
    <>
      <div className="hidden lg:flex items-center">
        <div className="mx-20 px-12 pt-5 pb-12">
          <img
            src="assets/area.webp"
            alt="area"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex lg:hidden">
        <img
          src="assets/area.webp"
          alt="area"
          className="w-full h-full rounded-lg"
        />
      </div>
    </>
  );
};
