"use client";
import { useEffect } from "react";

interface CursorTrackerProps {
  useCustomCursor?: boolean;
}

export default function CursorTracker({
  useCustomCursor = false,
}: CursorTrackerProps) {
  useEffect(() => {
    // Reset cursor to default first
    document.body.style.cursor = useCustomCursor ? "none" : "default";

    if (!useCustomCursor) return;

    // Create custom cursor
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-8 h-8 bg-white/60 rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out mix-blend-difference";
    cursor.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const handleMouseEnter = () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      cursor.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      cursor.style.mixBlendMode = "normal";
    };

    const handleMouseLeave = () => {
      cursor.style.width = "8px";
      cursor.style.height = "8px";
      cursor.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      cursor.style.mixBlendMode = "difference";
    };

    document.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      document.body.style.cursor = "default"; // restore system cursor
    };
  }, [useCustomCursor]);

  return null;
}
