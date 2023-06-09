type Props = {
  text: string;
};

export const CheckBox = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <img src="assets/checkbox.png" className="w-12 xs:w-8 md:w-16 xl:w-24" />
      <p className="font-bold xs:text-xs md:text-3xl">{props.text}</p>
    </div>
  );
};
