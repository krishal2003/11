"use client"
import { useEffect } from "react"

export default function CursorTracker() {
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className =
      "fixed w-2 h-2 bg-white/60 rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out mix-blend-difference"
    cursor.style.transform = "translate(-50%, -50%)"
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    const handleMouseEnter = () => {
      cursor.style.width = "12px"
      cursor.style.height = "12px"
      cursor.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
      cursor.style.mixBlendMode = "normal"
    }

    const handleMouseLeave = () => {
      cursor.style.width = "8px"
      cursor.style.height = "8px"
      cursor.style.backgroundColor = "rgba(255, 255, 255, 0.6)"
      cursor.style.mixBlendMode = "difference"
    }

    document.addEventListener("mousemove", moveCursor)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return null
}
