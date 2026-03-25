import { Research } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

interface ResearchItemProps {
  item: Research;
}

export function ResearchItem({ item }: ResearchItemProps) {
  return (
    <div className="mb-8">
      {/* Outer bullet (thrust) */}
      <div className="flex gap-3">
        <div className="mt-2 h-2 w-2 rounded-full bg-foreground/70 shrink-0" />
        <div className="min-w-0">
          <div className="text-lg font-semibold text-foreground">{item.title}</div>

          {item.overview && (
            <div className="mt-1 text-muted-foreground leading-relaxed">
              {item.overview}
            </div>
          )}

          {/* Nested bullets (projects) */}
          {item.items && item.items.length > 0 && (
            <ul className="mt-3 ml-5 space-y-2 list-[circle] text-muted-foreground">
              {item.items.map((sub) => (
                <li key={sub.name} className="leading-relaxed">
                  <span className="text-primary font-medium">
                    {sub.link ? (
                      <a
                        href={sub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline inline-flex items-center gap-1"
                      >
                        {sub.name} <ArrowRight className="w-3 h-3" />
                      </a>
                    ) : (
                      sub.name
                    )}
                  </span>
                  {": "}
                  <span>{sub.description}</span>
                  {sub.note ? (
                    <span className="ml-2 font-semibold text-foreground/80">
                      ({sub.note})
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}