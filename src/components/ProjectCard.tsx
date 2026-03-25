import { Project } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {project.imageUrl && (
        <div className="h-48 overflow-hidden bg-secondary/30 relative group">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <div className="text-muted-foreground mb-4 text-sm flex-1 leading-relaxed">
          {Array.isArray(project.description) ? (
            <ul className="list-disc pl-5 space-y-1">
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          ) : (
            <p className="whitespace-pre-line">{project.description}</p>
          )}
        </div>


        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Link</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
