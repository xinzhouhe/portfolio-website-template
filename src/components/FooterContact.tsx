import { motion } from "framer-motion";
import { SiMailboxdotorg, SiLinkedin, } from "react-icons/si";
import { LucideMail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type FooterContactProps = {
    name: string;
    email: string;
    linkedinUrl?: string | null;
    yearStart?: number;
};

export function FooterContact({
    name,
    email,
    linkedinUrl,
    yearStart = 2024,
}: FooterContactProps) {
    const yearEnd = new Date().getFullYear();
    const safeLinkedin =
        linkedinUrl && linkedinUrl.trim().length > 0
            ? linkedinUrl
            : "#";
    const formattedBuildTime = new Date(__BUILD_TIME__).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <section className="section-padding bg-primary text-primary-foreground">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>

                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
                        I'm always open to discussing new opportunities, research collaborations, or
                        interesting projects.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-md font-bold shadow-lg hover:bg-secondary transition-all hover:-translate-y-1"
                        >
                            <LucideMail className="w-5 h-5" />
                            Send Email
                        </a>

                        <a
                            href={safeLinkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-white border border-white/20 rounded-md font-bold hover:bg-primary-foreground/20 transition-all hover:-translate-y-1 backdrop-blur-sm"
                        >
                            <SiLinkedin className="w-5 h-5" />
                            LinkedIn
                        </a>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 text-sm text-primary-foreground/50">
                        © {yearStart} - {yearEnd} {name}. All rights reserved.
                        <div className="text-xs opacity-60">
                            Last updated {formattedBuildTime}.
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}