// src/pages/Publications.tsx
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { Skeleton } from "@/components/ui/skeleton";
import { useProfile, usePublications } from "@/hooks/use-portfolio";
import { FooterContact } from "@/components/FooterContact";

import { Code, ExternalLink, FileText } from "lucide-react";

type PubLinksProps = {
    links?: {
        pdf?: string;
        arxiv?: string;
        doi?: string;
        code?: string;
        slides?: string;
    };
};

function PubLinks({ links }: PubLinksProps) {
    if (!links) return null;

    const items = [
        links.pdf ? { label: "PDF", href: links.pdf, Icon: FileText } : null,
        links.arxiv ? { label: "arXiv", href: links.arxiv, Icon: ExternalLink } : null,
        links.doi ? { label: "DOI", href: links.doi, Icon: ExternalLink } : null,
        links.code ? { label: "Code", href: links.code, Icon: Code } : null,
        links.slides ? { label: "Slides", href: links.slides, Icon: ExternalLink } : null,
    ].filter(Boolean) as { label: string; href: string; Icon: any }[];

    if (items.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-3 mt-3">
            {items.map((it) => (
                <a
                    key={it.label}
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                    <it.Icon className="w-4 h-4" />
                    {it.label}
                </a>
            ))}
        </div>
    );
}

export default function Publications() {
    const { data: profile } = useProfile();
    const { data: pubs, isLoading } = usePublications();

    const groups = {
        conference: "Conference Papers",
        journal: "Journal Articles",
        workshop: "Workshop Papers",
        preprint: "Preprints",
        techreport: "Technical Reports",
        thesis: "Theses",
        poster: "Posters / Demos",
        inprep: "In Preparation",
    } as const;

    type Kind = keyof typeof groups;

    const listByKind = (kind: Kind) =>
        (pubs ?? [])
            .filter((p: any) => p.kind === kind)
            .sort((a: any, b: any) => (b.year ?? 0) - (a.year ?? 0));

    const name = profile?.name ?? "";
    const email = profile?.email ?? "";
    const linkedinUrl = profile?.linkedinUrl ?? "";

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Navigation />

            {/* Main content */}
            <Helmet>
                <title>Publications | {name}</title>
            </Helmet>
            <section className="pt-32 pb-32 md:pt-40 md:pb-40">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <SectionHeading>Publications</SectionHeading>

                        {isLoading ? (
                            <div className="space-y-4 mt-8">
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-20 w-full" />
                            </div>
                        ) : (
                            <div className="mt-8 space-y-10">
                                {(Object.keys(groups) as Kind[]).map((kind) => {
                                    const items = listByKind(kind);
                                    if (items.length === 0) return null;

                                    return (
                                        <div key={kind}>
                                            <h3 className="text-lg font-bold mb-4">{groups[kind]}</h3>
                                            <div className="space-y-5">
                                                {items.map((p: any) => (
                                                    <div
                                                        key={p.id}
                                                        className="p-5 rounded-lg border border-border bg-background"
                                                    >
                                                        <div className="font-semibold text-foreground">
                                                            {p.title}
                                                        </div>

                                                        <div className="text-sm text-muted-foreground mt-1">
                                                            {p.authors.map((author: any, index: number) => (
                                                                <span key={index}>
                                                                    {author.url ? (
                                                                        <a
                                                                            href={author.url}
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                            className={author.me ? "font-semibold text-foreground" : "hover:underline"}
                                                                        >
                                                                            {author.name}
                                                                        </a>
                                                                    ) : (
                                                                        <span className={author.me ? "font-semibold text-foreground" : ""}>
                                                                            {author.name}
                                                                        </span>
                                                                    )}
                                                                    {index < p.authors.length - 1 ? ", " : ""}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <div className="text-sm text-muted-foreground mt-1">
                                                            {p.venue ? (
                                                                <span className="font-medium">{p.venue}</span>
                                                            ) : null}
                                                            {p.venue ? " • " : null}
                                                            {p.year}
                                                            {p.note ? (
                                                                <span className="ml-2 text-primary/80">
                                                                    ({p.note})
                                                                </span>
                                                            ) : null}
                                                        </div>

                                                        <PubLinks links={p.links} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}

                                {(!pubs || pubs.length === 0) && (
                                    <div className="text-muted-foreground">
                                        No peer-reviewed publications yet. See my{" "}
                                        <a className="text-primary font-medium hover:underline" href="/#research">
                                            Research
                                        </a>{" "}
                                        section for ongoing work.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <FooterContact
                name={name}
                email={email}
                linkedinUrl={linkedinUrl}
                yearStart={2024}
            />
        </div>
    );
}