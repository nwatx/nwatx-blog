import { useState } from "react";

type ProblemCardProps = {
  children: any;
  choices?: string[];
  answer?: string;
  explanation?: string;
};

export default function ProblemCard({
  children,
  choices,
  answer,
  explanation
}: ProblemCardProps) {
  const [open, setOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  return (
    <div className="border border-purple-200 dark:border-gray-700 bg-purple-50 dark:bg-gray-700 rounded p-6 my-4 w-full">
      <h3 className="dark:text-white font-semibold">{children}</h3>
      <ol className="mt-4 list-decimal" type="A">
        {choices && choices.map((choice) => (
          <li key={choice} className="flex font-medium items-center mb-2">
            <div onClick={() => {choice === userAnswer ? setUserAnswer("") : setUserAnswer(choice)}} className={`h-4 w-4 rounded-md border-2 cursor-pointer border-gray-600 dark:border-white ${choice === userAnswer && 'bg-gray-600 dark:bg-white'} mr-2`} />
            <p>{choice}</p>
          </li>
        ))}
      </ol>
      {
        answer && userAnswer.length > 0 && ((userAnswer === answer) ? <p>Correct!</p> : <p>Wrong answer</p>)
      }
      { explanation && <div className='w-full cursor-pointer text-left' onClick={() => setOpen(!open)}>
        {open ? <p>{!choices && answer}; {explanation}</p> : <p>Show explanation</p>}
      </div> }
    </div>
  );
}
