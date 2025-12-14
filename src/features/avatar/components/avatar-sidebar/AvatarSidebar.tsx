import type { FC } from "react";

import closeIcon from "@/assets/icons/close.svg";

import { SheetClose, SheetContent, SheetHeader } from "@/components/ui/sheet";

import type { AvatarSidebarProps } from "./models";
import { IdeaSection, BackgroundsSection } from "./components";

export const AvatarSidebar: FC<AvatarSidebarProps> = () => {
  return (
    <SheetContent side="right" className="w-[400px] max-w-full ps-5 pe-1 pt-8">
      <SheetHeader className="p-0 flex flex-row justify-between">
        <span className="font-bold text-[22px] leading-6.5">
          Change background
        </span>

        <SheetClose className="cursor-pointer pr-4" >
          <img src={closeIcon} alt="close" />
        </SheetClose>
      </SheetHeader>

      <div className="flex flex-col gap-10 overflow-y-scroll scroll-container">
        <IdeaSection />
        <BackgroundsSection />
      </div>
    </SheetContent>
  );
};
