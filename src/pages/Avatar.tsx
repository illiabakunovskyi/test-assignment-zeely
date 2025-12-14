import { Button, SheetTrigger } from "@/components";

import { AvatarSidebar } from "@/features";

export const Avatar = () => (
  <div>
    <AvatarSidebar />

    <SheetTrigger asChild>
      <Button>
        open avatar sidebar
      </Button>
    </SheetTrigger>
  </div>
);
