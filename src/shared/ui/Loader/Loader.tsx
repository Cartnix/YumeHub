import { motion } from "framer-motion"

export default function Loader() {
  const rings = [
    { size: "100%", inset: "0px", duration: 1 },
    { size: "85%", inset: "6px", duration: 2 },
    { size: "70%", inset: "14px", duration: 3 },
    { size: "50%", inset: "20px", duration: 5 },
    { size: "25%", inset: "25px", duration: 8 },
  ]

  return (
    <div className="relative w-[80px] aspect-square grid place-items-center">
      {rings.map((r, i) => (
        <motion.div
          key={i}
          className="
            absolute
            border-4 border-transparent border-r-[var(--color-offwhite)]
            rounded-full
          "
          style={{ inset: r.inset }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: r.duration, ease: "linear" }}
        />
      ))}
    </div>
  )
}
