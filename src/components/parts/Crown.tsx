type Props = {
  fileName: string;
};

export const Crown = (props: Props) => {
  return (
    <img
      src={"/assets/crowns/" + props.fileName}
      className="w-28 md:w-80 mt-minus-3 md:mt-0"
    />
  );
};
