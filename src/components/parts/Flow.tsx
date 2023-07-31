type Props = {
  fileName: string;
  text: string;
};

export const Flow = (porps: Props) => {
  return (
    <img
      src={"assets/requestFlow/" + porps.fileName}
      alt={porps.text}
      className="mx-4 lg:w-2/5 xl:w-1/2"
    />
  );
};
