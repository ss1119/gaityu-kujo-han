import { CheckBox } from "../parts/CheckBox";

type Props = {
  text: string;
  neglectFileName: string;
  commentFileName: string;
};

export const NeglectItem = (props: Props) => {
  return (
    <div className="flex-col pb-8 xs:pb-0 md:pb-12 xl:pb-0 xl:w-1/2">
      <CheckBox text={props.text} />
      <div className="relative pt-3 ml-16 h-44 xs:h-36 xs:ml-9 md:h-72 md:ml-44 xl:ml-32 xl:h-80">
        <img
          src={"assets/neglects/" + props.neglectFileName}
          alt="neglect"
          className="absolute w-56 border-4 border-white rounded-md xs:w-44 md:w-96"
        />
        <img
          src={"assets/comments/" + props.commentFileName}
          alt="comment"
          className="absolute w-32 top-8 left-40 xs:w-28 xs:left-32 sm:w-36 sm:top-5 md:w-64 md:left-72 xl:w-60 xl:top-16 xl:left-1/2"
        />
      </div>
    </div>
  );
};
