import { Skeleton } from "@/components/ui/skeleton";
export function Loading() {
  return (
    <div className="w-screen md:max-w-4xl max-w-[260px] flex flex-col">
      <div className="flex flex-col justify-center items-center gap-6 md:hidden">
        <Skeleton className="h-48 w-48 rounded-full" />
      </div>

      <div className="flex justify-center space-x-4 mt-4 ">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>

      <div className="md:flex flex-col gap-6 mt-8 hidden">
        <Skeleton className="h-48 w-48 rounded-full" />
        <Skeleton className="h-6 w-48" />
      </div>

      <div className="flex space-x-4 mt-8 md:justify-end justify-center">
        <Skeleton className="h-10 w-20 rounded-full" />
        <Skeleton className="h-10 w-20 rounded-full" />
      </div>
    </div>
  );
}
