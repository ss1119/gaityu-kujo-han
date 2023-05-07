type Props = {
  title: string;
  text: string;
};

export const Flow = (porps: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center font-bold border-l-8 border-sky-600 text-xl pl-2 lg:text-4xl lg:h-12 lg:pl-4 xl:text-5xl xl:h-16 xl:pl-5">
        {porps.title}
      </div>
      <div className="font-bold text-sm w-3/5 maker p-1 md:text-base lg:text-lg lg:p-3 xl:text-xl">
        {porps.text}
      </div>
    </div>
  );
};
