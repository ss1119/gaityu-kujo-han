type Props = {
  fileName: string;
  text: string;
};

export const Question = (porps: Props) => {
  return (
    <img
      src={"assets/questions/" + porps.fileName}
      alt={porps.text}
      className="mx-4 mb-3 md:mb-10 lg:mb-5 lg:w-2/5 xl:w-1/2"
    />
  );
};
