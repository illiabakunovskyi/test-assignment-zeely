import { cn } from "@/lib/utils";
import type { FC, HTMLAttributes, ReactNode } from "react";
import { CircularProgress } from "./CircularProgress";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  loading?: boolean;
  loadingProgress?: number;
  active?: boolean;
};

export const Card: FC<CardProps> = ({
  children,
  className,
  loading,
  loadingProgress,
  active = false,
  ...rest
}) => {
  const renderLabel = (progress: number) => `${progress}%`;

  return (
    <div
      className={cn(
        className,
        "rounded-[16px] relative flex flex-col justify-center items-center overflow-hidden",
        { "hover:border-2  hover:border-black": !loading },
        { "bg-black py-4": loading },
        { "border-2 border-black": active },
      )}
      {...rest}
    >
      {loading ? (
        <>
          <CircularProgress
            value={loadingProgress ?? 0}
            showLabel
            renderLabel={renderLabel}
          />
          <div className="text-white absolute bottom-3 w-full text-center text-xs font-semibold">
            1 minute left
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
};
