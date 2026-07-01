"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 769) return;

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 3}px`;
        dotRef.current.style.top = `${e.clientY - 3}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX - (hovering ? 30 : 20)}px`;
        ringRef.current.style.top = `${e.clientY - (hovering ? 30 : 20)}px`;
      }
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [hovering]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className={`cursor-ring hidden md:block ${hovering ? "hovering" : ""}`} />
    </>
  );
}
