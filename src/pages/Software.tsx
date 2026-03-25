// src/pages/Software.tsx
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectCard } from "@/components/ProjectCard";
import { useProfile, useProjects } from "@/hooks/use-portfolio";
import { FooterContact } from "@/components/FooterContact";

export default function Software() {
    const { data: profile } = useProfile();
    const { data: projects, isLoading } = useProjects();

    const name = profile?.name ?? "";
    const email = profile?.email ?? "";
    const linkedinUrl = profile?.linkedinUrl ?? "";

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Navigation />

            <Helmet>
                <title>Software | {name}</title>
            </Helmet>
            <section className="pt-32 pb-32 md:pt-40 md:pb-40">
                <div className="container-custom">
                    <SectionHeading>Software</SectionHeading>

                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {[1, 2, 3].map(i => <Skeleton key={i} className="h-80 rounded-lg" />)}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {projects?.sort((a, b) => a.order - b.order).map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
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
