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
    <div className="flex gap-8">
      <div className="max-w-1/4">
        <h2 className="mb-4 text-2xl font-bold">Details</h2>
        <div className="grid grid-cols-2 gap-4">
          {details.map((d, i) => (
            <div key={i}>
              <div className="text-[var(--color-gray-2)]">{d.label}</div>
              <div className="text-[var(--color-white)]">{d.value ?? "."}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <h2 className="mb-4 text-2xl font-bold">Description</h2>
        <p className="text-[var(--color-white)]">{data.desc ?? "No description"}</p>
      </div>
    </div>
  )
}
