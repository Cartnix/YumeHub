import type { OverviewProps } from "../model/OverviewI"

interface Props {
  data: OverviewProps | null
}

export default function Overview({ data }: Props) {
  if (!data) return null

  const details = [
    { label: "Type", value: data.type },
    { label: "Episodes", value: data.episodes },
    { label: "Genre", value: data.genre },
    { label: "Aired", value: data.aired },
    { label: "Status", value: data.status },
    { label: "Season", value: data.season },
    { label: "Studios", value: data.studios },
    { label: "Source", value: data.source },
    { label: "Rating", value: data.rating },
    { label: "Duration", value: data.duration },
  ]

  return (
    <div className="flex gap-8 py-15">
      <div className="max-w-1/4">
        <h2 className="mb-6 text-2xl font-bold">Details</h2>
        <div className="flex flex-col gap-3">
          {details.map((d, i) => (
            <div key={i} className="flex gap-4 pb-2">
              <div className="text-[var(--color-gray-2)] text-lg font-bold w-24 shrink-0">
                {d.label}
              </div>

              <div className="text-[var(--color-white)] font-medium break-words">
                {d.value ?? "."}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <h2 className="mb-6 text-2xl font-bold">Description</h2>
        <p className="text-[var(--color-white)] leading-relaxed">
          {data.desc ?? "No description"}
        </p>
      </div>
    </div>
  )
}
