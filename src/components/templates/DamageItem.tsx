import { CheckBox } from "../parts/CheckBox";

type Props = {
  text: string;
  fileName: string;
};

export const DamageItem = (props: Props) => {
  return (
    <div className="flex-col pb-8 md:pb-12 xl:pb-0 xl:w-1/2">
      <CheckBox text={props.text} />
      <div className="flex justify-center pt-3">
        <img
          src={"assets/damages/" + props.fileName}
          alt={props.text}
          className="w-52 border-4 border-white rounded-md md:w-96"
        />
      </div>
    </div>
  );
};
