import { cn } from "@/lib/utils";
import { WecliMark } from "@/components/weclihub/wecli-mark";

export function WecliHubLogo({
  className,
  iconClassName,
  showText = true,
  textClassName
}: {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-2xl font-bold", className)}>
      <WecliMark className={cn("h-9 w-9", iconClassName)} />
      {showText ? (
        <span
          className={cn(
            "weclihub-logo-text",
            textClassName
          )}
        >
          WeCliHub
        </span>
      ) : null}
    </span>
  );
}
