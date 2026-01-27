import { createPortal } from "react-dom"
import { Loader } from "./Loader"
import { useLoader } from "@/shared/model/store/useLoader"

export const LoaderOverlay = () => {
  const portalRoot = document.getElementById("portal-root")
  const isLoading = useLoader(state => state.isLoading)

  if (!portalRoot) return null
  if (!isLoading) return null

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
