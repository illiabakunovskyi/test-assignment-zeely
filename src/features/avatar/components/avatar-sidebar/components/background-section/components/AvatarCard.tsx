import type { FC } from "react";

import { Card, type CardProps, Label } from "@/components";

type AvatarCardProps = CardProps & {
  loading?: boolean;
  backgroundImageUrl?: string;
  avatarImageUrl?: string;
  active?: boolean;
  isDefault?: boolean;
};

export const AvatarCard: FC<AvatarCardProps> = ({ loading = false, backgroundImageUrl, avatarImageUrl, active = false, isDefault = false,  ...rest }) => {
  return (
    <>
      {loading ? (
        <Card
          className="h-48 w-28"
          loading={loading}
          loadingProgress={loading ? 25 : 0}
          {...rest}
        />
      ) : (
        <Card
          className="h-48 w-28 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          active={active}
          {...rest}
        >
          {isDefault ? <Label text='DEFAULT' classNames='absolute top-[5px] left-[5px]' /> : null}
          {avatarImageUrl && <img src={avatarImageUrl} alt='avatar' />}
        </Card>
      )}
    </>
  );
};
