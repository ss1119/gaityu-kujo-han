type Props = {
  fileName: string;
};

export const Crown = (props: Props) => {
  return (
    <img
      src={"/assets/crowns/" + props.fileName}
      className="w-28 mt-minus-3 md:w-56 lg:w-80 lg:mt-0"
    />
  );
};
