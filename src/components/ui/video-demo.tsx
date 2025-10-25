import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoDemoProps {
  youtubeId: string;
  title?: string;
  description?: string;
  className?: string;
}

export const VideoDemo = ({
  youtubeId,
  title = "Watch Demo",
  description = "Click to see how it works",
  className,
}: VideoDemoProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group cursor-pointer hover:from-purple-500/30 hover:to-blue-500/30 transition-all",
        className
      )}
    >
      {showVideo ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
            onClick={() => setShowVideo(true)}
          >
            <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
              <Play className="h-10 w-10 text-purple-600 dark:text-purple-400 ml-1" />
            </div>
            <div className="text-center mt-4">
              <div className="font-semibold text-lg sm:text-xl mb-1">{title}</div>
              <div className="text-sm text-muted-foreground">{description}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};