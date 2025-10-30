import { createPortal } from "react-dom"
import Loader from "./Loader"

export default function LoaderOverlay() {
  const portalRoot = document.getElementById("portal-root")
  if (!portalRoot) return null

  return createPortal(
    <div className="
      fixed inset-0
      flex items-center justify-center
      bg-black/60
      backdrop-blur-sm
      z-[9999]
    ">
      <Loader />
    </div>,
    portalRoot
  )
}
