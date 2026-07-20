import { useEffect } from "react";
import { X } from "lucide-react";

export function VideoLightbox({
  src,
  open,
  onClose,
  title,
}: {
  src: string;
  open: boolean;
  onClose: () => void;
  title?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Video player"}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <video
        src={src}
        controls
        autoPlay
        playsInline
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[95vw] rounded-md shadow-2xl"
      />
    </div>
  );
}

export function PlayOverlay() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg backdrop-blur transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );
}
