import { AvatarCard } from "./components";

import avatar from "@/assets/images/model.png";
import card1 from "@/assets/images/card-1.png";
import background2 from "@/assets/images/background-2.png";
import background3 from "@/assets/images/background-3.png";
import background4 from "@/assets/images/background-4.png";
import background5 from "@/assets/images/background-5.png";

export const BackgroundsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-sm leading-[120%] text-black">
        Your backgrounds
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-auto">
        <AvatarCard loading />
        <AvatarCard
          backgroundImageUrl={card1}
          loading={false}
          isDefault
          active
        />
        <AvatarCard
          avatarImageUrl={avatar}
          backgroundImageUrl={background2}
        />
        <AvatarCard
          avatarImageUrl={avatar}
          backgroundImageUrl={background3}
        />
        <AvatarCard
          avatarImageUrl={avatar}
          backgroundImageUrl={background4}
        />
        <AvatarCard
          avatarImageUrl={avatar}
          backgroundImageUrl={background5}
        />
      </div>
    </div>
  );
};
