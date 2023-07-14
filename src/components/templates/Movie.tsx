export const Movie = () => {
  return (
    <div className="flex flex-col items-center pt-5 h-auto md:pt-10 lg:pt-14 bg-gray-300">
      <div className="flex justify-center items-center p-2 font-bold bg-blue-300 text-xl xs:text-base xs:py-1 xs:px-2 md:text-4xl md:px-4 lg:px-5 lg:text-5xl">
        害獣被害を放置するとどうなる？
      </div>
      <iframe
        className="youtube mt-5 lg:mt-10"
        loading="lazy"
        src="https://www.youtube.com/embed/V1OwLz300bs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
