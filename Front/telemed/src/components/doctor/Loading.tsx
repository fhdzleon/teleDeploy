import { Skeleton } from "@/components/ui/skeleton";
export function Loading() {
  return (
    <div className="w-screen md:max-w-4xl max-w-[260px] flex flex-col pl-10">
      <div className="flex flex-col justify-center items-center gap-6 md:hidden">
        <Skeleton className="h-64 w-48" />
      </div>

      <div className="flex justify-center space-x-2 mt-4 md:hidden">
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      <div className="md:flex gap-6 mt-8 hidden">
        <div className="flex-col space-y-4">
          <Skeleton className="h-64 w-48" />
          <Skeleton className="h-6 w-48" />
        </div>

        <div className="md:flex flex-col space-y-4 hidden ">
          <div className="flex space-x-2">
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
          </div>
          <div className="flex space-x-2">
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
          </div>
          <div className="flex space-x-2">
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
            <Skeleton className="h-12 w-40"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
