type Props = {
  fileName: string;
};

export const Crown = (props: Props) => {
  return (
    <img
      src={"/assets/crowns/" + props.fileName}
      className="w-28 lg:w-80 mt-minus-3 lg:mt-0"
    />
  );
};
