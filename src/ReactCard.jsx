import { PlusCircle } from "lucide-react";
import { Button, buttonVariants } from "./Button";
import { ReactSvg } from "./ReactSvg";
import { BookOpenText } from "lucide-react";
import Link from "next/link";

export const ReactCard = ({ card, hideCategory }) => {
  console.log({ hideCategory });

  return (
    <div className="flex items-center flex-col justify-center gap-4 border border-solid shadow rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-200 ">
      <div className="flex items-center w-full gap-2">
        <ReactSvg size={24}></ReactSvg>
        <p className="text-base font-bold">React</p>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold  ">
        {card.name}
      </p>
      <div className="flex w-full items-center gap-2 ">
        {hideCategory ? null : (
          <p className="line-clamp-1 text-start text-xs text-gray-400">{card.category}</p>
        )}
        <Link
          href={card.url}
          className={buttonVariants({
            variant: "secondary",
            className: "ml-auto",
          })}
        >
          <BookOpenText size={16} />
        </Link>

        <Button variant="secondary">
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
