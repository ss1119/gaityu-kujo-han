type Props = {
  title: string;
  text: string;
};

export const Flow = (porps: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center font-bold border-l-8 border-sky-600 md:text-5xl md:h-16 md:pl-5">
        {porps.title}
      </div>
      <div className="font-bold text-xl maker md:w-3/5 md:p-3">
        {porps.text}
      </div>
    </div>
  );
};
