// src/pages/Teaching.tsx
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { Skeleton } from "@/components/ui/skeleton";
import { useProfile, useCourses } from "@/hooks/use-portfolio";
import { FooterContact } from "@/components/FooterContact";

export default function Teaching() {
    const { data: profile } = useProfile();
    const { data: courses, isLoading } = useCourses();

    const name = profile?.name ?? "";
    const email = profile?.email ?? "";
    const linkedinUrl = profile?.linkedinUrl ?? "";

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Navigation />

            <Helmet>
                <title>Teaching | {name}</title>
            </Helmet>
            <section className="pt-32 pb-32 md:pt-40 md:pb-40">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <SectionHeading>Teaching</SectionHeading>

                        {isLoading ? (
                            <div className="space-y-4 mt-8">
                                {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-12 w-full" />)}
                            </div>
                        ) : (
                            <div className="mt-8 space-y-0">
                                {courses?.sort((a, b) => a.order - b.order).map((course) => (
                                    <div key={course.id} className="py-3 border-b border-border/50 px-2">
                                        <div className="flex items-baseline gap-3 mb-1">
                                            <span className="font-mono text-xs text-primary font-bold shrink-0">{course.code}</span>
                                            <span className="text-foreground font-medium">{course.name}</span>
                                            <span className="text-xs text-muted-foreground hidden sm:block ml-auto shrink-0">{course.institution}</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5 pl-0">
                                            {course.semesters.map((s, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <span className="text-primary/80 font-medium">{s.role}</span>
                                                    <span>·</span>
                                                    <span>{s.semester}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
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
