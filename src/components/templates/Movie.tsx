import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const Movie = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-5 h-auto md:pt-10 lg:pt-14 bg-gray-300">
        <div className="flex justify-center p-2 font-bold bg-blue-300 text-xl xs:text-base xs:py-1 xs:px-2 md:text-4xl md:px-4 lg:px-5 lg:text-5xl">
          害獣被害を放置するとどうなる？
        </div>
      </div>
      <div className="px-9 pt-3 bg-gray-300 xs:px-4 xs:pt-2 md:px-14 md:pt-8 lg:px-32 xl:px-48">
        <LiteYouTubeEmbed
          id="V1OwLz300bs"
          title="【驚愕】害獣被害を放置するとどうなる？"
        />
      </div>
    </>
  );
};
