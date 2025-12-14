import { useCallback, useState, type ChangeEvent } from "react";

import aiIcon from "@/assets/icons/ai.svg";
import aiIcon2 from "@/assets/icons/ai-2.svg";
import actionPrev from "@/assets/icons/action-prev.svg";
import actionNext from "@/assets/icons/action-next.svg";

import { Button } from "@/components";

export const IdeaSection = () => {
  const [text, setText] = useState(
    "Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.",
  );

  const onBlur = useCallback((event: ChangeEvent<HTMLDivElement>) => {
    setText(event.target.innerText);
  }, []);

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-sm leading-[120%] text-black">
        Background idea
      </h3>

      <div className="p-2 pt-4 border border-[#F2F4F6] rounded-[12px] mt-3">
        <div
          contentEditable
          className="outline-0 font-medium text-md text-black px-2 h-[116px] overflow-y-scroll font-primary"
          onBlur={onBlur}
        >
          {text}
        </div>

        <div className="flex justify-between mt-5">
          <Button variant="ghost" className="p-2 gap-1">
            <img src={aiIcon} alt="AI icon" />
            Regenerate
          </Button>

          <div>
            <Button variant="ghost" className="p-2">
              <img src={actionPrev} alt="AI icon" />
            </Button>

            <Button variant='ghost' className="p-2">
              <img src={actionNext} alt="AI icon" />
            </Button>
          </div>
        </div>
      </div>

      <Button className="rounded-full py-4 text-sm leading-4 h-auto mt-6">
        <img src={aiIcon2} alt="AI icon" />
        Generate BG for 1 credit
      </Button>
    </div>
  );
};
