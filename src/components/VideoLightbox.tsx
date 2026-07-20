import { useEffect } from "react";
import { X } from "lucide-react";

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1) || null;
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      if (u.pathname.startsWith("/embed/")) return u.pathname.split("/")[2] || null;
      if (u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2] || null;
    }
  } catch {
    return null;
  }
  return null;
}

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

  const ytId = getYouTubeId(src);

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
      {ytId ? (
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[95vw] md:max-w-5xl aspect-video overflow-hidden rounded-md shadow-2xl bg-black"
        >
          <iframe
            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`}
            title={title ?? "Video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] max-w-[95vw] rounded-md shadow-2xl"
        />
      )}
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
