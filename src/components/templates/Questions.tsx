import { Question } from "../parts/Question";

export const Questions = () => {
  return (
    <div className="bg-gray-300 pt-8 md:pt-16 lg:pt-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col lg:hidden w-full px-3 md:pl-16 md:pr-16">
          <Question
            fileName="question1.webp"
            text="料金の内訳は事前に知ることができますか？"
          />
          <Question
            fileName="question2.webp"
            text="事故が起きた時、損害賠償していただけますか？"
          />
          <Question
            fileName="question3.webp"
            text="使う薬剤は市販のものですか？"
          />
          <Question
            fileName="question4.webp"
            text="再発した場合は保証していただけますか？"
          />
          <Question
            fileName="question5.webp"
            text="料金の後払いは可能ですか？"
          />
        </div>
        <div className="hidden lg:flex flex-col">
          <div className="flex justify-center">
            <Question
              fileName="question1.webp"
              text="料金の内訳は事前に知ることができますか？"
            />
            <Question
              fileName="question2.webp"
              text="事故が起きた時、損害賠償していただけますか？"
            />
          </div>
          <div className="flex justify-center pt-2">
            <Question
              fileName="question3.webp"
              text="使う薬剤は市販のものですか？"
            />
            <Question
              fileName="question4.webp"
              text="再発した場合は保証していただけますか？"
            />
          </div>
          <div className="flex justify-center pt-2">
            <Question
              fileName="question5.webp"
              text="料金の後払いは可能ですか？"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
