// src/pages/Contact.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { FooterContact } from "@/components/FooterContact";
import { useProfile } from "@/hooks/use-portfolio";
import { Mail, MapPin } from "lucide-react";
import { SiOrcid, SiGooglescholar, SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
    const { data: profile } = useProfile();

    const links = [
        profile?.email && {
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
            icon: <Mail className="w-5 h-5" />,
        },
        profile?.githubUrl && {
            label: "GitHub",
            value: profile.githubUrl.replace("https://", ""),
            href: profile.githubUrl,
            icon: <SiGithub className="w-5 h-5" />,
        },
        profile?.linkedinUrl && {
            label: "LinkedIn",
            value: profile.linkedinUrl.replace("https://", ""),
            href: profile.linkedinUrl,
            icon: <SiLinkedin className="w-5 h-5" />,
        },
        profile?.scholarUrl && {
            label: "Google Scholar",
            value: "Google Scholar Profile",
            href: profile.scholarUrl,
            icon: <SiGooglescholar className="w-5 h-5" />,
        },
        profile?.orcidUrl && {
            label: "ORCID",
            value: profile.orcidUrl.replace("https://orcid.org/", ""),
            href: profile.orcidUrl,
            icon: <SiOrcid className="w-5 h-5" />,
        },
    ].filter(Boolean) as { label: string; value: string; href: string; icon: React.ReactNode }[];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Navigation />

            <Helmet>
                <title>Contact | {profile?.name}</title>
            </Helmet>

            <section className="pt-32 pb-32 md:pt-40 md:pb-40">
                <div className="container-custom">
                    <div className="max-w-2xl">
                        <SectionHeading>Contact</SectionHeading>

                        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                            I'm always happy to hear about research collaborations, new opportunities, or just to connect.
                        </p>

                        {profile?.title && (
                            <div className="mt-10 flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    {profile.title.split("\n").map((line, i) => (
                                        <div key={i} className={i === 0 ? "font-medium text-foreground" : "text-sm"}>
                                            {line.trim()}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-8 space-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/40 transition-all group"
                                >
                                    <span className="text-primary">{link.icon}</span>
                                    <div>
                                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{link.label}</div>
                                        <div className="text-foreground group-hover:text-primary transition-colors font-medium">{link.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

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
