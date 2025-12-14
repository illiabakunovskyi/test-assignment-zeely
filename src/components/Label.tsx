import type { FC } from "react";

import { cn } from "@/lib/utils";

type LabelProps = {
  text: string;
  classNames?: string;
};

export const Label: FC<LabelProps> = ({ text, classNames }) => {
  return (
    <div className={cn("bg-white px-1 py-1.5 border border-[#BFBDB4] text-[#404040] text-[10px]/[7px] font-bold rounded-[5px]", classNames)}>
      {text}
    </div>
  );
};
