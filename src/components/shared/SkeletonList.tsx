import { Skeleton } from "#components/ui/skeleton"

export const SkeletonList = ({
  listNumber,
  lineHeight,
}: { listNumber: number; lineHeight?: string }) => {
  const skeletonsNumber = Array.from({ length: listNumber })
  console.log(lineHeight)
  return (
    <div className="flex flex-col gap-4">
      {skeletonsNumber.map((_, index) => (
        <Skeleton
          className={`w-full ${lineHeight ? lineHeight : "h-[40px]"} rounded`}
          key={`skeleton-${`${index}`}`}
        />
      ))}
    </div>
  )
}
