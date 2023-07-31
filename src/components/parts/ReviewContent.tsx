type Props = {
  fileName: string;
  text: string;
};

export const ReviewContent = (porps: Props) => {
  return (
    <img
      src={"assets/reviews/" + porps.fileName}
      alt={porps.text}
      className="mx-4 mb-3 lg:w-2/5 xl:w-1/2"
    />
  );
};
