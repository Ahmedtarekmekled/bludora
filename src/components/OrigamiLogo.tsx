interface OrigamiLogoProps {
  size?: "small" | "large";
  className?: string;
}

function SVGOrigamiLogo({ size, className }: OrigamiLogoProps) {
  const sizeClass = size === "large" ? "w-32 h-32" : "w-10 h-10";

  return (
    <div className={`${sizeClass} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full origami-logo"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient
            id="middleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient
            id="bottomGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        {/* Origami-style B using geometric shapes */}
        <g>
          {/* Main vertical line */}
          <rect x="20" y="15" width="8" height="70" fill="#3b82f6" />

          {/* Top section */}
          <polygon
            points="28,15 65,15 70,20 70,35 65,40 40,40 28,35"
            fill="url(#topGradient)"
          />

          {/* Middle section */}
          <polygon
            points="28,40 60,40 65,45 65,55 60,60 28,60"
            fill="url(#middleGradient)"
          />

          {/* Bottom section */}
          <polygon
            points="28,60 70,60 75,65 75,80 70,85 28,85"
            fill="url(#bottomGradient)"
          />

          {/* Origami fold lines */}
          <line
            x1="28"
            y1="27"
            x2="65"
            y2="27"
            stroke="#1a365d"
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="28"
            y1="50"
            x2="60"
            y2="50"
            stroke="#1a365d"
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="28"
            y1="72"
            x2="70"
            y2="72"
            stroke="#1a365d"
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="50"
            y1="15"
            x2="50"
            y2="40"
            stroke="#1a365d"
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="45"
            y1="40"
            x2="45"
            y2="60"
            stroke="#1a365d"
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="55"
            y1="60"
            x2="55"
            y2="85"
            stroke="#1a365d"
            strokeWidth="1"
            opacity="0.3"
          />
        </g>
      </svg>
    </div>
  );
}

export default function OrigamiLogo({
  size = "small",
  className = "",
}: OrigamiLogoProps) {
  // Use SVG version for better performance and easier styling
  return <SVGOrigamiLogo size={size} className={className} />;
}
