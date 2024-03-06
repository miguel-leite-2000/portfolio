import { Separator } from "@/components/ui/separator";

export function Divisor() {
  return (
    <div className="container">
      <div className="w-[65%] flex flex-col gap-3">
        <Separator className="h-1 bg-green-600" />
        <Separator className="w-[50%] h-1 bg-green-800" />
      </div>
    </div>
  );
}
