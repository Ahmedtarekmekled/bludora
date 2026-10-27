import BrowserFrame from "./BrowserFrame";
import ChatMockup from "./ChatMockup";
import type { Project } from "../data/projects";

interface ProjectVisualProps {
  project: Project;
  eager?: boolean;
  /** Fit into the same 16:10 box as screenshots, for grids */
  compact?: boolean;
}

/** The main image for a project: a framed screenshot for sites, a chat mockup for bots. */
export default function ProjectVisual({ project, eager, compact }: ProjectVisualProps) {
  if (project.visual === "chat" || !project.url) {
    if (!compact) return <ChatMockup avatar={project.image} />;
    return (
      <div className="relative aspect-[16/10] overflow-hidden">
        <ChatMockup avatar={project.image} compact />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4"
          style={{ background: `linear-gradient(transparent, ${project.tint})` }}
        />
      </div>
    );
  }
  return <BrowserFrame src={project.image} alt={`${project.name} website`} url={project.url} eager={eager} />;
}
