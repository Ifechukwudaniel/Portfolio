import { useEffect, useRef } from "react"

export default function useIsMobile() {
  const screenSize = useRef()

  useEffect(() => {
    window.addEventListener("resize", () => {
      screenSize.current = window.innerWidth
    })
    return () => {
      window.removeEventListener("resize", () => {
        screenSize.current = window.innerWidth
      })
    }
  }, [])

  return screenSize.current <= 768
}
