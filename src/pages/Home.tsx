import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ResearchItem } from "@/components/ResearchItem";
import {
  useProfile,
  useEducation,
  useResearch,
  useNews,
  useStudents,
  useServices,
  useFeaturedPublications,
  useTalks,
  useAwards,
  useGrants,
} from "@/hooks/use-portfolio";
import {
  FileText,
  MapPin,
  GraduationCap,
  Download
} from "lucide-react";
import {
  SiOrcid,
  SiGooglescholar,
  SiGithub,
  SiLinkedin,
  SiMailboxdotorg
} from "react-icons/si";
import { Skeleton } from "@/components/ui/skeleton";
import { FooterContact } from "@/components/FooterContact";

export default function Home() {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: education, isLoading: eduLoading } = useEducation();
  const { data: research, isLoading: researchLoading } = useResearch();
  const { data: news } = useNews();
  const { data: featuredPubs } = useFeaturedPublications();
  const { data: students } = useStudents();
  const { data: services } = useServices();
  const { data: talks } = useTalks();
  const { data: awards } = useAwards();
  const { data: grants } = useGrants();
  if (profileLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="space-y-4 w-full max-w-md px-8">
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
          <div className="flex justify-center gap-4 mt-8">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navigation />

      {/* HERO / ABOUT SECTION */}
      <Helmet>
        <title>{profile.name}</title>
        <meta
          name="description"
          content={`${profile.name} — ${profile.intro}`}
        />
      </Helmet>
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

            {/* Profile Image & Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center md:items-start space-y-6"
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border-4 border-white shadow-xl bg-secondary">
                  <img
                    src={profile.imageUrl || "/imgs/me.JPG"}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary -z-10 rounded-full blur-2xl opacity-60"></div>
              </div>

              <div className="space-y-2 text-center md:text-left w-full">
                <h1 className="text-3xl md:text-3xl font-bold text-primary tracking-tight">
                  {profile.name}
                </h1>
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  {profile.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                {profile.orcidUrl && (
                  <a
                    href={profile.orcidUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary/50 rounded-full hover:bg-secondary"
                    aria-label="Google Scholar"
                    title="Google Scholar"
                  >
                    <SiOrcid className="w-5 h-5" />
                  </a>
                )}
                {profile.scholarUrl && (
                  <a
                    href={profile.scholarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary/50 rounded-full hover:bg-secondary"
                    aria-label="Google Scholar"
                    title="Google Scholar"
                  >
                    <SiGooglescholar className="w-5 h-5" />
                  </a>
                )}
                {profile.githubUrl && (
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary/50 rounded-full hover:bg-secondary"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                )}
                {profile.linkedinUrl && (
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-foreground/70 hover:text-primary transition-colors bg-secondary/50 rounded-full hover:bg-secondary"
                  >
                    <SiLinkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Bio & Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>{profile.intro}</p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education?.sort((a, b) => a.order - b.order).map((edu) => (
                    <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <div>
                        <span className="font-semibold text-foreground">{edu.institution}</span>
                        <span className="block text-sm text-muted-foreground">{edu.degree}</span>
                      </div>
                      <span className="text-sm font-mono text-primary bg-primary/5 px-2 py-0.5 rounded">{edu.year}</span>
                    </div>
                  ))}
                  {(!education || education.length === 0) && (
                    <p className="text-sm text-muted-foreground italic">Education information loading...</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      {news && news.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading>News</SectionHeading>
            <div className="max-w-3xl space-y-0">
              {news.sort((a, b) => a.order - b.order).map((item) => (
                <div key={item.id} className="flex gap-6 py-3 border-b border-border/50">
                  <span className="font-mono text-xs text-primary font-bold shrink-0 pt-0.5 w-20">{item.date}</span>
                  <span className="text-sm text-foreground leading-relaxed">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline">
                        {item.content}
                      </a>
                    ) : item.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RESEARCH SECTION */}
      {
        <section id="research" className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionHeading>Research</SectionHeading>
            <div className="max-w-3xl">
              {researchLoading ? (
                <div className="space-y-8">
                  {[1, 2].map(i => <Skeleton key={i} className="h-32 w-full rounded-lg" />)}
                </div>
              ) : (
                <div className="space-y-2">
                  {research?.sort((a, b) => a.order - b.order).map((item) => (
                    <ResearchItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      }

      {/* SELECTED PUBLICATIONS SECTION */}
      {featuredPubs && featuredPubs.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading>Selected Publications</SectionHeading>
            <div className="max-w-3xl mt-6 space-y-5">
              {featuredPubs.map((p) => (
                <div key={p.id} className="p-5 rounded-lg border border-border bg-background">
                  <div className="font-semibold text-foreground">{p.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {p.authors.map((author, i) => (
                      <span key={i}>
                        {author.url ? (
                          <a href={author.url} target="_blank" rel="noreferrer"
                            className={author.me ? "font-semibold text-foreground" : "hover:underline"}>
                            {author.name}
                          </a>
                        ) : (
                          <span className={author.me ? "font-semibold text-foreground" : ""}>{author.name}</span>
                        )}
                        {i < p.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {p.venue && <span className="font-medium">{p.venue}</span>}
                    {p.venue && " • "}
                    {p.year}
                    {p.note && <span className="ml-2 text-primary/80">({p.note})</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STUDENTS SECTION */}
      {students && students.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionHeading>Students</SectionHeading>
            <div className="max-w-3xl mt-6 space-y-0">
              {students.sort((a, b) => a.order - b.order).map((s) => (
                <div key={s.id} className="flex items-center justify-between py-3 border-b border-border/50 px-2">
                  <div>
                    {s.link ? (
                      <a href={s.link} target="_blank" rel="noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors">
                        {s.name}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{s.name}</span>
                    )}
                    {s.note && <div className="text-xs text-muted-foreground mt-0.5">{s.note}</div>}
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-sm text-muted-foreground">{s.degree} · {s.institution}</div>
                    <div className="text-xs text-primary/80 font-mono">{s.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AWARDS SECTION */}
      {awards && awards.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading>Awards & Honors</SectionHeading>
            <div className="max-w-3xl mt-6 space-y-0">
              {awards.sort((a, b) => a.order - b.order).map((a) => (
                <div key={a.id} className="flex items-baseline justify-between py-3 border-b border-border/50 px-2">
                  <div>
                    {a.link ? (
                      <a href={a.link} target="_blank" rel="noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors">
                        {a.name}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{a.name}</span>
                    )}
                    <div className="text-sm text-muted-foreground">{a.org}</div>
                    {a.description && <div className="text-xs text-muted-foreground mt-0.5">{a.description}</div>}
                  </div>
                  <span className="text-xs font-mono text-primary shrink-0 ml-4">{a.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TALKS SECTION */}
      {talks && talks.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionHeading>Talks & Presentations</SectionHeading>
            <div className="max-w-3xl mt-6 space-y-0">
              {talks.sort((a, b) => a.order - b.order).map((t) => (
                <div key={t.id} className="py-3 border-b border-border/50 px-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium text-foreground">{t.title}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {t.event}
                        {t.location && <span> · {t.location}</span>}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-mono text-primary">{t.date}</div>
                      <div className="text-xs text-muted-foreground capitalize mt-0.5">{t.type.replace("-", " ")}</div>
                    </div>
                  </div>
                  {(t.slides || t.video) && (
                    <div className="flex gap-4 mt-1.5">
                      {t.slides && <a href={t.slides} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">Slides</a>}
                      {t.video && <a href={t.video} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">Video</a>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GRANTS SECTION */}
      {grants && grants.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading>Grants & Funding</SectionHeading>
            <div className="max-w-3xl mt-6 space-y-0">
              {grants.sort((a, b) => a.order - b.order).map((g) => (
                <div key={g.id} className="py-3 border-b border-border/50 px-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {g.link ? (
                        <a href={g.link} target="_blank" rel="noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors">
                          {g.title}
                        </a>
                      ) : (
                        <span className="font-medium text-foreground">{g.title}</span>
                      )}
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {g.agency}
                        <span className="mx-1.5">·</span>
                        <span className="text-primary/80 font-medium">{g.role}</span>
                        {g.amount && <span className="mx-1.5">· {g.amount}</span>}
                      </div>
                      {g.description && <div className="text-xs text-muted-foreground mt-0.5">{g.description}</div>}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground shrink-0">{g.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROFESSIONAL SERVICES SECTION */}
      {services && services.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading>Professional Services</SectionHeading>
            <div className="max-w-3xl mt-6 space-y-0">
              {services.sort((a, b) => a.order - b.order).map((s) => (
                <div key={s.id} className="flex items-baseline justify-between py-3 border-b border-border/50 px-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs text-primary font-bold shrink-0">{s.role}</span>
                    <span className="text-foreground font-medium">{s.venue}</span>
                  </div>
                  {s.year && <span className="text-xs font-mono text-muted-foreground shrink-0 ml-4">{s.year}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ABOUT SECTION */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading>Bio</SectionHeading>
          <div className="max-w-3xl prose prose-lg text-muted-foreground">
            <p>{profile.bio}</p>
          </div>
        </div>
      </section>

      <FooterContact
        name={profile?.name ?? ""}
        email={profile?.email ?? ""}
        linkedinUrl={profile?.linkedinUrl ?? ""}
        yearStart={2024}
      />
    </div>
  );
}
