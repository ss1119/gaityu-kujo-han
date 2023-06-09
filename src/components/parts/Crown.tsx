type Props = {
  fileName: string;
};

export const Crown = (props: Props) => {
  return (
    <img
      src={"/assets/crowns/" + props.fileName}
      className="w-22 mt-minus-3 sm:w-28 md:w-56 lg:w-56 lg:mt-0 xl:w-80 xl:mt-0"
    />
  );
};
