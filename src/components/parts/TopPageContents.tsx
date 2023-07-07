export const TopPageContents = () => {
  return (
    <div className="relative bg-gray-200">
      <div className="flex justify-center">
        <img src="/assets/animals/animals-small.jpg" className="lg:hidden" />
        <img
          src="/assets/animals/animals-big.jpg"
          className="hidden lg:block w-11/12"
        />
      </div>
      <div className="flex justify-center">
        <img src="assets/stars.jpg" className="lg:w-3/4 lg:rounded-xl" />
      </div>
      <div className="lg:hidden">
        <div className="flex justify-center items-center">
          <div>
            <img src="/assets/campaign.jpg" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <img src="assets/explain.jpg" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center mt-3 px-10">
        <div className="w-3/5 pr-5">
          <img src="/assets/campaign.jpg" className="rounded-xl" />
        </div>
        <div className="w-3/5">
          <img src="assets/explain.jpg" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};
